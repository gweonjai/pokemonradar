import { Check, Copy, HelpCircle, Lightbulb } from 'lucide-react';
import React, { useState } from 'react';
import { POKEMON_TYPES } from '../constants/typeChart';
import type { EffectivenessGroup } from '../types/pokemon';

interface RaidTipsBannerProps {
  effectiveness: EffectivenessGroup;
  pokemonName: string;
}

export const RaidTipsBanner: React.FC<RaidTipsBannerProps> = ({
  effectiveness,
  pokemonName,
}) => {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  // 약점 타입 목록 (치명적 약점 우선, 그 다음 일반 약점)
  const weakTypes = [
    ...effectiveness.superWeak.map((w) => w.type),
    ...effectiveness.weak.map((w) => w.type),
  ];

  if (weakTypes.length === 0) return null;

  // 전체 약점 복합 검색어: 예) "@바위,@물,@얼음"
  const allWeakSearchString = weakTypes
    .map((t) => `@${POKEMON_TYPES[t]?.nameKo}`)
    .join(',');

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      setTimeout(() => setCopiedText(null), 2000);
    } catch {
      // 클립보드 복사 폴백
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedText(text);
      setTimeout(() => setCopiedText(null), 2000);
    }
  };

  return (
    <div className="rounded-3xl bg-emerald-50/80 border border-emerald-200/90 p-4.5 shadow-xs relative overflow-hidden">
      {/* 배경 포인트 발광 */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-200/30 rounded-full blur-2xl pointer-events-none" />

      {/* 헤더 타이틀 */}
      <div className="flex items-center gap-2 mb-2">
        <span className="p-1.5 bg-emerald-600 text-white rounded-xl shadow-xs">
          <Lightbulb className="w-4 h-4 fill-emerald-100" />
        </span>
        <h3 className="text-base font-black tracking-tight text-emerald-950 flex items-center gap-1.5">
          포켓몬 GO 보관함 검색 꿀팁
        </h3>
      </div>

      <p className="text-xs text-emerald-900/80 leading-relaxed font-medium mb-3">
        포켓몬 GO 앱의 보관함 검색창에{' '}
        <span className="text-emerald-900 font-bold bg-emerald-200/70 px-1.5 py-0.5 rounded-md border border-emerald-300/60">
          @타입명
        </span>
        을 입력하면 {pokemonName} 공략에 바로 투입할 수 있는 포켓몬이 정렬됩니다!
      </p>

      {/* 전체 통합 복사 카드 */}
      <div className="bg-white rounded-2xl p-3 border border-emerald-200/90 shadow-xs mb-3 flex items-center justify-between gap-2">
        <div className="overflow-hidden">
          <span className="text-[11px] font-bold text-emerald-800/70 block mb-0.5">
            전체 약점 한번에 검색 (추천)
          </span>
          <span className="font-mono text-sm font-black text-emerald-800 truncate block">
            {allWeakSearchString}
          </span>
        </div>

        <button
          type="button"
          onClick={() => handleCopy(allWeakSearchString)}
          className={`shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all shadow-xs active:scale-95 ${
            copiedText === allWeakSearchString
              ? 'bg-emerald-600 text-white shadow-emerald-600/20'
              : 'bg-slate-900 hover:bg-slate-800 text-white shadow-slate-900/20'
          }`}
        >
          {copiedText === allWeakSearchString ? (
            <>
              <Check className="w-3.5 h-3.5" />
              <span>복사완료!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>복사</span>
            </>
          )}
        </button>
      </div>

      {/* 개별 타입별 복사 칩 */}
      <div>
        <span className="text-[11px] font-bold text-emerald-800/70 mb-1.5 block">
          개별 타입만 복사하기
        </span>
        <div className="flex flex-wrap gap-1.5">
          {weakTypes.map((t) => {
            const koName = POKEMON_TYPES[t]?.nameKo;
            const queryCmd = `@${koName}`;
            const isCopied = copiedText === queryCmd;
            return (
              <button
                key={t}
                onClick={() => handleCopy(queryCmd)}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all border active:scale-95 ${
                  isCopied
                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                    : 'bg-white hover:bg-emerald-100/60 text-slate-700 hover:text-emerald-900 border-emerald-200/70 shadow-xs'
                }`}
              >
                {isCopied ? (
                  <Check className="w-3 h-3 text-white" />
                ) : (
                  <Copy className="w-3 h-3 text-emerald-600/70" />
                )}
                <span>{queryCmd}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 부모/아이 도움말 풋노트 */}
      <div className="mt-3.5 pt-2.5 border-t border-emerald-200/70 flex items-center gap-1.5 text-[11px] text-emerald-800/80">
        <HelpCircle className="w-3.5 h-3.5 shrink-0 text-emerald-600" />
        <span>콤마(,)로 여러 타입을 묶으면 해당 기술을 가진 포켓몬이 모두 검색됩니다.</span>
      </div>
    </div>
  );
};
