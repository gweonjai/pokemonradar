import type { PokemonBasic } from '../types/pokemon';

const getArtwork = (id: number) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

// 1~9세대 레이드 보스, 전설/환상, 인기 및 스타팅 포켓몬 고품질 기본 데이터셋
export const POPULAR_POKEMONS: PokemonBasic[] = [
  // 1세대 (Kanto)
  { id: 1, nameKo: '이상해씨', nameEn: 'Bulbasaur', types: ['grass', 'poison'], artworkUrl: getArtwork(1), generation: 1 },
  { id: 3, nameKo: '이상해꽃', nameEn: 'Venusaur', types: ['grass', 'poison'], artworkUrl: getArtwork(3), generation: 1 },
  { id: 4, nameKo: '파이리', nameEn: 'Charmander', types: ['fire'], artworkUrl: getArtwork(4), generation: 1 },
  { id: 6, nameKo: '리자몽', nameEn: 'Charizard', types: ['fire', 'flying'], artworkUrl: getArtwork(6), generation: 1 },
  { id: 7, nameKo: '꼬부기', nameEn: 'Squirtle', types: ['water'], artworkUrl: getArtwork(7), generation: 1 },
  { id: 9, nameKo: '거북왕', nameEn: 'Blastoise', types: ['water'], artworkUrl: getArtwork(9), generation: 1 },
  { id: 25, nameKo: '피카츄', nameEn: 'Pikachu', types: ['electric'], artworkUrl: getArtwork(25), generation: 1 },
  { id: 26, nameKo: '라이츄', nameEn: 'Raichu', types: ['electric'], artworkUrl: getArtwork(26), generation: 1 },
  { id: 68, nameKo: '괴력몬', nameEn: 'Machamp', types: ['fighting'], artworkUrl: getArtwork(68), generation: 1 },
  { id: 94, nameKo: '팬텀', nameEn: 'Gengar', types: ['ghost', 'poison'], artworkUrl: getArtwork(94), generation: 1 },
  { id: 112, nameKo: '코뿌리', nameEn: 'Rhydon', types: ['ground', 'rock'], artworkUrl: getArtwork(112), generation: 1 },
  { id: 130, nameKo: '갸라도스', nameEn: 'Gyarados', types: ['water', 'flying'], artworkUrl: getArtwork(130), generation: 1 },
  { id: 131, nameKo: '라프라스', nameEn: 'Lapras', types: ['water', 'ice'], artworkUrl: getArtwork(131), generation: 1 },
  { id: 133, nameKo: '이브이', nameEn: 'Eevee', types: ['normal'], artworkUrl: getArtwork(133), generation: 1 },
  { id: 134, nameKo: '샤미드', nameEn: 'Vaporeon', types: ['water'], artworkUrl: getArtwork(134), generation: 1 },
  { id: 135, nameKo: '쥬피썬더', nameEn: 'Jolteon', types: ['electric'], artworkUrl: getArtwork(135), generation: 1 },
  { id: 136, nameKo: '부스터', nameEn: 'Flareon', types: ['fire'], artworkUrl: getArtwork(136), generation: 1 },
  { id: 142, nameKo: '프테라', nameEn: 'Aerodactyl', types: ['rock', 'flying'], artworkUrl: getArtwork(142), generation: 1 },
  { id: 143, nameKo: '잠만보', nameEn: 'Snorlax', types: ['normal'], artworkUrl: getArtwork(143), generation: 1 },
  { id: 144, nameKo: '프리져', nameEn: 'Articuno', types: ['ice', 'flying'], artworkUrl: getArtwork(144), isLegendary: true, generation: 1 },
  { id: 145, nameKo: '썬더', nameEn: 'Zapdos', types: ['electric', 'flying'], artworkUrl: getArtwork(145), isLegendary: true, generation: 1 },
  { id: 146, nameKo: '파이어', nameEn: 'Moltres', types: ['fire', 'flying'], artworkUrl: getArtwork(146), isLegendary: true, generation: 1 },
  { id: 149, nameKo: '망나뇽', nameEn: 'Dragonite', types: ['dragon', 'flying'], artworkUrl: getArtwork(149), generation: 1 },
  { id: 150, nameKo: '뮤츠', nameEn: 'Mewtwo', types: ['psychic'], artworkUrl: getArtwork(150), isLegendary: true, generation: 1 },
  { id: 151, nameKo: '뮤', nameEn: 'Mew', types: ['psychic'], artworkUrl: getArtwork(151), isMythical: true, generation: 1 },

  // 2세대 (Johto)
  { id: 157, nameKo: '블레이범', nameEn: 'Typhlosion', types: ['fire'], artworkUrl: getArtwork(157), generation: 2 },
  { id: 160, nameKo: '장크로다일', nameEn: 'Feraligatr', types: ['water'], artworkUrl: getArtwork(160), generation: 2 },
  { id: 196, nameKo: '에브이', nameEn: 'Espeon', types: ['psychic'], artworkUrl: getArtwork(196), generation: 2 },
  { id: 197, nameKo: '블래키', nameEn: 'Umbreon', types: ['dark'], artworkUrl: getArtwork(197), generation: 2 },
  { id: 212, nameKo: '핫삼', nameEn: 'Scizor', types: ['bug', 'steel'], artworkUrl: getArtwork(212), generation: 2 },
  { id: 214, nameKo: '헤라크로스', nameEn: 'Heracross', types: ['bug', 'fighting'], artworkUrl: getArtwork(214), generation: 2 },
  { id: 227, nameKo: '무장조', nameEn: 'Skarmory', types: ['steel', 'flying'], artworkUrl: getArtwork(227), generation: 2 },
  { id: 229, nameKo: '헬가', nameEn: 'Houndoom', types: ['dark', 'fire'], artworkUrl: getArtwork(229), generation: 2 },
  { id: 230, nameKo: '킹드라', nameEn: 'Kingdra', types: ['water', 'dragon'], artworkUrl: getArtwork(230), generation: 2 },
  { id: 243, nameKo: '라이코', nameEn: 'Raikou', types: ['electric'], artworkUrl: getArtwork(243), isLegendary: true, generation: 2 },
  { id: 244, nameKo: '앤테이', nameEn: 'Entei', types: ['fire'], artworkUrl: getArtwork(244), isLegendary: true, generation: 2 },
  { id: 245, nameKo: '스이쿤', nameEn: 'Suicune', types: ['water'], artworkUrl: getArtwork(245), isLegendary: true, generation: 2 },
  { id: 248, nameKo: '마기라스', nameEn: 'Tyranitar', types: ['rock', 'dark'], artworkUrl: getArtwork(248), generation: 2 },
  { id: 249, nameKo: '루기아', nameEn: 'Lugia', types: ['psychic', 'flying'], artworkUrl: getArtwork(249), isLegendary: true, generation: 2 },
  { id: 250, nameKo: '칠색조', nameEn: 'Ho-Oh', types: ['fire', 'flying'], artworkUrl: getArtwork(250), isLegendary: true, generation: 2 },
  { id: 251, nameKo: '세레비', nameEn: 'Celebi', types: ['psychic', 'grass'], artworkUrl: getArtwork(251), isMythical: true, generation: 2 },

  // 3세대 (Hoenn)
  { id: 254, nameKo: '나무킹', nameEn: 'Sceptile', types: ['grass'], artworkUrl: getArtwork(254), generation: 3 },
  { id: 257, nameKo: '번치코', nameEn: 'Blaziken', types: ['fire', 'fighting'], artworkUrl: getArtwork(257), generation: 3 },
  { id: 260, nameKo: '대짱이', nameEn: 'Swampert', types: ['water', 'ground'], artworkUrl: getArtwork(260), generation: 3 },
  { id: 282, nameKo: '가디안', nameEn: 'Gardevoir', types: ['psychic', 'fairy'], artworkUrl: getArtwork(282), generation: 3 },
  { id: 289, nameKo: '게을킹', nameEn: 'Slaking', types: ['normal'], artworkUrl: getArtwork(289), generation: 3 },
  { id: 306, nameKo: '보스로라', nameEn: 'Aggron', types: ['steel', 'rock'], artworkUrl: getArtwork(306), generation: 3 },
  { id: 330, nameKo: '플라이곤', nameEn: 'Flygon', types: ['ground', 'dragon'], artworkUrl: getArtwork(330), generation: 3 },
  { id: 373, nameKo: '보만다', nameEn: 'Salamence', types: ['dragon', 'flying'], artworkUrl: getArtwork(373), generation: 3 },
  { id: 376, nameKo: '메타그로스', nameEn: 'Metagross', types: ['steel', 'psychic'], artworkUrl: getArtwork(376), generation: 3 },
  { id: 377, nameKo: '레지락', nameEn: 'Regirock', types: ['rock'], artworkUrl: getArtwork(377), isLegendary: true, generation: 3 },
  { id: 378, nameKo: '레지아이스', nameEn: 'Regice', types: ['ice'], artworkUrl: getArtwork(378), isLegendary: true, generation: 3 },
  { id: 379, nameKo: '레지스틸', nameEn: 'Registeel', types: ['steel'], artworkUrl: getArtwork(379), isLegendary: true, generation: 3 },
  { id: 380, nameKo: '라티아스', nameEn: 'Latias', types: ['dragon', 'psychic'], artworkUrl: getArtwork(380), isLegendary: true, generation: 3 },
  { id: 381, nameKo: '라티오스', nameEn: 'Latios', types: ['dragon', 'psychic'], artworkUrl: getArtwork(381), isLegendary: true, generation: 3 },
  { id: 382, nameKo: '가이오가', nameEn: 'Kyogre', types: ['water'], artworkUrl: getArtwork(382), isLegendary: true, generation: 3 },
  { id: 383, nameKo: '그란돈', nameEn: 'Groudon', types: ['ground'], artworkUrl: getArtwork(383), isLegendary: true, generation: 3 },
  { id: 384, nameKo: '레쿠쟈', nameEn: 'Rayquaza', types: ['dragon', 'flying'], artworkUrl: getArtwork(384), isLegendary: true, generation: 3 },
  { id: 385, nameKo: '지라치', nameEn: 'Jirachi', types: ['steel', 'psychic'], artworkUrl: getArtwork(385), isMythical: true, generation: 3 },
  { id: 386, nameKo: '테오키스', nameEn: 'Deoxys', types: ['psychic'], artworkUrl: getArtwork(386), isMythical: true, generation: 3 },

  // 4세대 (Sinnoh)
  { id: 392, nameKo: '초염몽', nameEn: 'Infernape', types: ['fire', 'fighting'], artworkUrl: getArtwork(392), generation: 4 },
  { id: 395, nameKo: '엠페르트', nameEn: 'Empoleon', types: ['water', 'steel'], artworkUrl: getArtwork(395), generation: 4 },
  { id: 445, nameKo: '한카리아스', nameEn: 'Garchomp', types: ['dragon', 'ground'], artworkUrl: getArtwork(445), generation: 4 },
  { id: 448, nameKo: '루카리오', nameEn: 'Lucario', types: ['fighting', 'steel'], artworkUrl: getArtwork(448), generation: 4 },
  { id: 460, nameKo: '눈설왕', nameEn: 'Abomasnow', types: ['grass', 'ice'], artworkUrl: getArtwork(460), generation: 4 },
  { id: 464, nameKo: '거대코뿌리', nameEn: 'Rhyperior', types: ['ground', 'rock'], artworkUrl: getArtwork(464), generation: 4 },
  { id: 466, nameKo: '에레키블', nameEn: 'Electivire', types: ['electric'], artworkUrl: getArtwork(466), generation: 4 },
  { id: 467, nameKo: '마그마번', nameEn: 'Magmortar', types: ['fire'], artworkUrl: getArtwork(467), generation: 4 },
  { id: 468, nameKo: '토게키스', nameEn: 'Togekiss', types: ['fairy', 'flying'], artworkUrl: getArtwork(468), generation: 4 },
  { id: 470, nameKo: '리피아', nameEn: 'Leafeon', types: ['grass'], artworkUrl: getArtwork(470), generation: 4 },
  { id: 471, nameKo: '글레이시아', nameEn: 'Glaceon', types: ['ice'], artworkUrl: getArtwork(471), generation: 4 },
  { id: 475, nameKo: '엘레이드', nameEn: 'Gallade', types: ['psychic', 'fighting'], artworkUrl: getArtwork(475), generation: 4 },
  { id: 480, nameKo: '유크시', nameEn: 'Uxie', types: ['psychic'], artworkUrl: getArtwork(480), isLegendary: true, generation: 4 },
  { id: 481, nameKo: '엠라이트', nameEn: 'Mesprit', types: ['psychic'], artworkUrl: getArtwork(481), isLegendary: true, generation: 4 },
  { id: 482, nameKo: '아그놈', nameEn: 'Azelf', types: ['psychic'], artworkUrl: getArtwork(482), isLegendary: true, generation: 4 },
  { id: 483, nameKo: '디아루가', nameEn: 'Dialga', types: ['steel', 'dragon'], artworkUrl: getArtwork(483), isLegendary: true, generation: 4 },
  { id: 484, nameKo: '펄기아', nameEn: 'Palkia', types: ['water', 'dragon'], artworkUrl: getArtwork(484), isLegendary: true, generation: 4 },
  { id: 485, nameKo: '히드런', nameEn: 'Heatran', types: ['fire', 'steel'], artworkUrl: getArtwork(485), isLegendary: true, generation: 4 },
  { id: 486, nameKo: '레지기가스', nameEn: 'Regigigas', types: ['normal'], artworkUrl: getArtwork(486), isLegendary: true, generation: 4 },
  { id: 487, nameKo: '기라티나', nameEn: 'Giratina', types: ['ghost', 'dragon'], artworkUrl: getArtwork(487), isLegendary: true, generation: 4 },
  { id: 488, nameKo: '크레세리아', nameEn: 'Cresselia', types: ['psychic'], artworkUrl: getArtwork(488), isLegendary: true, generation: 4 },
  { id: 491, nameKo: '다크라이', nameEn: 'Darkrai', types: ['dark'], artworkUrl: getArtwork(491), isMythical: true, generation: 4 },
  { id: 493, nameKo: '아르세우스', nameEn: 'Arceus', types: ['normal'], artworkUrl: getArtwork(493), isMythical: true, generation: 4 },

  // 5세대 (Unova)
  { id: 530, nameKo: '몰드류', nameEn: 'Excadrill', types: ['ground', 'steel'], artworkUrl: getArtwork(530), generation: 5 },
  { id: 534, nameKo: '노보청', nameEn: 'Conkeldurr', types: ['fighting'], artworkUrl: getArtwork(534), generation: 5 },
  { id: 555, nameKo: '불비달마', nameEn: 'Darmanitan', types: ['fire'], artworkUrl: getArtwork(555), generation: 5 },
  { id: 609, nameKo: '샹델라', nameEn: 'Chandelure', types: ['ghost', 'fire'], artworkUrl: getArtwork(609), generation: 5 },
  { id: 612, nameKo: '액스라이즈', nameEn: 'Haxorus', types: ['dragon'], artworkUrl: getArtwork(612), generation: 5 },
  { id: 635, nameKo: '삼삼드래', nameEn: 'Hydreigon', types: ['dark', 'dragon'], artworkUrl: getArtwork(635), generation: 5 },
  { id: 637, nameKo: '불카모스', nameEn: 'Volcarona', types: ['bug', 'fire'], artworkUrl: getArtwork(637), generation: 5 },
  { id: 638, nameKo: '코바르온', nameEn: 'Cobalion', types: ['steel', 'fighting'], artworkUrl: getArtwork(638), isLegendary: true, generation: 5 },
  { id: 639, nameKo: '테라키온', nameEn: 'Terrakion', types: ['rock', 'fighting'], artworkUrl: getArtwork(639), isLegendary: true, generation: 5 },
  { id: 640, nameKo: '비리디온', nameEn: 'Virizion', types: ['grass', 'fighting'], artworkUrl: getArtwork(640), isLegendary: true, generation: 5 },
  { id: 641, nameKo: '토네로스', nameEn: 'Tornadus', types: ['flying'], artworkUrl: getArtwork(641), isLegendary: true, generation: 5 },
  { id: 642, nameKo: '볼트로스', nameEn: 'Thundurus', types: ['electric', 'flying'], artworkUrl: getArtwork(642), isLegendary: true, generation: 5 },
  { id: 643, nameKo: '레시라무', nameEn: 'Reshiram', types: ['dragon', 'fire'], artworkUrl: getArtwork(643), isLegendary: true, generation: 5 },
  { id: 644, nameKo: '제크로무', nameEn: 'Zekrom', types: ['dragon', 'electric'], artworkUrl: getArtwork(644), isLegendary: true, generation: 5 },
  { id: 645, nameKo: '랜드로스', nameEn: 'Landorus', types: ['ground', 'flying'], artworkUrl: getArtwork(645), isLegendary: true, generation: 5 },
  { id: 646, nameKo: '큐레무', nameEn: 'Kyurem', types: ['dragon', 'ice'], artworkUrl: getArtwork(646), isLegendary: true, generation: 5 },
  { id: 649, nameKo: '게노세크트', nameEn: 'Genesect', types: ['bug', 'steel'], artworkUrl: getArtwork(649), isMythical: true, generation: 5 },

  // 6세대 (Kalos)
  { id: 658, nameKo: '개굴닌자', nameEn: 'Greninja', types: ['water', 'dark'], artworkUrl: getArtwork(658), generation: 6 },
  { id: 663, nameKo: '파이어로', nameEn: 'Talonflame', types: ['fire', 'flying'], artworkUrl: getArtwork(663), generation: 6 },
  { id: 700, nameKo: '님피아', nameEn: 'Sylveon', types: ['fairy'], artworkUrl: getArtwork(700), generation: 6 },
  { id: 706, nameKo: '미끄래곤', nameEn: 'Goodra', types: ['dragon'], artworkUrl: getArtwork(706), generation: 6 },
  { id: 716, nameKo: '제르네아스', nameEn: 'Xerneas', types: ['fairy'], artworkUrl: getArtwork(716), isLegendary: true, generation: 6 },
  { id: 717, nameKo: '이벨타르', nameEn: 'Yveltal', types: ['dark', 'flying'], artworkUrl: getArtwork(717), isLegendary: true, generation: 6 },
  { id: 718, nameKo: '지가르데', nameEn: 'Zygarde', types: ['dragon', 'ground'], artworkUrl: getArtwork(718), isLegendary: true, generation: 6 },
  { id: 719, nameKo: '디안시', nameEn: 'Diancie', types: ['rock', 'fairy'], artworkUrl: getArtwork(719), isMythical: true, generation: 6 },
  { id: 720, nameKo: '후파', nameEn: 'Hoopa', types: ['psychic', 'ghost'], artworkUrl: getArtwork(720), isMythical: true, generation: 6 },

  // 7세대 (Alola)
  { id: 724, nameKo: '모크나이퍼', nameEn: 'Decidueye', types: ['grass', 'ghost'], artworkUrl: getArtwork(724), generation: 7 },
  { id: 727, nameKo: '어흥염', nameEn: 'Incineroar', types: ['fire', 'dark'], artworkUrl: getArtwork(727), generation: 7 },
  { id: 730, nameKo: '누리레느', nameEn: 'Primarina', types: ['water', 'fairy'], artworkUrl: getArtwork(730), generation: 7 },
  { id: 778, nameKo: '따라큐', nameEn: 'Mimikyu', types: ['ghost', 'fairy'], artworkUrl: getArtwork(778), generation: 7 },
  { id: 785, nameKo: '카푸꼬꼬꼭', nameEn: 'Tapu Koko', types: ['electric', 'fairy'], artworkUrl: getArtwork(785), isLegendary: true, generation: 7 },
  { id: 786, nameKo: '카푸나비나', nameEn: 'Tapu Lele', types: ['psychic', 'fairy'], artworkUrl: getArtwork(786), isLegendary: true, generation: 7 },
  { id: 787, nameKo: '카푸브루루', nameEn: 'Tapu Bulu', types: ['grass', 'fairy'], artworkUrl: getArtwork(787), isLegendary: true, generation: 7 },
  { id: 788, nameKo: '카푸느지느', nameEn: 'Tapu Fini', types: ['water', 'fairy'], artworkUrl: getArtwork(788), isLegendary: true, generation: 7 },
  { id: 791, nameKo: '솔가레오', nameEn: 'Solgaleo', types: ['psychic', 'steel'], artworkUrl: getArtwork(791), isLegendary: true, generation: 7 },
  { id: 792, nameKo: '루나아라', nameEn: 'Lunala', types: ['psychic', 'ghost'], artworkUrl: getArtwork(792), isLegendary: true, generation: 7 },
  { id: 793, nameKo: '텅비드', nameEn: 'Nihilego', types: ['rock', 'poison'], artworkUrl: getArtwork(793), isLegendary: true, generation: 7 },
  { id: 796, nameKo: '전수목', nameEn: 'Xurkitree', types: ['electric'], artworkUrl: getArtwork(796), isLegendary: true, generation: 7 },
  { id: 797, nameKo: '철화구야', nameEn: 'Celesteela', types: ['steel', 'flying'], artworkUrl: getArtwork(797), isLegendary: true, generation: 7 },
  { id: 798, nameKo: '종이신도', nameEn: 'Kartana', types: ['grass', 'steel'], artworkUrl: getArtwork(798), isLegendary: true, generation: 7 },
  { id: 799, nameKo: '악식킹', nameEn: 'Guzzlord', types: ['dark', 'dragon'], artworkUrl: getArtwork(799), isLegendary: true, generation: 7 },
  { id: 800, nameKo: '네크로즈마', nameEn: 'Necrozma', types: ['psychic'], artworkUrl: getArtwork(800), isLegendary: true, generation: 7 },

  // 8세대 (Galar)
  { id: 812, nameKo: '고릴타', nameEn: 'Rillaboom', types: ['grass'], artworkUrl: getArtwork(812), generation: 8 },
  { id: 815, nameKo: '에이스번', nameEn: 'Cinderace', types: ['fire'], artworkUrl: getArtwork(815), generation: 8 },
  { id: 818, nameKo: '인텔리레온', nameEn: 'Inteleon', types: ['water'], artworkUrl: getArtwork(818), generation: 8 },
  { id: 887, nameKo: '드래펄트', nameEn: 'Dragapult', types: ['dragon', 'ghost'], artworkUrl: getArtwork(887), generation: 8 },
  { id: 888, nameKo: '자시안', nameEn: 'Zacian', types: ['fairy'], artworkUrl: getArtwork(888), isLegendary: true, generation: 8 },
  { id: 889, nameKo: '자마젠타', nameEn: 'Zamazenta', types: ['fighting'], artworkUrl: getArtwork(889), isLegendary: true, generation: 8 },
  { id: 890, nameKo: '무한다이노', nameEn: 'Eternatus', types: ['poison', 'dragon'], artworkUrl: getArtwork(890), isLegendary: true, generation: 8 },
  { id: 892, nameKo: '우라오스', nameEn: 'Urshifu', types: ['fighting', 'dark'], artworkUrl: getArtwork(892), isLegendary: true, generation: 8 },

  // 9세대 (Paldea)
  { id: 906, nameKo: '나오하', nameEn: 'Sprigatito', types: ['grass'], artworkUrl: getArtwork(906), generation: 9 },
  { id: 908, nameKo: '마스카나', nameEn: 'Meowscarada', types: ['grass', 'dark'], artworkUrl: getArtwork(908), generation: 9 },
  { id: 909, nameKo: '뜨아거', nameEn: 'Fuecoco', types: ['fire'], artworkUrl: getArtwork(909), generation: 9 },
  { id: 911, nameKo: '라우드본', nameEn: 'Skeledirge', types: ['fire', 'ghost'], artworkUrl: getArtwork(911), generation: 9 },
  { id: 912, nameKo: '꾸왁스', nameEn: 'Quaxly', types: ['water'], artworkUrl: getArtwork(912), generation: 9 },
  { id: 914, nameKo: '웨이니발', nameEn: 'Quaquaval', types: ['water', 'fighting'], artworkUrl: getArtwork(914), generation: 9 },
  { id: 937, nameKo: '카디나르마', nameEn: 'Armarouge', types: ['fire', 'psychic'], artworkUrl: getArtwork(937), generation: 9 },
  { id: 938, nameKo: '파라블레이즈', nameEn: 'Ceruledge', types: ['fire', 'ghost'], artworkUrl: getArtwork(938), generation: 9 },
  { id: 998, nameKo: '드니차', nameEn: 'Baxcalibur', types: ['dragon', 'ice'], artworkUrl: getArtwork(998), generation: 9 },
  { id: 1007, nameKo: '코라이돈', nameEn: 'Koraidon', types: ['fighting', 'dragon'], artworkUrl: getArtwork(1007), isLegendary: true, generation: 9 },
  { id: 1008, nameKo: '미라이돈', nameEn: 'Miraidon', types: ['electric', 'dragon'], artworkUrl: getArtwork(1008), isLegendary: true, generation: 9 },
];

// 레이드 배틀 단골 추천 포켓몬 ID 목록 (원클릭 퀵 셀렉트용)
export const RAID_FEATURED_IDS = [
  6,   // 리자몽
  150, // 뮤츠
  248, // 마기라스
  382, // 가이오가
  383, // 그란돈
  384, // 레쿠쟈
  445, // 한카리아스
  483, // 디아루가
  484, // 펄기아
  643, // 레시라무
  798, // 종이신도
  888, // 자시안
];
