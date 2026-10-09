import { X } from 'lucide-react';
import React from 'react';
import { ALL_TYPE_NAMES, POKEMON_TYPES } from '../constants/typeChart';
import type { PokemonTypeName } from '../types/pokemon';

interface TypeReferenceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectType?: (type: PokemonTypeName) => void;
}

export const TypeReferenceModal: React.FC<TypeReferenceModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-md w-full p-5 shadow-2xl border border-slate-200 max-h-[85vh] flex flex-col">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div>
            <h3 className="text-lg font-black text-slate-900">
              18개 포켓몬 공식 타입 팔레트
            </h3>
            <p className="text-xs font-semibold text-slate-500">
              포켓몬 GO 기준 타입 색상 및 명칭
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto py-3 grid grid-cols-2 gap-2">
          {ALL_TYPE_NAMES.map((type) => {
            const info = POKEMON_TYPES[type];
            return (
              <div
                key={type}
                className="flex items-center justify-between p-2.5 rounded-2xl border border-slate-200/70 shadow-xs"
                style={{ backgroundColor: info.bgLight }}
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-4 h-4 rounded-full shrink-0 shadow-xs"
                    style={{ backgroundColor: info.color }}
                  />
                  <span className="text-sm font-black text-slate-800">
                    {info.nameKo}
                  </span>
                </div>
                <span className="text-xs font-bold text-slate-400 uppercase">
                  {info.nameEn}
                </span>
              </div>
            );
          })}
        </div>

        <div className="pt-3 border-t border-slate-100 text-center">
          <button
            type="button"
            onClick={onClose}
            className="w-full py-2.5 bg-slate-900 text-white rounded-2xl text-sm font-bold active:scale-98 transition-transform"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
