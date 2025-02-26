import { atkList, moveList } from './constant'

interface MoveCommand {
  move: (typeof moveList)[number]
}

interface AttackCommand {
  atk: (typeof atkList)[number]
}

export interface Skill {
  id: number
  name: string
  aka?: string
  isFavorite: boolean
  command: (MoveCommand | AttackCommand)[]
  start: number
  hit: number | 'A' | 'D'
  guard: number
  counter: number | 'A' | 'D'
  position: '상' | '중' | '하'
  dmg1?: number
  dmg2?: number
  dmg3?: number
  dmg4?: number
  form: string
}

export interface Character {
  id: number
  thumbnail: string
  bannerImg: string
  skillsAll: Skill[]
  form: string[]
  mainSkill: Skill[]
  title1: string
  title2?: string
  title3?: string
  title4?: string
  description1: string
  description2?: string
  description3?: string
  description4?: string
}
