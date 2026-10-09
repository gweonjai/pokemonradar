import type { PokemonMove, PokemonMoveset, PokemonTypeName } from '../types/pokemon';

// 주요 포켓몬별 포켓몬 GO 공식/대표 기술셋 (노말 어택 및 스페셜 어택)
export const KNOWN_POKEMON_MOVES: Record<number, PokemonMoveset> = {
  // 1: 이상해씨
  1: {
    fast: [
      { nameKo: '덩굴채찍', type: 'grass', category: 'fast' },
      { nameKo: '몸통박치기', type: 'normal', category: 'fast' },
    ],
    charged: [
      { nameKo: '파워휩', type: 'grass', category: 'charged' },
      { nameKo: '씨폭탄', type: 'grass', category: 'charged' },
      { nameKo: '오물폭탄', type: 'poison', category: 'charged' },
    ],
  },
  // 3: 이상해꽃
  3: {
    fast: [
      { nameKo: '덩굴채찍', type: 'grass', category: 'fast' },
      { nameKo: '잎날가르기', type: 'grass', category: 'fast' },
    ],
    charged: [
      { nameKo: '하드플랜트', type: 'grass', category: 'charged', isLegacy: true },
      { nameKo: '솔라빔', type: 'grass', category: 'charged' },
      { nameKo: '오물폭탄', type: 'poison', category: 'charged' },
      { nameKo: '꽃보라', type: 'grass', category: 'charged' },
    ],
  },
  // 6: 리자몽
  6: {
    fast: [
      { nameKo: '회오리불꽃', type: 'fire', category: 'fast' },
      { nameKo: '에어슬래시', type: 'flying', category: 'fast' },
      { nameKo: '날개치기', type: 'flying', category: 'fast', isLegacy: true },
      { nameKo: '불꽃세례', type: 'fire', category: 'fast', isLegacy: true },
    ],
    charged: [
      { nameKo: '블라스트번', type: 'fire', category: 'charged', isLegacy: true },
      { nameKo: '오버히트', type: 'fire', category: 'charged' },
      { nameKo: '불대문자', type: 'fire', category: 'charged' },
      { nameKo: '드래곤클로', type: 'dragon', category: 'charged' },
      { nameKo: '에어커터', type: 'flying', category: 'charged' },
    ],
  },
  // 9: 거북왕
  9: {
    fast: [
      { nameKo: '물대포', type: 'water', category: 'fast' },
      { nameKo: '물기', type: 'dark', category: 'fast' },
    ],
    charged: [
      { nameKo: '하이드로캐논', type: 'water', category: 'charged', isLegacy: true },
      { nameKo: '하이드로펌프', type: 'water', category: 'charged' },
      { nameKo: '냉동빔', type: 'ice', category: 'charged' },
      { nameKo: '러스터캐논', type: 'steel', category: 'charged' },
    ],
  },
  // 25: 피카츄
  25: {
    fast: [
      { nameKo: '전기쇼크', type: 'electric', category: 'fast' },
      { nameKo: '볼트체인지', type: 'electric', category: 'fast' },
      { nameKo: '몸통박치기', type: 'normal', category: 'fast', isLegacy: true },
    ],
    charged: [
      { nameKo: '10만볼트', type: 'electric', category: 'charged' },
      { nameKo: '방전', type: 'electric', category: 'charged' },
      { nameKo: '와일드볼트', type: 'electric', category: 'charged' },
      { nameKo: '파도타기', type: 'water', category: 'charged', isLegacy: true },
      { nameKo: '공중날기', type: 'flying', category: 'charged', isLegacy: true },
    ],
  },
  // 68: 괴력몬
  68: {
    fast: [
      { nameKo: '카운터', type: 'fighting', category: 'fast' },
      { nameKo: '불릿펀치', type: 'steel', category: 'fast' },
      { nameKo: '태권당수', type: 'fighting', category: 'fast', isLegacy: true },
    ],
    charged: [
      { nameKo: '폭발펀치', type: 'fighting', category: 'charged' },
      { nameKo: '인파이트', type: 'fighting', category: 'charged' },
      { nameKo: '헤비봄버', type: 'steel', category: 'charged' },
      { nameKo: '스톤샤워', type: 'rock', category: 'charged' },
      { nameKo: '보복', type: 'dark', category: 'charged', isLegacy: true },
    ],
  },
  // 94: 팬텀
  94: {
    fast: [
      { nameKo: '섀도크루', type: 'ghost', category: 'fast', isLegacy: true },
      { nameKo: '병상첨병', type: 'ghost', category: 'fast' },
      { nameKo: '핥기', type: 'ghost', category: 'fast', isLegacy: true },
      { nameKo: '기습', type: 'dark', category: 'fast' },
    ],
    charged: [
      { nameKo: '섀도볼', type: 'ghost', category: 'charged' },
      { nameKo: '오물폭탄', type: 'poison', category: 'charged' },
      { nameKo: '오물웨이브', type: 'poison', category: 'charged', isLegacy: true },
      { nameKo: '기합구슬', type: 'fighting', category: 'charged' },
      { nameKo: '악의파동', type: 'dark', category: 'charged', isLegacy: true },
    ],
  },
  // 130: 갸라도스
  130: {
    fast: [
      { nameKo: '폭포오르기', type: 'water', category: 'fast' },
      { nameKo: '물기', type: 'dark', category: 'fast' },
      { nameKo: '용의숨결', type: 'dragon', category: 'fast', isLegacy: true },
    ],
    charged: [
      { nameKo: '아쿠아테일', type: 'water', category: 'charged', isLegacy: true },
      { nameKo: '하이드로펌프', type: 'water', category: 'charged' },
      { nameKo: '깨물어부수기', type: 'dark', category: 'charged' },
      { nameKo: '역린', type: 'dragon', category: 'charged' },
    ],
  },
  // 131: 라프라스
  131: {
    fast: [
      { nameKo: '얼음숨결', type: 'ice', category: 'fast', isLegacy: true },
      { nameKo: '얼음뭉치', type: 'ice', category: 'fast', isLegacy: true },
      { nameKo: '물대포', type: 'water', category: 'fast' },
    ],
    charged: [
      { nameKo: '냉동빔', type: 'ice', category: 'charged', isLegacy: true },
      { nameKo: '눈보라', type: 'ice', category: 'charged' },
      { nameKo: '파도타기', type: 'water', category: 'charged' },
      { nameKo: '하이드로펌프', type: 'water', category: 'charged' },
      { nameKo: '로켓박치기', type: 'normal', category: 'charged' },
    ],
  },
  // 143: 잠만보
  143: {
    fast: [
      { nameKo: '핥기', type: 'ghost', category: 'fast' },
      { nameKo: '사념의박치기', type: 'psychic', category: 'fast' },
      { nameKo: '하품', type: 'normal', category: 'fast', isLegacy: true },
    ],
    charged: [
      { nameKo: '누르기', type: 'normal', category: 'charged', isLegacy: true },
      { nameKo: '파괴광선', type: 'normal', category: 'charged' },
      { nameKo: '지진', type: 'ground', category: 'charged' },
      { nameKo: '헤비봄버', type: 'steel', category: 'charged' },
      { nameKo: '역린', type: 'dragon', category: 'charged' },
      { nameKo: '엄청난힘', type: 'fighting', category: 'charged' },
    ],
  },
  // 149: 망나뇽
  149: {
    fast: [
      { nameKo: '용의숨결', type: 'dragon', category: 'fast', isLegacy: true },
      { nameKo: '드래곤테일', type: 'dragon', category: 'fast' },
      { nameKo: '강철날개', type: 'steel', category: 'fast' },
    ],
    charged: [
      { nameKo: '드래곤클로', type: 'dragon', category: 'charged', isLegacy: true },
      { nameKo: '역린', type: 'dragon', category: 'charged' },
      { nameKo: '폭풍', type: 'flying', category: 'charged' },
      { nameKo: '엄청난힘', type: 'fighting', category: 'charged' },
      { nameKo: '파괴광선', type: 'normal', category: 'charged' },
    ],
  },
  // 150: 뮤츠
  150: {
    fast: [
      { nameKo: '사이코커터', type: 'psychic', category: 'fast' },
      { nameKo: '염동력', type: 'psychic', category: 'fast' },
    ],
    charged: [
      { nameKo: '사이코브레이크', type: 'psychic', category: 'charged', isLegacy: true },
      { nameKo: '섀도볼', type: 'ghost', category: 'charged', isLegacy: true },
      { nameKo: '사이코키네시스', type: 'psychic', category: 'charged' },
      { nameKo: '기합구슬', type: 'fighting', category: 'charged' },
      { nameKo: '10만볼트', type: 'electric', category: 'charged' },
      { nameKo: '냉동빔', type: 'ice', category: 'charged' },
      { nameKo: '화염방사', type: 'fire', category: 'charged' },
    ],
  },
  // 248: 마기라스
  248: {
    fast: [
      { nameKo: '물기', type: 'dark', category: 'fast' },
      { nameKo: '떨어뜨리기', type: 'rock', category: 'fast', isLegacy: true },
      { nameKo: '아이언테일', type: 'steel', category: 'fast' },
    ],
    charged: [
      { nameKo: '세차게휘두르기', type: 'dark', category: 'charged' },
      { nameKo: '깨물어부수기', type: 'dark', category: 'charged' },
      { nameKo: '스톤에지', type: 'rock', category: 'charged' },
      { nameKo: '불대문자', type: 'fire', category: 'charged' },
    ],
  },
  // 249: 루기아
  249: {
    fast: [
      { nameKo: '신통력', type: 'psychic', category: 'fast' },
      { nameKo: '드래곤테일', type: 'dragon', category: 'fast' },
    ],
    charged: [
      { nameKo: '에어로블라스트', type: 'flying', category: 'charged', isLegacy: true },
      { nameKo: '불새', type: 'flying', category: 'charged' },
      { nameKo: '미래예지', type: 'psychic', category: 'charged' },
      { nameKo: '하이드로펌프', type: 'water', category: 'charged' },
    ],
  },
  // 250: 칠색조
  250: {
    fast: [
      { nameKo: '불태우기', type: 'fire', category: 'fast' },
      { nameKo: '신통력', type: 'psychic', category: 'fast' },
      { nameKo: '강철날개', type: 'steel', category: 'fast' },
      { nameKo: '잠재파워', type: 'normal', category: 'fast' },
    ],
    charged: [
      { nameKo: '성스러운불꽃', type: 'fire', category: 'charged', isLegacy: true },
      { nameKo: '지진', type: 'ground', category: 'charged', isLegacy: true },
      { nameKo: '불대문자', type: 'fire', category: 'charged' },
      { nameKo: '용감한새', type: 'flying', category: 'charged' },
      { nameKo: '솔라빔', type: 'grass', category: 'charged' },
    ],
  },
  // 282: 가디안
  282: {
    fast: [
      { nameKo: '애교부리기', type: 'fairy', category: 'fast' },
      { nameKo: '염동력', type: 'psychic', category: 'fast' },
      { nameKo: '차지빔', type: 'electric', category: 'fast' },
    ],
    charged: [
      { nameKo: '동기부여(싱크로노이즈)', type: 'psychic', category: 'charged', isLegacy: true },
      { nameKo: '매지컬샤인', type: 'fairy', category: 'charged' },
      { nameKo: '사이코키네시스', type: 'psychic', category: 'charged' },
      { nameKo: '섀도볼', type: 'ghost', category: 'charged' },
    ],
  },
  // 376: 메타그로스
  376: {
    fast: [
      { nameKo: '불릿펀치', type: 'steel', category: 'fast' },
      { nameKo: '사념의박치기', type: 'psychic', category: 'fast' },
    ],
    charged: [
      { nameKo: '코멧펀치', type: 'steel', category: 'charged', isLegacy: true },
      { nameKo: '러스터캐논', type: 'steel', category: 'charged' },
      { nameKo: '사이코키네시스', type: 'psychic', category: 'charged' },
      { nameKo: '지진', type: 'ground', category: 'charged' },
    ],
  },
  // 382: 가이오가
  382: {
    fast: [
      { nameKo: '폭포오르기', type: 'water', category: 'fast' },
    ],
    charged: [
      { nameKo: '근원의파동', type: 'water', category: 'charged', isLegacy: true },
      { nameKo: '파도타기', type: 'water', category: 'charged' },
      { nameKo: '하이드로펌프', type: 'water', category: 'charged' },
      { nameKo: '눈보라', type: 'ice', category: 'charged' },
      { nameKo: '번개', type: 'electric', category: 'charged' },
    ],
  },
  // 383: 그란돈
  383: {
    fast: [
      { nameKo: '머드숏', type: 'ground', category: 'fast' },
      { nameKo: '드래곤테일', type: 'dragon', category: 'fast' },
    ],
    charged: [
      { nameKo: '단애의칼', type: 'ground', category: 'charged', isLegacy: true },
      { nameKo: '지진', type: 'ground', category: 'charged' },
      { nameKo: '불대문자', type: 'fire', category: 'charged' },
      { nameKo: '솔라빔', type: 'grass', category: 'charged' },
    ],
  },
  // 384: 레쿠쟈
  384: {
    fast: [
      { nameKo: '드래곤테일', type: 'dragon', category: 'fast' },
      { nameKo: '에어슬래시', type: 'flying', category: 'fast' },
    ],
    charged: [
      { nameKo: '화룡점정', type: 'flying', category: 'charged', isLegacy: true },
      { nameKo: '와이드브레이커', type: 'dragon', category: 'charged', isLegacy: true },
      { nameKo: '역린', type: 'dragon', category: 'charged' },
      { nameKo: '제비반환', type: 'flying', category: 'charged' },
      { nameKo: '원시의힘', type: 'rock', category: 'charged' },
    ],
  },
  // 445: 한카리아스
  445: {
    fast: [
      { nameKo: '머드숏', type: 'ground', category: 'fast' },
      { nameKo: '드래곤테일', type: 'dragon', category: 'fast' },
    ],
    charged: [
      { nameKo: '대지의힘', type: 'ground', category: 'charged', isLegacy: true },
      { nameKo: '지진', type: 'ground', category: 'charged' },
      { nameKo: '역린', type: 'dragon', category: 'charged' },
      { nameKo: '모래지옥', type: 'ground', category: 'charged' },
      { nameKo: '불대문자', type: 'fire', category: 'charged' },
    ],
  },
  // 448: 루카리오
  448: {
    fast: [
      { nameKo: '카운터', type: 'fighting', category: 'fast' },
      { nameKo: '불릿펀치', type: 'steel', category: 'fast' },
      { nameKo: '발차기', type: 'fighting', category: 'fast' },
    ],
    charged: [
      { nameKo: '파동탄', type: 'fighting', category: 'charged' },
      { nameKo: '인파이트', type: 'fighting', category: 'charged' },
      { nameKo: '그로우펀치', type: 'fighting', category: 'charged' },
      { nameKo: '섀도볼', type: 'ghost', category: 'charged' },
      { nameKo: '러스터캐논', type: 'steel', category: 'charged' },
    ],
  },
  // 464: 거대코뿌리
  464: {
    fast: [
      { nameKo: '진흙뿌리기', type: 'ground', category: 'fast' },
      { nameKo: '떨어뜨리기', type: 'rock', category: 'fast' },
    ],
    charged: [
      { nameKo: '암석포', type: 'rock', category: 'charged', isLegacy: true },
      { nameKo: '스톤에지', type: 'rock', category: 'charged' },
      { nameKo: '지진', type: 'ground', category: 'charged' },
      { nameKo: '파도타기', type: 'water', category: 'charged' },
      { nameKo: '엄청난힘', type: 'fighting', category: 'charged' },
    ],
  },
  // 483: 디아루가
  483: {
    fast: [
      { nameKo: '용의숨결', type: 'dragon', category: 'fast' },
      { nameKo: '메탈클로', type: 'steel', category: 'fast' },
    ],
    charged: [
      { nameKo: '시간의포효', type: 'dragon', category: 'charged', isLegacy: true },
      { nameKo: '아이언헤드', type: 'steel', category: 'charged' },
      { nameKo: '용성군', type: 'dragon', category: 'charged' },
      { nameKo: '번개', type: 'electric', category: 'charged' },
    ],
  },
  // 484: 펄기아
  484: {
    fast: [
      { nameKo: '용의숨결', type: 'dragon', category: 'fast' },
      { nameKo: '드래곤테일', type: 'dragon', category: 'fast' },
    ],
    charged: [
      { nameKo: '공간절단', type: 'dragon', category: 'charged', isLegacy: true },
      { nameKo: '아쿠아테일', type: 'water', category: 'charged', isLegacy: true },
      { nameKo: '하이드로펌프', type: 'water', category: 'charged' },
      { nameKo: '용성군', type: 'dragon', category: 'charged' },
      { nameKo: '불대문자', type: 'fire', category: 'charged' },
    ],
  },
  // 487: 기라티나
  487: {
    fast: [
      { nameKo: '섀도크루', type: 'ghost', category: 'fast' },
      { nameKo: '용의숨결', type: 'dragon', category: 'fast' },
    ],
    charged: [
      { nameKo: '섀도다이브', type: 'ghost', category: 'charged', isLegacy: true },
      { nameKo: '섀도볼', type: 'ghost', category: 'charged' },
      { nameKo: '괴상한바람', type: 'ghost', category: 'charged' },
      { nameKo: '드래곤클로', type: 'dragon', category: 'charged' },
      { nameKo: '원시의힘', type: 'rock', category: 'charged' },
    ],
  },
  // 643: 레시라무
  643: {
    fast: [
      { nameKo: '불꽃엄니', type: 'fire', category: 'fast' },
      { nameKo: '용의숨결', type: 'dragon', category: 'fast' },
    ],
    charged: [
      { nameKo: '크로스플레임', type: 'fire', category: 'charged', isLegacy: true },
      { nameKo: '오버히트', type: 'fire', category: 'charged' },
      { nameKo: '용성군', type: 'dragon', category: 'charged' },
      { nameKo: '스톤에지', type: 'rock', category: 'charged' },
    ],
  },
  // 644: 제크로무
  644: {
    fast: [
      { nameKo: '차지빔', type: 'electric', category: 'fast' },
      { nameKo: '용의숨결', type: 'dragon', category: 'fast' },
    ],
    charged: [
      { nameKo: '크로스썬더', type: 'electric', category: 'charged', isLegacy: true },
      { nameKo: '와일드볼트', type: 'electric', category: 'charged' },
      { nameKo: '역린', type: 'dragon', category: 'charged' },
      { nameKo: '깨물어부수기', type: 'dark', category: 'charged' },
    ],
  },
  // 798: 종이신도
  798: {
    fast: [
      { nameKo: '잎날가르기', type: 'grass', category: 'fast' },
      { nameKo: '에어슬래시', type: 'flying', category: 'fast' },
    ],
    charged: [
      { nameKo: '리프블레이드', type: 'grass', category: 'charged' },
      { nameKo: '깜짝베기', type: 'dark', category: 'charged' },
      { nameKo: '시저크로스', type: 'bug', category: 'charged' },
    ],
  },
  // 888: 자시안
  888: {
    fast: [
      { nameKo: '바크아웃', type: 'dark', category: 'fast' },
      { nameKo: '불꽃엄니', type: 'fire', category: 'fast' },
      { nameKo: '전기엄니', type: 'electric', category: 'fast' },
      { nameKo: '얼음엄니', type: 'ice', category: 'fast' },
    ],
    charged: [
      { nameKo: '인파이트', type: 'fighting', category: 'charged' },
      { nameKo: '치근거리기', type: 'fairy', category: 'charged' },
      { nameKo: '와일드볼트', type: 'electric', category: 'charged' },
      { nameKo: '아이언헤드', type: 'steel', category: 'charged' },
    ],
  },
};

