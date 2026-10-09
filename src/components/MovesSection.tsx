import { ChevronDown, ChevronUp, Sparkles, Swords, Zap } from 'lucide-react';
import React, { useState } from 'react';
import type { PokemonMoveset } from '../types/pokemon';
import { TypeBadge } from './TypeBadge';

interface MovesSectionProps {
  moveset: PokemonMoveset;
  pokemonName: string;
}

export const MovesSection: React.FC<MovesSectionProps> = ({
  moveset,
  pokemonName,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const totalMovesCount = moveset.fast.length + moveset.charged.length;

  return (
    <div className="rounded-3xl bg-white border border-slate-200/80 shadow-xs p-4.5 transition-all">
      {/* 헤더 토글 버튼 */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left"
      >
        <div className="flex items-center gap-2">
          <span className="p-1.5 bg-rose-500 text-white rounded-xl shadow-xs">
            <Swords className="w-4 h-4" />
          </span>
          <div>
            <h3 className="text-base font-black tracking-tight text-slate-800 flex items-center gap-1.5">
              사용 가능 기술 (포켓몬 GO)
              <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full border border-slate-200">
                {totalMovesCount}개
              </span>
            </h3>
            <p className="text-xs font-semibold text-slate-500">
              {pokemonName}의 노말 어택 및 스페셜 어택 목록
            </p>
          </div>
        </div>

        <span className="p-1 text-slate-400 hover:text-slate-600 rounded-lg">
          {isOpen ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
        </span>
      </button>

      {isOpen && (
        <div className="mt-4 pt-3.5 border-t border-slate-100 space-y-4 animate-in fade-in duration-200">
          {/* 1. 노말 어택 (패스트 무브) */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
                <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                <span>노말 어택 (Fast Moves / 일반 공격)</span>
              </div>
              <span className="text-[11px] font-semibold text-slate-400">
                게이지 충전용
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {moveset.fast.map((move, idx) => (
                <div
                  key={`${move.nameKo}-${idx}`}
                  className="flex items-center justify-between p-2.5 rounded-2xl bg-slate-50 border border-slate-200/70 hover:bg-slate-100/80 transition-colors"
                >
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold text-slate-800">
                      {move.nameKo}
                    </span>
                    {move.isLegacy && (
                      <span className="inline-flex items-center gap-0.5 text-[10px] font-black bg-amber-100 text-amber-800 px-1.5 py-0.2 rounded-md border border-amber-200">
                        <Sparkles className="w-2.5 h-2.5" />
                        특별
                      </span>
                    )}
                  </div>
                  <TypeBadge type={move.type} size="sm" />
                </div>
              ))}
            </div>
          </div>

          {/* 2. 스페셜 어택 (차지 무브) */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
                <Swords className="w-3.5 h-3.5 text-rose-500" />
                <span>스페셜 어택 (Charged Moves / 특수 공격)</span>
              </div>
              <span className="text-[11px] font-semibold text-slate-400">
                게이지 소모 필살기
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {moveset.charged.map((move, idx) => (
                <div
                  key={`${move.nameKo}-${idx}`}
                  className="flex items-center justify-between p-2.5 rounded-2xl bg-slate-50 border border-slate-200/70 hover:bg-slate-100/80 transition-colors"
                >
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold text-slate-800">
                      {move.nameKo}
                    </span>
                    {move.isLegacy && (
                      <span className="inline-flex items-center gap-0.5 text-[10px] font-black bg-amber-100 text-amber-800 px-1.5 py-0.2 rounded-md border border-amber-200">
                        <Sparkles className="w-2.5 h-2.5" />
                        특별
                      </span>
                    )}
                  </div>
                  <TypeBadge type={move.type} size="sm" />
                </div>
              ))}
            </div>
          </div>

          <div className="p-2.5 bg-amber-50/70 rounded-2xl border border-amber-200/60 text-[11px] font-medium text-amber-800 flex items-center gap-1.5">
            <span className="font-bold shrink-0">💡 레이드 팁:</span>
            <span>
              상대 보스가 위 기술들 중 어떤 타입의 기술을 사용하는지에 따라 내가 꺼낼 포켓몬의 방어 상성도 달라집니다!
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
