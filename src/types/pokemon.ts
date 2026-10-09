// 18개 포켓몬 타입 영문 키
export type PokemonTypeName =
  | 'normal'
  | 'fire'
  | 'water'
  | 'grass'
  | 'electric'
  | 'ice'
  | 'fighting'
  | 'poison'
  | 'ground'
  | 'flying'
  | 'psychic'
  | 'bug'
  | 'rock'
  | 'ghost'
  | 'dragon'
  | 'dark'
  | 'steel'
  | 'fairy';

export interface PokemonTypeInfo {
  id: PokemonTypeName;
  nameKo: string;
  nameEn: string;
  color: string; // 뱃지 메인 컬러 (Hex)
  textColor: string; // 텍스트 컬러
  bgLight: string; // 연한 배경 컬러
  borderColor: string;
}

export interface PokemonMove {
  nameKo: string;
  nameEn?: string;
  type: PokemonTypeName;
  category: 'fast' | 'charged';
  isLegacy?: boolean;
}

export interface PokemonMoveset {
  fast: PokemonMove[];
  charged: PokemonMove[];
}

export interface PokemonBasic {
  id: number;
  nameKo: string;
  nameEn: string;
  types: PokemonTypeName[];
  artworkUrl: string;
  isLegendary?: boolean;
  isMythical?: boolean;
  generation: number;
  moves?: PokemonMoveset;
}

export interface TypeMultiplier {
  type: PokemonTypeName;
  typeInfo: PokemonTypeInfo;
  multiplier: number; // 2.56, 1.6, 1.0, 0.625, 0.390625 (0.39)
}

export interface EffectivenessGroup {
  superWeak: TypeMultiplier[]; // 2.56배 (치명적 약점)
  weak: TypeMultiplier[]; // 1.6배 (일반 약점)
  resist: TypeMultiplier[]; // 0.625배 (반감/저항)
  superResist: TypeMultiplier[]; // 0.39배 이하 (이중 반감)
  normal: TypeMultiplier[]; // 1.0배 (보통)
}
