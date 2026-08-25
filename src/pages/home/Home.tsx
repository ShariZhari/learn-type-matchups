import { Link } from "react-router-dom"
import Button from "../../components/Button"
import { ARTWORK_URL, IMG_TYPE, TOTAL_POKEMON } from "../../utils/utils"
import HomeLayout from "../../layouts/HomeLayout"
import { useTranslation } from "react-i18next"
import "../../utils/i18n"

export default function Home() {
    const {t} = useTranslation();
    return <HomeLayout>
        <div className="flex flex-col md:flex-row">
        <h1 className="md:hidden text-4xl text-sky-400 font-medium">{t("home.welcome")}</h1>
        <div className="md:w-7/12 flex justify-center">
            <img className="w-60 md:w-100" src={ARTWORK_URL + Math.floor(Math.random() * TOTAL_POKEMON) + IMG_TYPE} />
        </div>
        <div className="md:w-5/12 flex flex-col">
            <div className="mb-8">
                <h1 className="text-4xl mb-7 md:mt-8 hidden md:block text-sky-400 font-medium">{t("home.welcome")}</h1>
                <h2 className="text-2xl mb-2">{t("home.learnHeading")}</h2>
                <p className="mb-2">{t("home.learnDescription")}</p>
                <Link to="/learn">
                    <Button title={"home.startLearning"}></Button>
                </Link>
            </div>
            <div className="mb-8">
                <h2 className="text-2xl mb-2">{t("common.quiz")}</h2>
                <p className="mb-2">{t("home.quizDescription")}</p>
                <Link to="/quiz">
                    <Button title={"common.startQuiz"}></Button>
                </Link>
            </div>
        </div>
        </div>
    </HomeLayout>
}
