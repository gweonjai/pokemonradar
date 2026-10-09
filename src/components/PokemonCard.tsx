import { Award, Shield } from 'lucide-react';
import React from 'react';
import { POKEMON_TYPES } from '../constants/typeChart';
import type { PokemonBasic } from '../types/pokemon';
import { TypeBadge } from './TypeBadge';

interface PokemonCardProps {
  pokemon: PokemonBasic;
}

export const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  const primaryType = pokemon.types[0];
  const primaryColor = POKEMON_TYPES[primaryType]?.color || '#EF4444';

  return (
    <div className="relative w-full overflow-hidden rounded-3xl bg-white border border-slate-200/80 shadow-md p-5 transition-all">
      {/* 배경 장식 원 & 그라데이션 */}
      <div
        className="absolute -top-12 -right-12 w-48 h-48 rounded-full opacity-15 blur-2xl pointer-events-none"
        style={{ backgroundColor: primaryColor }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-1.5"
        style={{ backgroundColor: primaryColor }}
      />

      <div className="flex items-center justify-between">
        {/* 포켓몬 텍스트 정보 */}
        <div className="flex-1 pr-3">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-sm font-extrabold text-slate-400">
              #{pokemon.id.toString().padStart(3, '0')}
            </span>
            {pokemon.isLegendary && (
              <span className="inline-flex items-center gap-1 text-[11px] font-black bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full border border-amber-300">
                <Award className="w-3 h-3 text-amber-600" />
                전설의 포켓몬
              </span>
            )}
            {pokemon.isMythical && (
              <span className="inline-flex items-center gap-1 text-[11px] font-black bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full border border-purple-300">
                <Shield className="w-3 h-3 text-purple-600" />
                환상의 포켓몬
              </span>
            )}
          </div>

          <h2 className="text-2xl font-black text-slate-900 tracking-tight leading-tight">
            {pokemon.nameKo}
          </h2>
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
            {pokemon.nameEn}
          </p>

          {/* 보유 타입 뱃지 */}
          <div className="flex flex-wrap items-center gap-1.5">
            {pokemon.types.map((type) => (
              <TypeBadge key={type} type={type} size="md" />
            ))}
          </div>
        </div>

        {/* 공식 일러스트 (Official Artwork) */}
        <div className="relative w-32 h-32 flex items-center justify-center shrink-0">
          <div
            className="absolute inset-2 rounded-2xl opacity-15"
            style={{ backgroundColor: primaryColor }}
          />
          <img
            src={pokemon.artworkUrl}
            alt={pokemon.nameKo}
            className="w-28 h-28 object-contain drop-shadow-md z-10 transition-transform hover:scale-110 duration-200"
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
};
