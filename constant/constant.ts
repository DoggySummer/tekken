// 인물 초상화
import anna from '@/assets/images/anna_thumb.webp'
import alisa from '@/assets/images/alisa_thumb.webp'
import asuka from '@/assets/images/asuka_thumb.webp'
import azucena from '@/assets/images/azucena_thumb.webp'
import bryan from '@/assets/images/bryan_thumb.webp'
import claudio from '@/assets/images/claudio_thumb.webp'
import clive from '@/assets/images/clive_thumb.webp'
import deviljin from '@/assets/images/deviljin_thumb.png'
import dragunov from '@/assets/images/dragunov_thumb.webp'
import eddy from '@/assets/images/eddy_thumb.webp'
import fengwei from '@/assets/images/fengwei_thumb.webp'
import heihachi from '@/assets/images/heihachi_thumb.webp'
import hwoarang from '@/assets/images/hwoarang_thumb.webp'
import jack from '@/assets/images/jack_thumb.webp'
import jin from '@/assets/images/jin_thumb.webp'
import jun from '@/assets/images/jun_thumb.webp'
import kazuya from '@/assets/images/kazuya_thumb.webp'
import king from '@/assets/images/king_thumb.webp'
import kuma from '@/assets/images/kuma_thumb.webp'
import lars from '@/assets/images/lars_thumb.webp'
import law from '@/assets/images/law_thumb.webp'
import leo from '@/assets/images/leo_thumb.webp'
import lee from '@/assets/images/lee_thumb.webp'
import leory from '@/assets/images/leroy_thumb.webp'
import lili from '@/assets/images/lili_thumb.webp'
import lidia from '@/assets/images/lidia_thumb.webp'
import nina from '@/assets/images/nina_thumb.webp'
import panda from '@/assets/images/panda_thumb.png'
import paul from '@/assets/images/paul_thumb.webp'
import raven from '@/assets/images/raven_thumb.webp'
import reina from '@/assets/images/reina_thumb.png'
import shaheen from '@/assets/images/shaheen_thumb.webp'
import steve from '@/assets/images/steve_thumb.webp'
import victor from '@/assets/images/victor_thumb.webp'
import xiaoyu from '@/assets/images/xiaoyu_thumb.webp'
import yoshimitsu from '@/assets/images/yoshimitsu_thumb.webp'
import zafina from '@/assets/images/zafina_thumb.webp'

// 버튼
import lp from '@/assets/images/lp_btn.png'
import rp from '@/assets/images/rp_btn.png'
import ap from '@/assets/images/ap.png'
import lk from '@/assets/images/lk_btn.png'
import rk from '@/assets/images/rk_btn.png'
import ak from '@/assets/images/ak.png'
import la from '@/assets/images/la_btn.png'
import ra from '@/assets/images/ra_btn.png'
import ht from '@/assets/images/hx_btn.png'
import hx from '@/assets/images/hx_btn.png'
import move01 from '@/assets/images/arrow_01.png'
import move02 from '@/assets/images/arrow_02.png'
import move03 from '@/assets/images/arrow_03.png'
import move04 from '@/assets/images/arrow_04.png'
import move06 from '@/assets/images/arrow_06.png'
import move07 from '@/assets/images/arrow_07.png'
import move08 from '@/assets/images/arrow_08.png'
import move09 from '@/assets/images/arrow_09.png'
import dash01 from '@/assets/images/arrow_11.png'
import dash02 from '@/assets/images/arrow_12.png'
import dash03 from '@/assets/images/arrow_13.png'
import dash04 from '@/assets/images/arrow_14.png'
import dash06 from '@/assets/images/arrow_16.png'
import dash07 from '@/assets/images/arrow_17.png'
import dash08 from '@/assets/images/arrow_18.png'
import dash09 from '@/assets/images/arrow_19.png'
import { Skill } from './type'

export const moveList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] as const

