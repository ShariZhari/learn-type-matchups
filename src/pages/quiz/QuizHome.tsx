import { lazy, Suspense, useState } from "react";
import QuizConfig from "./components/QuizConfig";
import type { ConfigQuiz } from "../../utils/interfaces";
import { CATEGORY, DIFFICULTY } from "../../utils/utils";
import QuizLayout from "../../layouts/QuizLayout";

const Quiz = lazy(() => import("./components/Quiz"))

export default function QuizHome() {
    const [showQuiz, setShowQuiz] = useState(false);
    const [config, setConfig] = useState<ConfigQuiz>({ category: CATEGORY.SINGLE_TYPE, difficulty: DIFFICULTY.BEGINNER })

    const startQuiz = (category: number, difficulty: number) => {
        setConfig({ category, difficulty })
        setShowQuiz(true);
    }

    const hideQuiz = () => {
        setShowQuiz(false)
    }

    return <QuizLayout>
        {!showQuiz ? <QuizConfig startQuiz={startQuiz}></QuizConfig>
            : <Suspense fallback={
                <div className="h-100 w-full content-center text-2xl">Loading...</div>
            }><Quiz config={config} hideQuiz={hideQuiz}/></Suspense>}
    </QuizLayout>
}