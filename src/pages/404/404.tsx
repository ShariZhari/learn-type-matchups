import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { ARTWORK_URL } from "../../utils/utils";

export default function NotFound() {
    return <div className="flex min-h-screen pt-11 justify-center content-center">
        <div className="bg-mauve-700 flex min-w-200 min-h-80 self-center rounded-lg">
        <img className="min-w-2/5" src={ARTWORK_URL + "404.png"} />
        
    <div>
        <h1 className="text-3xl mb-4">Page not found!</h1>
        <Link to="/">
            <Button title={"Go back home"}></Button>
        </Link>
    </div>
    
        </div>
    </div>
}