// 타입별 대표 기술 풀 (매핑되지 않은 포켓몬을 위한 자연스러운 기본 기술 생성기)
const DEFAULT_MOVES_BY_TYPE: Record<
  PokemonTypeName,
  { fast: string[]; charged: string[] }
> = {
  normal: { fast: ['몸통박치기', '전광석화'], charged: ['파괴광선', '누르기'] },
  fire: { fast: ['불꽃세례', '회오리불꽃'], charged: ['화염방사', '불대문자'] },
  water: { fast: ['물대포', '폭포오르기'], charged: ['하이드로펌프', '파도타기'] },
  grass: { fast: ['덩굴채찍', '잎날가르기'], charged: ['솔라빔', '에너지볼'] },
  electric: { fast: ['전기쇼크', '볼트체인지'], charged: ['10만볼트', '번개'] },
  ice: { fast: ['얼음숨결', '눈싸라기'], charged: ['냉동빔', '눈보라'] },
  fighting: { fast: ['카운터', '태권당수'], charged: ['폭발펀치', '인파이트'] },
  poison: { fast: ['독찌르기', '용해액'], charged: ['오물폭탄', '오물웨이브'] },
  ground: { fast: ['진흙뿌리기', '머드숏'], charged: ['지진', '대지의힘'] },
  flying: { fast: ['날개치기', '에어슬래시'], charged: ['용감한새', '폭풍'] },
  psychic: { fast: ['염동력', '사이코커터'], charged: ['사이코키네시스', '미래예지'] },
  bug: { fast: ['벌레의야단법석', '연속뺨치기'], charged: ['시저크로스', '벌레의야단법석'] },
  rock: { fast: ['떨어뜨리기', '돌떨구기'], charged: ['스톤에지', '스톤샤워'] },
  ghost: { fast: ['섀도크루', '병상첨병'], charged: ['섀도볼', '야습'] },
  dragon: { fast: ['드래곤테일', '용의숨결'], charged: ['역린', '용성군'] },
  dark: { fast: ['물기', '바크아웃'], charged: ['깨물어부수기', '악의파동'] },
  steel: { fast: ['불릿펀치', '메탈클로'], charged: ['러스터캐논', '아이언헤드'] },
  fairy: { fast: ['애교부리기', '요정의바람'], charged: ['매지컬샤인', '문포스'] },
};

/**
 * 포켓몬 ID 및 타입을 바탕으로 사용 가능한 기술셋 반환
 */
export function getPokemonMoveset(
  id: number,
  types: PokemonTypeName[]
): PokemonMoveset {
  if (KNOWN_POKEMON_MOVES[id]) {
    return KNOWN_POKEMON_MOVES[id];
  }

  // 매핑되지 않은 포켓몬은 보유 타입을 기반으로 대표 기술 구성
  const fastMoves: PokemonMove[] = [];
  const chargedMoves: PokemonMove[] = [];

  for (const t of types) {
    const defaultSet = DEFAULT_MOVES_BY_TYPE[t];
    if (defaultSet) {
      defaultSet.fast.forEach((name) => {
        fastMoves.push({ nameKo: name, type: t, category: 'fast' });
      });
      defaultSet.charged.forEach((name) => {
        chargedMoves.push({ nameKo: name, type: t, category: 'charged' });
      });
    }
  }

  return {
    fast: fastMoves.slice(0, 3),
    charged: chargedMoves.slice(0, 4),
  };
}
