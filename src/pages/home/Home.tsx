import { Link } from "react-router-dom"
import Button from "../../components/Button"
import { ARTWORK_URL, TOTAL_POKEMON } from "../../utils/utils"
import HomeLayout from "../../layouts/HomeLayout"

export default function Home() {
    return <HomeLayout>
        <div className="flex flex-col md:flex-row">
        <h1 className="md:hidden text-4xl text-sky-400 font-medium">Welcome!</h1>
        <div className="md:w-7/12 flex justify-center">
            <img className="w-60 md:w-100" src={ARTWORK_URL + Math.floor(Math.random() * TOTAL_POKEMON) + ".png"} />
        </div>
        <div className="md:w-5/12 flex flex-col">
            <div className="mb-8">
                <h1 className="text-4xl mb-7 md:mt-8 hidden md:block text-sky-400 font-medium">Welcome!</h1>
                <h2 className="text-2xl mb-2">Learn the theory</h2>
                <p className="mb-2">Learn the basics behind type strengths and weaknesses, type combinations, and more.</p>
                <Link to="/learn">
                    <Button title={"Start learning"}></Button>
                </Link>
            </div>
            <div className="mb-8">
                <h2 className="text-2xl mb-2">Quiz</h2>
                <p className="mb-2">Test your skills and knowledge in type matchups!</p>
                <Link to="/quiz">
                    <Button title={"Start quiz"}></Button>
                </Link>
            </div>
        </div>
        </div>
    </HomeLayout>
}
