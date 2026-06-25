import { useState } from "react";
import Button from "../../components/Button";
import TypeList from "../../components/TypeList";
import { types } from "../../utils/types";
import { getWeaknesses, TOTAL_TYPES } from "../../utils/utils";
import TypeBadge from "../../components/TypeBadge";

const checkIfEqual = (arr1: number[], arr2: number[]) => {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  return arr1.every(item => set2.has(item)) &&
    arr2.every(item => set1.has(item))
}

export default function Quiz() {
  const [currentType, setCurrentType] = useState(types[Math.floor(Math.random() * TOTAL_TYPES)]);
  const [selectedTypes, setSelectedTypes] = useState<number[]>([]);
  const [points, setPoints] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [correct, setCorrect] = useState(false);

  const selectType = (id: number) => {
    setSelectedTypes((prev) => 
      prev.includes(id) ?
      prev.filter(type => type !== id) :
      [...selectedTypes, id]
    )
  }

  const resetGame = () => {
    setCurrentType(types[Math.floor(Math.random() * TOTAL_TYPES)]);
    setSelectedTypes([]);
    setShowResult(false);
    setCorrect(false);
  }

  const checkAnswer = () => {
    if (checkIfEqual(getWeaknesses(currentType), selectedTypes)) {
      setPoints((points) => points+1)
      setCorrect(true);
    }
    else {
      setCorrect(false);
    }
    setShowResult(true);
    setSelectedTypes([]);
  }

  return <>
    <div className="pt-11 mx-auto max-w-md overflow-hidden rounded-xl bg-mauve-700 shadow-md md:max-w-2xl">
      <div className=" p-8">
        <label>Points: {points}</label>
        <h1 className="text-3xl mb-4">Which types is this type weak to?</h1>
        <div className="flex">
          <div className="w-1/3"><TypeBadge title={currentType.name}></TypeBadge></div>
          <div className="w-2/3 flex flex-wrap">
            <div>
            {types.map((type) => <Button
              key={type.id} title={type.name}
              color={type.name}
              onClick={() => selectType(type.id)}
              disabled={!selectedTypes.includes(type.id)}
              isType={true}></Button>)}
              {!correct && <div className="mt-3"><Button title={"Check!"} onClick={checkAnswer}></Button></div>}
              </div>
          {showResult && (correct ? <div><p className="my-2">
            <label><strong>Correct!</strong></label>
            <TypeBadge title={currentType.name}></TypeBadge>
            <label>Is weak against:</label>
            <TypeList typeArray={getWeaknesses(currentType)}></TypeList> 
            </p>
            <Button title={"Next type"} onClick={resetGame}></Button>
         </div> : <p className="mt-2">
            <label>Not quite right. Try again!</label>
          </p>)}
          </div>
        </div>
      </div>
    </div>
  </>
}