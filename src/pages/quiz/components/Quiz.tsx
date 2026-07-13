import { useEffect, useState, useRef } from "react";
import Button from "../../../components/Button";
import TypeList from "../../../components/TypeList";
import { types } from "../../../utils/types";
import { ARTWORK_URL, CATEGORY, DIFFICULTY, getWeaknesses, TOTAL_POKEMON } from "../../../utils/utils";
import TypeBadge from "../../../components/TypeBadge";
import { type PkmnType, type ConfigQuiz } from "../../../utils/interfaces";
import Finish from "./Finish";
import { Pokedex } from "pokeapi-js-wrapper";

interface QuizProps {
  config: ConfigQuiz;
  hideQuiz: () => void;
}

const QUIZ_TITLE = {
  0: "Which types is this type weak to?",
  1: "Which types is this type combination weak to?",
  2: "Which types is this pokémon weak to?"
}

export default function Quiz({ config, hideQuiz }: QuizProps) {
  const [currentType1, setCurrentType1] = useState<PkmnType | null>();
  const [currentType2, setCurrentType2] = useState<PkmnType | null>();
  const [selectedTypes, setSelectedTypes] = useState<number[]>([]);
  const [pokemon, setPokemon] = useState({ name: "", imgUrl: "" });
  const [points, setPoints] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [finish, setFinish] = useState(false);
  const indexCopy = useRef<number[] | null>(null);
  const pokedex = useRef<any>(null);

  useEffect(() => {
    if (config.category !== CATEGORY.POKEMON) {
      indexCopy.current = [...types.map((item) => item.id)];
      if (config.category === CATEGORY.SINGLE_TYPE) {
        setCurrentType1(types[sampleItem()]);
      } else if (config.category === CATEGORY.DUAL_TYPE) {
        getTwoTypes();
      }
    } else {
      initializePokedex();
    }
  }, [config])

   const initializePokedex = async () => {
    pokedex.current = await Pokedex.init();
    await getRandomPokemon();
  }

  const getRandomPokemon = async () => {
    const tempPokemon = await pokedex.current.resource(`pokemon/${Math.floor(Math.random() * TOTAL_POKEMON)}`);
    const tempTypes = tempPokemon.types.map((x: ApiType) => parseInt(x.type.url.slice(-3, -1).replaceAll("/", "")) - 1)
    setCurrentType1(types[tempTypes[0]])
    tempTypes.length > 1 ? setCurrentType2(types[tempTypes[1]]) : setCurrentType2(null)
    setPokemon({
      name: tempPokemon.species.name.charAt(0).toUpperCase() + tempPokemon.species.name.slice(1),
      imgUrl: ARTWORK_URL + tempPokemon.id + ".png"
    });
  }

  const sampleItem = () => {
    let item = indexCopy.current![Math.floor(Math.random() * indexCopy.current!.length)]
    indexCopy.current = indexCopy.current!.filter((x) => x !== item)
    return item
  }

  const sampleTwoItems = (array: number[]) => {
    var indices: number[] = [];
    var result = new Array(2);
    for (let i = 0; i < 2; i++) {
      let j = Math.floor(Math.random() * (array.length - i) + i);
      result[i] = array[indices[j] === undefined ? j : indices[j]];
      indices[j] = indices[i] === undefined ? i : indices[i];
    }
    return result;
  }

  const getTwoTypes = () => {
    const [index1, index2] = sampleTwoItems(indexCopy.current!);
    setCurrentType1(types[index1]);
    setCurrentType2(types[index2]);
  }

  const selectType = (id: number) => {
    setSelectedTypes((prev) =>
      prev.includes(id) ?
        prev.filter(type => type !== id) :
        [...selectedTypes, id]
    )
  }

  const resetGame = () => {
    if (config.category === CATEGORY.SINGLE_TYPE) {
      if (indexCopy.current!.length === 0) {
        setFinish(true);
        indexCopy.current = [...types.map((item) => item.id)];
      } else {
        setCurrentType1(types[sampleItem()]);
      }
    }
    if (config.category === CATEGORY.DUAL_TYPE) {
      getTwoTypes();
    }
    if (config.category === CATEGORY.POKEMON) {
      getRandomPokemon();
    }
    setSelectedTypes([]);
    setShowResult(false);
    setCorrect(false);
  }

  const checkIfEqual = (types: number[], answer: number[]) => {
    const set1 = new Set(types);
    if (selectedTypes.length && config.difficulty === DIFFICULTY.BEGINNER) {
      return answer.every(item => set1.has(item));
    } else {
      const set2 = new Set(answer);
      return types.every(item => set2.has(item)) &&
        answer.every(item => set1.has(item))
    }
  }

  const checkAnswer = () => {
    if (checkIfEqual(getWeaknesses(currentType1!, currentType2), selectedTypes)) {
      setPoints((points) => points + 1)
      setCorrect(true);
    }
    else {
      setCorrect(false);
      setSelectedTypes([]);
    }
    setShowResult(true);
  }

  const onRestart = () => {
    setFinish(false);
    setPoints(0);
    resetGame();
  }

  const goBack = () => {
    setFinish(false);
    hideQuiz();
  }

  return <>
    {finish && <Finish points={points} restart={onRestart} goBack={goBack}></Finish>}
    <div className="flex justify-end items-center gap-2">
      <label>POINTS: {points}</label>
      <Button title={"Go back"} color={"secondary"} onClick={goBack}></Button>
      <Button title={"Finish"} onClick={() => setFinish(true)}></Button>
    </div>
    <div className="pt-8 md:pt-4 pb-4 w-full flex flex-col md:flex-row">
      <h1 className="text-3xl mb-4">{QUIZ_TITLE[config.category as keyof typeof QUIZ_TITLE]}</h1>
    </div>
    <div className="flex flex-col md:flex-row">
      <div className="md:w-2/5 mb-5">
        <div className="md:w-4/5">
          <div className="flex flex-col md:flex-row justify-between">
            {pokemon.name && <h2 className="text-2xl">{pokemon.name}</h2>}
            <div>
              {currentType1 && <TypeBadge title={currentType1.name} isBig={true} />}
              {currentType2 && <TypeBadge title={currentType2.name} isBig={true} />}
            </div>
          </div>
          {pokemon.imgUrl && <img className="w-60 md:w-70 md:justify-self-center" src={pokemon.imgUrl} />}
        </div>
      </div>
      <div className="md:w-3/5 flex flex-wrap">
        <div className="mb-5">
          {types.map((type) => <Button
            key={type.id} title={type.name}
            color={type.name}
            onClick={() => selectType(type.id)}
            disabled={!selectedTypes.includes(type.id)}
            isType={true}></Button>)}
          {!correct && <div className="mt-3"><Button title={"Check!"} onClick={checkAnswer}></Button></div>}
        </div>
        {showResult && (correct ? <div className="w-full"><p className="my-2 mb-5">
          <label><strong>Correct!</strong></label>
          {currentType1 && <TypeBadge title={currentType1.name} />}
          {currentType2 && <TypeBadge title={currentType2.name} />}
          <label>Is weak against:</label>
          <TypeList typeArray={getWeaknesses(currentType1!, currentType2)}></TypeList>
        </p>
          <Button title={"Next type"} onClick={resetGame}></Button>
        </div> : <div className="w-full"><p className="mt-2">
          <label>Not quite right. Try again!</label>
        </p></div>)}
        {config.category !== CATEGORY.SINGLE_TYPE && <label className="mt-5 text-sm">This quiz runs infinitely! Click finish when you want to stop playing.</label>}
      </div>
    </div>
  </>
}