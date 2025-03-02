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
import move01 from '@/assets/images/arrow01.png'
import move02 from '@/assets/images/arrow02.png'
import move03 from '@/assets/images/arrow03.png'
import move04 from '@/assets/images/arrow04.png'
import move05 from '@/assets/images/n.png'
import move06 from '@/assets/images/arrow06.png'
import move07 from '@/assets/images/arrow07.png'
import move08 from '@/assets/images/arrow08.png'
import move09 from '@/assets/images/arrow09.png'
import dash01 from '@/assets/images/arrow11.png'
import dash02 from '@/assets/images/arrow12.png'
import dash03 from '@/assets/images/arrow13.png'
import dash04 from '@/assets/images/arrow14.png'
import dash06 from '@/assets/images/arrow16.png'
import dash07 from '@/assets/images/arrow17.png'
import dash08 from '@/assets/images/arrow18.png'
import dash09 from '@/assets/images/arrow19.png'

//상황
import chip from '@/assets/images/chip.png'
import heat from '@/assets/images/heat.png'
import balconybreak from '@/assets/images/balconybreak.png'
import floorblast from '@/assets/images/floorblast.png'
import floorbreak from '@/assets/images/floorbreak.png'
import homing from '@/assets/images/homing.png'
import forcecrouch from '@/assets/images/forcecrouch.png'
import powercrush from '@/assets/images/powercrush.png'
import tornado from '@/assets/images/tornado.png'
import wallblast from '@/assets/images/wallblast.png'
import wallbound from '@/assets/images/wallbound.png'
import wallbreak from '@/assets/images/wallbreak.png'

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

export const situationList = [
  {
    name: 'chip',
    image: chip,
  },
  {
    name: 'heat',
    image: heat,
  },
  {
    name: 'balconybreak',
    image: balconybreak,
  },
  {
    name: 'floorblast',
    image: floorblast,
  },
  {
    name: 'floorbreak',
    image: floorbreak,
  },
  {
    name: 'homing',
    image: homing,
  },
  {
    name: 'forcecrouch',
    image: forcecrouch,
  },
  {
    name: 'powercrush',
    image: powercrush,
  },
  {
    name: 'tornado',
    image: tornado,
  },
  {
    name: 'wallblast',
    image: wallblast,
  },
  {
    name: 'wallbound',
    image: wallbound,
  },
  {
    name: 'wallbreak',
    image: wallbreak,
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
    name: 'move05',
    image: move05,
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
  form: 'basic',
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
  form: 'basic',
}
