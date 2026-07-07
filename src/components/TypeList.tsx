import { getTypeName } from "../utils/utils"
import TypeBadge from "./TypeBadge"

interface TypeListProps {
    typeArray: number[]
}

export default function TypeList ({typeArray}: TypeListProps) {
    const x4Types : number[] = [];
    const repeated = new Set();
    typeArray.forEach((id) => {
        if(repeated.has(id)){
            x4Types.push(id);
        } else {
            repeated.add(id);
        }
    })
    const x2Types = typeArray.filter((id) => !x4Types.includes(id));
    
    return <>
        {x2Types.map((id) => <TypeBadge key={id} title={getTypeName(id)} ></TypeBadge>)}
        {x4Types.map((id) => <TypeBadge key={id + x2Types.length} isX4={true} title={getTypeName(id)} ></TypeBadge>)}
    </>
}