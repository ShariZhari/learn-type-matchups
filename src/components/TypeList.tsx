import { getTypeName } from "../utils/utils"
import TypeBadge from "./TypeBadge"

interface TypeListProps {
    typeArray: number[]
}

export default function TypeList ({typeArray}: TypeListProps) {
    return typeArray.map((id) => <TypeBadge key={id} title={getTypeName(id)} ></TypeBadge>)
}