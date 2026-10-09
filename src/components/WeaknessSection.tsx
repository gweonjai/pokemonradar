import { AlertTriangle, ChevronDown, ChevronUp, Flame, ShieldAlert, ShieldCheck } from 'lucide-react';
import React, { useState } from 'react';
import type { EffectivenessGroup } from '../types/pokemon';
import { formatMultiplier } from '../utils/typeEffectiveness';
import { TypeBadge } from './TypeBadge';

interface WeaknessSectionProps {
  effectiveness: EffectivenessGroup;
  pokemonName: string;
}

export const WeaknessSection: React.FC<WeaknessSectionProps> = ({
  effectiveness,
  pokemonName,
}) => {
  const [showResistances, setShowResistances] = useState(true);

  const hasSuperWeak = effectiveness.superWeak.length > 0;
  const hasWeak = effectiveness.weak.length > 0;
  const hasAnyWeak = hasSuperWeak || hasWeak;

  const totalResistCount =
    effectiveness.resist.length + effectiveness.superResist.length;

  return (
    <div className="w-full space-y-4">
      {/* 1. 치명적 약점 (2.56배) - 이중 약점 경고 강조 */}
      {hasSuperWeak && (
        <div className="rounded-3xl bg-gradient-to-br from-rose-50 to-red-100/70 border-2 border-red-500/80 p-4 shadow-sm animate-in fade-in duration-200">
          <div className="flex items-center justify-between mb-2.5">
            <div className="flex items-center gap-2">
              <span className="p-1.5 bg-red-500 text-white rounded-xl shadow-xs">
                <Flame className="w-4 h-4 fill-current animate-pulse" />
              </span>
              <div>
                <h3 className="text-base font-black text-red-900 tracking-tight flex items-center gap-1.5">
                  치명적 약점
                  <span className="text-xs font-black bg-red-600 text-white px-2 py-0.5 rounded-full shadow-xs">
                    2.56배 피해
                  </span>
                </h3>
                <p className="text-xs font-semibold text-red-700">
                  {pokemonName}에게 가장 강력한 데미지를 줍니다!
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            {effectiveness.superWeak.map((item) => (
              <TypeBadge
                key={item.type}
                type={item.type}
                size="lg"
                showMultiplier
                multiplierText={formatMultiplier(item.multiplier)}
                isSuperWeak
              />
            ))}
          </div>
        </div>
      )}

      {/* 2. 일반 약점 (1.6배) */}
      {hasWeak && (
        <div className="rounded-3xl bg-gradient-to-br from-amber-50 to-orange-50/70 border border-orange-200/90 p-4 shadow-xs">
          <div className="flex items-center justify-between mb-2.5">
            <div className="flex items-center gap-2">
              <span className="p-1.5 bg-orange-500 text-white rounded-xl shadow-xs">
                <AlertTriangle className="w-4 h-4" />
              </span>
              <div>
                <h3 className="text-base font-black text-slate-800 tracking-tight flex items-center gap-1.5">
                  일반 약점
                  <span className="text-xs font-black bg-orange-500 text-white px-2 py-0.5 rounded-full shadow-xs">
                    1.6배 피해
                  </span>
                </h3>
                <p className="text-xs font-semibold text-slate-600">
                  효과가 굉장한 추천 공격 타입입니다.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            {effectiveness.weak.map((item) => (
              <TypeBadge
                key={item.type}
                type={item.type}
                size="md"
                showMultiplier
                multiplierText={formatMultiplier(item.multiplier)}
              />
            ))}
          </div>
        </div>
      )}

      {!hasAnyWeak && (
        <div className="rounded-3xl bg-slate-50 border border-slate-200 p-4 text-center">
          <p className="text-sm font-bold text-slate-600">
            약점 타입이 없습니다 (모든 공격에 보통 이하).
          </p>
        </div>
      )}

      {/* 3. 저항 / 반감 (0.625배, 0.39배 이하) - 피해야 할 공격 타입 */}
      {totalResistCount > 0 && (
        <div className="rounded-3xl bg-slate-100/90 border border-slate-200/80 p-4 transition-all">
          <button
            type="button"
            onClick={() => setShowResistances(!showResistances)}
            className="w-full flex items-center justify-between text-left"
          >
            <div className="flex items-center gap-2">
              <span className="p-1.5 bg-slate-600 text-white rounded-xl shadow-xs">
                <ShieldAlert className="w-4 h-4" />
              </span>
              <div>
                <h3 className="text-sm font-extrabold text-slate-700 tracking-tight flex items-center gap-1.5">
                  저항 & 반감 타입 (공격 비추천)
                  <span className="text-[11px] font-bold text-slate-500 bg-white px-2 py-0.5 rounded-full border border-slate-200">
                    {totalResistCount}개
                  </span>
                </h3>
                <p className="text-xs font-medium text-slate-500">
                  데미지가 감소하므로 이 타입 기술은 피하세요.
                </p>
              </div>
            </div>

            <span className="p-1 text-slate-400 hover:text-slate-600 rounded-lg">
              {showResistances ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </span>
          </button>

          {showResistances && (
            <div className="mt-3.5 pt-3 border-t border-slate-200/70 space-y-3">
              {/* 이중 반감 (0.39배 이하) */}
              {effectiveness.superResist.length > 0 && (
                <div>
                  <div className="flex items-center gap-1 text-xs font-bold text-slate-600 mb-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-purple-600" />
                    <span>이중 반감/면역 (0.39배 이하 - 데미지 매우 약함)</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {effectiveness.superResist.map((item) => (
                      <TypeBadge
                        key={item.type}
                        type={item.type}
                        size="sm"
                        showMultiplier
                        multiplierText={formatMultiplier(item.multiplier)}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* 일반 반감 (0.625배) */}
              {effectiveness.resist.length > 0 && (
                <div>
                  <div className="text-xs font-bold text-slate-600 mb-1.5">
                    <span>반감 (0.625배 - 데미지 감소)</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {effectiveness.resist.map((item) => (
                      <TypeBadge
                        key={item.type}
                        type={item.type}
                        size="sm"
                        showMultiplier
                        multiplierText={formatMultiplier(item.multiplier)}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
