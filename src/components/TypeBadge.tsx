import React from 'react';
import { POKEMON_TYPES } from '../constants/typeChart';
import type { PokemonTypeName } from '../types/pokemon';

interface TypeBadgeProps {
  type: PokemonTypeName;
  size?: 'sm' | 'md' | 'lg';
  showMultiplier?: boolean;
  multiplierText?: string;
  isSuperWeak?: boolean;
}

export const TypeBadge: React.FC<TypeBadgeProps> = ({
  type,
  size = 'md',
  showMultiplier = false,
  multiplierText,
  isSuperWeak = false,
}) => {
  const info = POKEMON_TYPES[type];
  if (!info) return null;

  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5 gap-1',
    md: 'text-sm px-2.5 py-1 gap-1.5',
    lg: 'text-base px-3.5 py-1.5 gap-2 font-bold',
  }[size];

  return (
    <div
      className={`inline-flex items-center justify-center rounded-full font-medium shadow-sm transition-transform active:scale-95 ${sizeClasses} ${
        isSuperWeak ? 'ring-2 ring-red-500 ring-offset-1 animate-pulse-subtle' : ''
      }`}
      style={{
        backgroundColor: info.color,
        color: info.textColor,
      }}
    >
      <span>{info.nameKo}</span>
      {showMultiplier && multiplierText && (
        <span
          className="rounded-full px-1.5 py-0.2 text-[11px] font-black tracking-tight"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.25)',
            color: '#FFFFFF',
          }}
        >
          {multiplierText}
        </span>
      )}
    </div>
  );
};
