import { Palette, Shield } from 'lucide-react';
import React, { useMemo, useState } from 'react';
import { Header } from './components/Header';
import { MovesSection } from './components/MovesSection';
import { PokemonCard } from './components/PokemonCard';
import { RaidTipsBanner } from './components/RaidTipsBanner';
import { SearchBar } from './components/SearchBar';
import { TypeReferenceModal } from './components/TypeReferenceModal';
import { WeaknessSection } from './components/WeaknessSection';
import { POPULAR_POKEMONS } from './data/pokemonData';
import { getPokemonMoveset } from './data/pokemonMoves';
import type { PokemonBasic } from './types/pokemon';
import { calculateTypeEffectiveness } from './utils/typeEffectiveness';

export const App: React.FC = () => {
  // 기본 선택 포켓몬: 리자몽 (불꽃/비행, 이중 약점 바위 2.56배를 바로 보여줄 수 있는 최적의 레이드 보스 예시)
  const defaultPokemon =
    POPULAR_POKEMONS.find((p) => p.nameKo === '리자몽') || POPULAR_POKEMONS[0];
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonBasic>(defaultPokemon);
  const [isTypeModalOpen, setIsTypeModalOpen] = useState(false);

  // 상성 계산 (메모이제이션)
  const effectiveness = useMemo(() => {
    return calculateTypeEffectiveness(selectedPokemon.types);
  }, [selectedPokemon]);

  // 기술셋 계산 (메모이제이션)
  const moveset = useMemo(() => {
    return getPokemonMoveset(selectedPokemon.id, selectedPokemon.types);
  }, [selectedPokemon]);

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col justify-between text-slate-800 antialiased selection:bg-red-500 selection:text-white">
      {/* 상단 헤더 */}
      <Header />

      {/* 메인 콘텐츠 컨테이너 (모바일 퍼스트 max-w-md 가운데 정렬) */}
      <main className="w-full max-w-md mx-auto px-4 py-4 space-y-4 flex-1">
        {/* 1. 실시간 한글 및 초성 검색창 */}
        <SearchBar
          onSelectPokemon={setSelectedPokemon}
          selectedPokemon={selectedPokemon}
        />

        {/* 2. 선택된 포켓몬 메인 카드 */}
        <PokemonCard pokemon={selectedPokemon} />

        {/* 3. 포켓몬 GO 인게임 보관함 검색 팁 배너 */}
        <RaidTipsBanner
          effectiveness={effectiveness}
          pokemonName={selectedPokemon.nameKo}
        />

        {/* 4. 정밀 상성 계산 섹션 (2.56배 / 1.6배 / 0.625배 / 0.39배) */}
        <WeaknessSection
          effectiveness={effectiveness}
          pokemonName={selectedPokemon.nameKo}
        />

        {/* 5. 사용 가능 기술 목록 (노말 어택 & 스페셜 어택) */}
        <MovesSection
          moveset={moveset}
          pokemonName={selectedPokemon.nameKo}
        />

        {/* 18개 공식 타입 팔레트 보기 버튼 */}
        <div className="pt-2">
          <button
            type="button"
            onClick={() => setIsTypeModalOpen(true)}
            className="w-full py-3 px-4 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs rounded-2xl border border-slate-200/80 shadow-xs flex items-center justify-center gap-2 transition-colors active:scale-98"
          >
            <Palette className="w-4 h-4 text-slate-500" />
            <span>포켓몬 GO 18개 공식 타입 색상표 보기</span>
          </button>
        </div>
      </main>

      {/* 하단 푸터 */}
      <footer className="w-full max-w-md mx-auto px-4 py-5 text-center text-xs text-slate-400 space-y-1">
        <p className="flex items-center justify-center gap-1 font-semibold text-slate-500">
          <Shield className="w-3.5 h-3.5 text-red-500" />
          <span>PokeRadar • 포켓몬 GO 레이드 공략 도우미</span>
        </p>
        <p className="text-[11px] text-slate-400">
          Pokémon and Pokémon character names are trademarks of Nintendo.
        </p>
      </footer>

      {/* 18개 타입 팔레트 모달 */}
      <TypeReferenceModal
        isOpen={isTypeModalOpen}
        onClose={() => setIsTypeModalOpen(false)}
      />
    </div>
  );
};

export default App;
