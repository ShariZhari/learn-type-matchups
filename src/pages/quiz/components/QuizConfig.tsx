import { useState } from "react";
import Button from "../../../components/Button";
import { CATEGORY, DIFFICULTY } from "../../../utils/utils";

interface QuizConfigProps {
    startQuiz: (category: number, difficulty: number) => void
}


export default function QuizConfig({ startQuiz }: QuizConfigProps) {
    const [category, setCategory] = useState(CATEGORY.SINGLE_TYPE);
    const [difficulty, setDifficulty] = useState(DIFFICULTY.BEGINNER);

    const sendData = () => {
        startQuiz(category, difficulty)
    }

    return <>
        <h1 className="text-3xl mb-4">Select quiz category and difficulty:</h1>
        <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-3/5 pr-14 mb-6">
                <h2 className="text-xl mb-4 w-full">Category</h2>
                <div>
                    <div className="flex">
                        <input
                            className="mt-1"
                            type="radio"
                            name="category"
                            value={CATEGORY.SINGLE_TYPE}
                            checked={category === CATEGORY.SINGLE_TYPE}
                            onChange={(e) => setCategory(parseInt(e.target.value))}
                        />
                        <h3 className="ml-4 text-lg">
                            Single type
                        </h3></div>
                    <p className="ml-7 mb-4">Guess the weaknesses of each type, one by one</p>

                    <div className="flex">
                        <input
                            className="mt-1"
                            type="radio"
                            name="category"
                            value={CATEGORY.DUAL_TYPE}
                            checked={category === CATEGORY.DUAL_TYPE}
                            onChange={(e) => setCategory(parseInt(e.target.value))}
                        />
                        <h3 className="ml-4 text-lg">
                            Dual type
                        </h3>
                    </div>
                    <p className="ml-7 mb-4">Guess the weaknesses of combinations of two types (includes combinations never seen before in pokemon games!)</p>

                    <div className="flex">
                        <input
                            className="mt-1"
                            type="radio"
                            name="category"
                            value={CATEGORY.POKEMON}
                            checked={category === CATEGORY.POKEMON}
                            onChange={(e) => setCategory(parseInt(e.target.value))}
                        />
                        <h3 className="ml-4 text-lg">
                            Pokémon
                        </h3></div>
                    <p className="ml-7 mb-4">Apply your knowledge of type matchups in real-life examples! Guess the weaknesses of pokémon.</p>

                </div>
            </div>
            <div className="w-full md:w-2/5 pr-14">
                <h2 className="text-xl mb-4 w-full">Difficulty</h2>
                <div className="justify-start">
                    <div className="flex">
                        <input
                            className="mt-1"
                            type="radio"
                            name="difficulty"
                            value={DIFFICULTY.BEGINNER}
                            checked={difficulty === DIFFICULTY.BEGINNER}
                            onChange={(e) => setDifficulty(parseInt(e.target.value))}
                        />
                        <h3 className="ml-4 text-lg">
                            Beginner
                        </h3></div>
                    <p className="ml-7 mb-4">Guess at least one weakness.</p>

                    <div className="flex">
                        <input
                            className="mt-1"
                            type="radio"
                            name="difficulty"
                            value={DIFFICULTY.EXPERT}
                            checked={difficulty === DIFFICULTY.EXPERT}
                            onChange={(e) => setDifficulty(parseInt(e.target.value))}
                        />
                        <h3 className="ml-4 text-lg">
                            Expert
                        </h3>
                    </div>
                    <p className="ml-7 mb-4">Guess all weaknesses.</p>

                    <div className="flex">
                        <input
                            className="mt-1"
                            type="radio"
                            name="difficulty"
                            value={DIFFICULTY.MASTER}
                            checked={difficulty === DIFFICULTY.MASTER}
                            onChange={(e) => setDifficulty(parseInt(e.target.value))}
                        />
                        <h3 className="ml-4 text-lg">
                            Master
                        </h3></div>
                    <p className="ml-7 mb-4">Guess weaknesses, resistances and immunities.</p>
                    <div className="my-4 flex md:justify-end xl:pr-10">
                        <Button onClick={sendData} title={"Start!"}></Button>
                    </div>
                </div>
            </div>
        </div>
    </>
}