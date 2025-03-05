import { atkList, moveList } from './constant'
import { ImageSourcePropType } from 'react-native'

export interface Icons {
  heat: boolean
  tornado: boolean
  wall: boolean
  floor: boolean
  homing: boolean
  power: boolean
}

export interface Skill {
  _id: string
  character_name: string
  skill_name: string
  aka_kor: string
  posture: string
  prefix: string
  command: string[]
  suffix: string
  hit_position: string[]
  dmg: string[]
  start: string
  hit: string
  counter: string
  guard: string
  hitIcons: Icons
  description_1_kor: string
  description_2_kor: string
  description_3_kor: string
  description_4_kor: string
}

export interface Character {
  name: string
  image: ImageSourcePropType
  dlc: boolean
  posture: string[]
}