export const atkList = [
  'LP',
  'AP',
  'RP',
  'LA',
  'LK',
  'AK',
  'RK',
  'RA',
  'HT',
  'HX',
] as const
export const characterList = [
  {
    name: 'anna',
    image: anna,
  },
  {
    name: 'alisa',
    image: alisa,
  },
  {
    name: 'asuka',
    image: asuka,
  },
  {
    name: 'azucena',
    image: azucena,
  },
  {
    name: 'bryan',
    image: bryan,
  },
  {
    name: 'claudio',
    image: claudio,
  },
  {
    name: 'clive',
    image: clive,
  },
  {
    name: 'deviljin',
    image: deviljin,
  },
  {
    name: 'dragunov',
    image: dragunov,
  },
  {
    name: 'eddy',
    image: eddy,
  },
  {
    name: 'fengwei',
    image: fengwei,
  },
  {
    name: 'heihachi',
    image: heihachi,
  },
  {
    name: 'hwoarang',
    image: hwoarang,
  },
  {
    name: 'jack',
    image: jack,
  },
  {
    name: 'jin',
    image: jin,
  },
  {
    name: 'jun',
    image: jun,
  },
  {
    name: 'kazuya',
    image: kazuya,
  },
  {
    name: 'king',
    image: king,
  },
  {
    name: 'kuma',
    image: kuma,
  },
  {
    name: 'lars',
    image: lars,
  },
  {
    name: 'law',
    image: law,
  },
  {
    name: 'leo',
    image: leo,
  },
  {
    name: 'lee',
    image: lee,
  },
  {
    name: 'leory',
    image: leory,
  },
  {
    name: 'lili',
    image: lili,
  },
  {
    name: 'lidia',
    image: lidia,
  },
  {
    name: 'nina',
    image: nina,
  },
  {
    name: 'panda',
    image: panda,
  },
  {
    name: 'paul',
    image: paul,
  },
  {
    name: 'raven',
    image: raven,
  },
  {
    name: 'reina',
    image: reina,
  },
  {
    name: 'shaheen',
    image: shaheen,
  },
  {
    name: 'steve',
    image: steve,
  },
  {
    name: 'victor',
    image: victor,
  },
  {
    name: 'xiaoyu',
    image: xiaoyu,
  },
  {
    name: 'yoshimitsu',
    image: yoshimitsu,
  },
  {
    name: 'zafina',
    image: zafina,
  },
]

export const buttonList = [
  {
    name: 'lp',
    image: lp,
  },
  {
    name: 'rp',
    image: rp,
  },
  {
    name: 'ap',
    image: ap,
  },
  {
    name: 'lk',
    image: lk,
  },
  {
    name: 'rk',
    image: rk,
  },
  {
    name: 'ak',
    image: ak,
  },
  {
    name: 'la',
    image: la,
  },
  {
    name: 'ra',
    image: ra,
  },
  {
    name: 'ht',
    image: ht,
  },
  {
    name: 'hx',
    image: hx,
  },
  {
    name: 'move01',
    image: move01,
  },
  {
    name: 'move02',
    image: move02,
  },
  {
    name: 'move03',
    image: move03,
  },
  {
    name: 'move04',
    image: move04,
  },
  {
    name: 'move06',
    image: move06,
  },
  {
    name: 'move07',
    image: move07,
  },
  {
    name: 'move08',
    image: move08,
  },
  {
    name: 'move09',
    image: move09,
  },
  {
    name: 'dash01',
    image: dash01,
  },
  {
    name: 'dash02',
    image: dash02,
  },
  {
    name: 'dash03',
    image: dash03,
  },
  {
    name: 'dash04',
    image: dash04,
  },
  {
    name: 'dash06',
    image: dash06,
  },
  {
    name: 'dash07',
    image: dash07,
  },
  {
    name: 'dash08',
    image: dash08,
  },
  {
    name: 'dash09',
    image: dash09,
  },
]
export const dummyskill01: Skill = {
  id: 'dummy01',
  name: 'funeral palm',
  aka: '귀살',
  character: 'asuka',
  isFavorite: false,
  command: ['move06', 'rp'],
  start: 10,
  hit: 3,
  guard: -8,
  counter: 5,
  position: ['중'],
  dmg1: 21,
  form: 'basic'
}

export const dummyskill02: Skill = {
  id: 'dummy02',
  name: 'Violet',
  aka: '붕권',
  isFavorite: false,
  character: 'paul',
  command: ['move02', 'move03', 'move06', 'rp'],
  start: 15,
  hit: 5,
  guard: -13,
  counter: 8,
  position: ['중'],
  dmg1: 45,
  form: 'basic'
}