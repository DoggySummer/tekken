import { atkList, moveList } from './constant'
import { ImageSourcePropType } from 'react-native'
export interface Skill {
  id: String
  character: string
  name: string
  aka?: string
  isFavorite: boolean
  command: string[]
  start: number
  hit: number | 'A' | 'D'
  guard: number
  counter: number | 'A' | 'D'
  position: ('상' | '중' | '하')[]
  dmg1?: number
  dmg2?: number
  dmg3?: number
  dmg4?: number
  form: string
}
export interface Character {
  name: string
  image: ImageSourcePropType
  dlc: boolean
  posture: string[]
}
