import { Search, X } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { searchLocalPokemons } from '../services/pokemonService';
import type { PokemonBasic } from '../types/pokemon';
import { TypeBadge } from './TypeBadge';

interface SearchBarProps {
  onSelectPokemon: (pokemon: PokemonBasic) => void;
  selectedPokemon: PokemonBasic | null;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  onSelectPokemon,
}) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<PokemonBasic[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // 실시간 검색
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    const matched = searchLocalPokemons(query);
    setResults(matched.slice(0, 8)); // 상위 8개 표시
    setIsOpen(true);
  }, [query]);

  // 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (pokemon: PokemonBasic) => {
    onSelectPokemon(pokemon);
    setQuery('');
    setIsOpen(false);
    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  const handleClear = () => {
    setQuery('');
    setResults([]);
    setIsOpen(false);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div ref={containerRef} className="relative w-full z-30">
      <div className="relative flex items-center">
        <div className="absolute left-3.5 text-slate-400 pointer-events-none">
          <Search className="w-5 h-5" />
        </div>

        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => {
            if (query.trim()) setIsOpen(true);
          }}
          placeholder="포켓몬 이름 / 초성(ㅍㅋㅊ) / 번호 검색..."
          className="w-full pl-11 pr-11 py-3.5 text-base font-semibold bg-white rounded-2xl border-2 border-slate-200/90 shadow-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-red-500 focus:ring-4 focus:ring-red-500/15 transition-all"
        />

        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-3 p-1.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* 자동완성 드롭다운 */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden divide-y divide-slate-100 max-h-[380px] overflow-y-auto animate-in fade-in duration-150 z-50">
          {results.length > 0 ? (
            results.map((pokemon) => (
              <div
                key={pokemon.id}
                onClick={() => handleSelect(pokemon)}
                className="flex items-center justify-between p-3 hover:bg-red-50/60 active:bg-red-100/60 cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-3">
                  {/* 포켓몬 썸네일 */}
                  <div className="w-12 h-12 bg-slate-100 rounded-xl p-1 flex items-center justify-center shrink-0 border border-slate-200/60">
                    <img
                      src={pokemon.artworkUrl}
                      alt={pokemon.nameKo}
                      className="w-10 h-10 object-contain drop-shadow-sm"
                      loading="lazy"
                    />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-400">
                        #{pokemon.id.toString().padStart(3, '0')}
                      </span>
                      <span className="text-base font-bold text-slate-900">
                        {pokemon.nameKo}
                      </span>
                      {pokemon.isLegendary && (
                        <span className="text-[10px] font-bold bg-amber-100 text-amber-700 px-1.5 py-0.2 rounded-md">
                          전설
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-slate-400 font-medium">
                      {pokemon.nameEn}
                    </span>
                  </div>
                </div>

                {/* 타입 뱃지 목록 */}
                <div className="flex gap-1 shrink-0">
                  {pokemon.types.map((type) => (
                    <TypeBadge key={type} type={type} size="sm" />
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="p-6 text-center text-slate-500 font-medium">
              <p className="text-sm">일치하는 포켓몬을 찾을 수 없습니다.</p>
              <p className="text-xs text-slate-400 mt-1">
                정확한 한글 이름(예: 피카츄)이나 초성(ㅍㅋㅊ)을 확인해 주세요.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
