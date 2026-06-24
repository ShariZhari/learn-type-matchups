import { Link } from "react-router-dom"
import Button from "../../components/Button"
import { ARTWORK_URL, TOTAL_POKEMON } from "../../utils/utils"

export default function Home() {
    return <div className="flex min-h-screen pt-11 justify-center content-center">
        <div className="bg-mauve-700 flex min-w-200 min-h-80 self-center rounded-lg">
        <img className="min-w-2/5" src={ARTWORK_URL + Math.floor(Math.random() * TOTAL_POKEMON) + ".png"} />
        <Link to="/learn">
            <Button title={"Learn"}></Button>
        </Link>
        <Link to="/quiz">
            <Button title={"Quiz"}></Button>
        </Link>
        </div>
    </div>
}
