import { useEffect, useState } from "react";
import Button from "../../../components/Button";
import TypeList from "../../../components/TypeList";
import { types } from "../../../utils/types";
import { CATEGORY, DIFFICULTY, getWeaknesses, TOTAL_TYPES } from "../../../utils/utils";
import TypeBadge from "../../../components/TypeBadge";
import { type PkmnType, type ConfigQuiz } from "../../../utils/interfaces";

interface QuizProps {
  config: ConfigQuiz
}

const QUIZ_TITLE = {
  0: "Which types is this type weak to?",
  1: "Which types is this type combination weak to?",
  2: "Which types is this pokémon weak to?"
}

export default function Quiz({ config }: QuizProps) {
  const [currentType1, setCurrentType1] = useState(types[Math.floor(Math.random() * TOTAL_TYPES)]);
  const [currentType2, setCurrentType2] = useState<PkmnType | null>();
  const [selectedTypes, setSelectedTypes] = useState<number[]>([]);
  const [points, setPoints] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [correct, setCorrect] = useState(false);

  useEffect(() => {
    if(config.category === CATEGORY.DUAL_TYPE){
      setCurrentType2(types[Math.floor(Math.random() * TOTAL_TYPES)])
    }
  }, [config])

  const selectType = (id: number) => {
    setSelectedTypes((prev) =>
      prev.includes(id) ?
        prev.filter(type => type !== id) :
        [...selectedTypes, id]
    )
  }

  const resetGame = () => {
    if(config.category !== CATEGORY.POKEMON){
      setCurrentType1(types[Math.floor(Math.random() * TOTAL_TYPES)]);
      if(config.category === CATEGORY.DUAL_TYPE) {
        setCurrentType2(types[Math.floor(Math.random() * TOTAL_TYPES)]);
      }
    }
    setSelectedTypes([]);
    setShowResult(false);
    setCorrect(false);
  }

  const checkIfEqual = (types: number[], answer: number[]) => {
    const set1 = new Set(types);
    if (config.difficulty === DIFFICULTY.BEGINNER) {
      return answer.every(item => set1.has(item));
    } else {
      const set2 = new Set(answer);
      return types.every(item => set2.has(item)) &&
        answer.every(item => set1.has(item))
    }
  }

  const checkAnswer = () => {
    if (checkIfEqual(getWeaknesses(currentType1, currentType2), selectedTypes)) {
      setPoints((points) => points + 1)
      setCorrect(true);
    }
    else {
      setCorrect(false);
      setSelectedTypes([]);
    }
    setShowResult(true);
  }

  return <>
    <div className="pt-11 pb-4 w-full flex flex-col md:flex-row md:justify-between">
      <h1 className="text-3xl mb-4">{QUIZ_TITLE[config.category as keyof typeof QUIZ_TITLE]}</h1>
      <label>POINTS: {points}</label>
    </div>
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/3 mb-5">
      <TypeBadge title={currentType1.name} isBig={true} />
      {currentType2 && <TypeBadge title={currentType2.name} isBig={true} />}</div>
      <div className="md:w-2/3 flex flex-wrap">
        <div className="mb-5">
          {types.map((type) => <Button
            key={type.id} title={type.name}
            color={type.name}
            onClick={() => selectType(type.id)}
            disabled={!selectedTypes.includes(type.id)}
            isType={true}></Button>)}
          {!correct && <div className="mt-3"><Button title={"Check!"} onClick={checkAnswer}></Button></div>}
        </div>
        {showResult && (correct ? <div><p className="my-2 mb-5">
          <label><strong>Correct!</strong></label>
          <TypeBadge title={currentType1.name}></TypeBadge>
          {currentType2 && <TypeBadge title={currentType2.name}/>}
          <label>Is weak against:</label>
          <TypeList typeArray={getWeaknesses(currentType1, currentType2)}></TypeList>
        </p>
          <Button title={"Next type"} onClick={resetGame}></Button>
        </div> : <p className="mt-2">
          <label>Not quite right. Try again!</label>
        </p>)}
      </div>
    </div>
  </>
}