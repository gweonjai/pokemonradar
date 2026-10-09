import { Radar, Sparkles } from 'lucide-react';
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs px-4 py-3">
      <div className="max-w-md mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          {/* PokeRadar 로고 아이콘 */}
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-rose-500 via-red-500 to-amber-400 p-0.5 shadow-md shadow-red-500/20 flex items-center justify-center">
            <div className="w-full h-full bg-white/10 rounded-[14px] flex items-center justify-center text-white">
              <Radar className="w-6 h-6 animate-spin" style={{ animationDuration: '8s' }} />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <h1 className="text-xl font-black tracking-tight text-slate-900 bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                PokeRadar
              </h1>
              <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 bg-red-100 text-red-700 rounded-md tracking-wider">
                GO
              </span>
            </div>
            <p className="text-xs font-semibold text-slate-500">
              포켓몬 GO 약점 & 레이드 카운터
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1 text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1.5 rounded-full border border-amber-200">
          <Sparkles className="w-3.5 h-3.5" />
          <span>초고속 분석</span>
        </div>
      </div>
    </header>
  );
};
