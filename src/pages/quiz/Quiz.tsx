import { types } from "../../utils/types";
import { getTypeName, getWeaknesses } from "../../utils/utils";


const createTypeList = (typeArray: number[]) => {
  return typeArray.map((id) => <span key={id}>{getTypeName(id)} </span> )
}


export default function Quiz () {
    return <>
    <div className="pt-11 mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl">
  <div className="md:flex">
    <div className="p-8">
      <p className="mt-2 text-gray-500">
      <label><strong>{types[2].name}</strong> <strong>{types[9].name}</strong></label>
      <label>Is weak against:</label>
      <p>{createTypeList(getWeaknesses(types[2], types[9]))}</p>
    </p>
    </div>
  </div>
</div>
    </>
}