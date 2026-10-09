// 초성 목록 (19개)
const CHOSUNG_LIST = [
  'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ',
  'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
];

/**
 * 한글 문자에서 초성을 추출합니다.
 * 한글 완성형이 아닌 경우 원본 문자를 반환합니다.
 */
export function getChosung(str: string): string {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);
    // 한글 유니코드 범위: AC00(가) ~ D7A3(힣)
    if (code >= 0xac00 && code <= 0xd7a3) {
      const chosungIndex = Math.floor((code - 0xac00) / (21 * 28));
      result += CHOSUNG_LIST[chosungIndex];
    } else {
      result += str.charAt(i);
    }
  }
  return result;
}

/**
 * 입력된 검색어가 초성만으로 이루어져 있는지 확인합니다.
 */
export function isOnlyChosung(query: string): boolean {
  if (!query) return false;
  return query.split('').every(ch => CHOSUNG_LIST.includes(ch));
}

/**
 * 포켓몬이 검색어(한글 이름, 초성, 영문 이름, 도감 번호)와 일치하는지 여부 검사
 */
export function matchesSearch(
  query: string,
  target: { nameKo: string; nameEn: string; id: number }
): boolean {
  const cleanQuery = query.trim().toLowerCase();
  if (!cleanQuery) return false;

  // 1. 도감 번호 검색 (예: 25, #25, 025)
  const numOnly = cleanQuery.replace(/^#/, '');
  if (/^\d+$/.test(numOnly)) {
    if (target.id.toString() === numOnly || target.id.toString().padStart(3, '0').includes(numOnly)) {
      return true;
    }
  }

  // 2. 한글 이름 직접 포함 검색 (예: "피카", "리자")
  const lowerKo = target.nameKo.toLowerCase();
  if (lowerKo.includes(cleanQuery)) {
    return true;
  }

  // 3. 초성 검색 (예: "ㅍㅋㅊ" -> "피카츄", "ㄹㅈ" -> "리자몽")
  const targetChosung = getChosung(target.nameKo);
  if (isOnlyChosung(cleanQuery)) {
    if (targetChosung.includes(cleanQuery)) {
      return true;
    }
  }

  // 4. 영문 이름 검색 (예: "pika", "mewtwo")
  const lowerEn = target.nameEn.toLowerCase();
  if (lowerEn.includes(cleanQuery)) {
    return true;
  }

  return false;
}
