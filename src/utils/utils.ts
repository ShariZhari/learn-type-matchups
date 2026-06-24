import { types } from "./types"
import { type PkmnType } from "./interfaces"

export const TOTAL_POKEMON = 1025;
export const ARTWORK_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"

export const getTypeName = (id: number) => {
  return types[id]?.name ?? "";
}

export const getWeaknesses = (type1: PkmnType, type2?: PkmnType) => {
  if(!type2){
    return type1.weak
  }

  const totalWeaknesses = [...type1.weak, ...type2.weak]
  const totalResistances = new Set([...type1.resists, ...type2.resists, ...type1.notAffectedBy, ...type2.notAffectedBy])
  
  return totalWeaknesses.filter((id) => !totalResistances.has(id))
}
