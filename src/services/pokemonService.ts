import { POPULAR_POKEMONS } from '../data/pokemonData';
import type { PokemonBasic, PokemonTypeName } from '../types/pokemon';
import { matchesSearch } from '../utils/hangulSearch';

// 인메모리 및 로컬스토리지 캐시
const CACHE_KEY = 'pokeradar_custom_pokemon_cache';

function getLocalCache(): Record<number, PokemonBasic> {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveToLocalCache(pokemon: PokemonBasic) {
  try {
    const cache = getLocalCache();
    cache[pokemon.id] = pokemon;
    localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
  } catch {
    // ignore storage error
  }
}

/**
 * PokeAPI로부터 특정 포켓몬 ID의 상세 정보를 페치하여 포맷팅
 */
export async function fetchPokemonFromPokeApi(idOrName: string | number): Promise<PokemonBasic | null> {
  try {
    // 1. 기본 정보 (타입, 스프라이트)
    const pokeRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${idOrName}`);
    if (!pokeRes.ok) return null;
    const pokeData = await pokeRes.json();

    const id = pokeData.id;
    const types: PokemonTypeName[] = pokeData.types.map(
      (t: { type: { name: string } }) => t.type.name as PokemonTypeName
    );
    const artworkUrl =
      pokeData.sprites?.other?.['official-artwork']?.front_default ||
      pokeData.sprites?.front_default ||
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

    // 2. 종족 정보 (한글 이름)
    let nameKo = pokeData.name;
    try {
      const speciesRes = await fetch(pokeData.species.url);
      if (speciesRes.ok) {
        const speciesData = await speciesRes.json();
        const koNameObj = speciesData.names?.find(
          (n: { language: { name: string }; name: string }) => n.language.name === 'ko'
        );
        if (koNameObj) {
          nameKo = koNameObj.name;
        }
      }
    } catch {
      // 종족 한글명 실패 시 영문명 폴백
    }

    const pokemon: PokemonBasic = {
      id,
      nameKo,
      nameEn: pokeData.name.charAt(0).toUpperCase() + pokeData.name.slice(1),
      types,
      artworkUrl,
      generation: 1,
    };

    saveToLocalCache(pokemon);
    return pokemon;
  } catch {
    return null;
  }
}

/**
 * 로컬 기본 데이터셋 + 캐시된 데이터를 기반으로 검색
 */
export function searchLocalPokemons(query: string): PokemonBasic[] {
  if (!query || !query.trim()) return [];

  const localCache = getLocalCache();
  const allKnown = [...POPULAR_POKEMONS];

  // 캐시된 포켓몬 중 중복되지 않은 항목 병합
  const knownIds = new Set(allKnown.map(p => p.id));
  for (const p of Object.values(localCache)) {
    if (!knownIds.has(p.id)) {
      allKnown.push(p);
      knownIds.add(p.id);
    }
  }

  return allKnown.filter(p => matchesSearch(query, p));
}
