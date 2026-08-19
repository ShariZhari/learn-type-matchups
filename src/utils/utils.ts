import { types } from "./types"
import { type PkmnType } from "./interfaces"

export const TOTAL_POKEMON = 1025;
export const ARTWORK_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"

export const CATEGORY = {
    "SINGLE_TYPE": 0,
    "DUAL_TYPE": 1,
    "POKEMON": 2
}


export const DIFFICULTY = {
    "BEGINNER": 0,
    "EXPERT": 1,
    "MASTER": 2
}

export const LESSON_URLS = {
  "LESSON1": "/learn/lesson-1",
  "TYPE_MATCHUPS": "/learn/type-matchups",
  "LESSON2": "/learn/lesson-2"
}

export const ICONS = {
 "RIGHT_ARROW": "\u02C3",
 "LEFT_ARROW": "\u02C2",
 "DOWN_ARROW": "\u02C3",
}

export const getTypeName = (id: number) => {
  return types[id]?.name ?? "";
}

export const getWeaknesses = (type1: PkmnType, type2?: PkmnType | null) => {
  if(!type2){
    return type1.weak
  }

  const totalWeaknesses = [...type1.weak, ...type2.weak]
  const totalResistances = new Set([...type1.resists, ...type2.resists, ...type1.notAffectedBy, ...type2.notAffectedBy])
  
  return totalWeaknesses.filter((id) => !totalResistances.has(id))
}
