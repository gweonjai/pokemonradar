import { ALL_TYPE_NAMES, POKEMON_TYPES, TYPE_EFFECTIVENESS } from '../constants/typeChart';
import type { EffectivenessGroup, PokemonTypeName, TypeMultiplier } from '../types/pokemon';

/**
 * 방어 포켓몬의 타입 조합(단일 또는 이중)에 대한 각 공격 타입의 데미지 배율을 계산합니다.
 * 포켓몬 GO 공식 배율:
 * - 약점 1.6배, 이중 약점 2.56배
 * - 반감 0.625배, 이중 반감(또는 면역) 0.390625배 (~0.39배), 삼중 반감 0.244배
 * - 보통 1.0배
 */
export function calculateTypeEffectiveness(defenderTypes: PokemonTypeName[]): EffectivenessGroup {
  const result: EffectivenessGroup = {
    superWeak: [],
    weak: [],
    resist: [],
    superResist: [],
    normal: [],
  };

  if (!defenderTypes || defenderTypes.length === 0) {
    return result;
  }

  for (const attackType of ALL_TYPE_NAMES) {
    let multiplier = 1.0;

    for (const defType of defenderTypes) {
      const effect = TYPE_EFFECTIVENESS[attackType]?.[defType] ?? 1.0;
      multiplier *= effect;
    }

    // 소수점 4자리 반올림 (부동소수점 오차 정리)
    const rounded = Math.round(multiplier * 10000) / 10000;
    const typeInfo = POKEMON_TYPES[attackType];
    const item: TypeMultiplier = {
      type: attackType,
      typeInfo,
      multiplier: rounded,
    };

    if (rounded >= 2.5) {
      // 2.56배
      result.superWeak.push(item);
    } else if (rounded >= 1.5) {
      // 1.6배
      result.weak.push(item);
    } else if (rounded <= 0.45) {
      // 0.390625배 or 0.244배
      result.superResist.push(item);
    } else if (rounded < 0.9) {
      // 0.625배
      result.resist.push(item);
    } else {
      // 1.0배 (보통)
      result.normal.push(item);
    }
  }

  // 데미지 배율 높은 순 정렬
  result.superWeak.sort((a, b) => b.multiplier - a.multiplier);
  result.weak.sort((a, b) => b.multiplier - a.multiplier);
  result.resist.sort((a, b) => a.multiplier - b.multiplier);
  result.superResist.sort((a, b) => a.multiplier - b.multiplier);

  return result;
}

/**
 * 배율을 유저에게 친숙한 텍스트로 포맷팅
 */
export function formatMultiplier(multiplier: number): string {
  if (multiplier >= 2.5) return '2.56x';
  if (multiplier >= 1.5) return '1.6x';
  if (multiplier <= 0.25) return '0.24x';
  if (multiplier <= 0.45) return '0.39x';
  if (multiplier < 0.9) return '0.625x';
  return '1.0x';
}
