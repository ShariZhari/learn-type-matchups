import { useState } from "react";
import Button from "../../../components/Button";
import { CATEGORY, DIFFICULTY } from "../../../utils/utils";
import { useTranslation } from "react-i18next";
import "../../../utils/i18n"

interface QuizConfigProps {
    startQuiz: (category: number, difficulty: number) => void
}


export default function QuizConfig({ startQuiz }: QuizConfigProps) {
    const {t} = useTranslation();
    const [category, setCategory] = useState(CATEGORY.SINGLE_TYPE);
    const [difficulty, setDifficulty] = useState(DIFFICULTY.BEGINNER);

    const sendData = () => {
        startQuiz(category, difficulty)
    }

    return <>
        <h1 className="text-3xl mb-4">{t("quiz.config.title")}</h1>
        <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-3/5 pr-14 mb-6">
                <h2 className="text-xl mb-4 w-full">{t("quiz.config.category")}</h2>
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
                            {t("quiz.config.singleType")}
                        </h3></div>
                    <p className="ml-7 mb-4">{t("quiz.config.singleTypeDesc")}</p>

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
                            {t("quiz.config.dualType")}
                        </h3>
                    </div>
                    <p className="ml-7 mb-4">{t("quiz.config.dualTypeDesc")}</p>

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
                            {t("quiz.config.pokemon")}
                        </h3></div>
                    <p className="ml-7 mb-4">{t("quiz.config.pokemonDesc")}</p>

                </div>
            </div>
            <div className="w-full md:w-2/5 pr-14">
                <h2 className="text-xl mb-4 w-full">{t("quiz.config.difficulty")}</h2>
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
                            {t("quiz.config.beginner")}
                        </h3></div>
                    <p className="ml-7 mb-4">{t("quiz.config.beginnerDesc")}</p>

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
                            {t("quiz.config.expert")}
                        </h3>
                    </div>
                    <p className="ml-7 mb-4">{t("quiz.config.expertDesc")}</p>

                    <div className="my-4 flex md:justify-end xl:pr-10">
                        <Button onClick={sendData} title={"quiz.config.start"}></Button>
                    </div>
                </div>
            </div>
        </div>
    </>
}