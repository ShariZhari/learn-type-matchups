import { Link } from "react-router-dom";
import Button from "../../components/Button";
import HomeLayout from "../../layouts/HomeLayout";
import { ARTWORK_URL } from "../../utils/utils";

const LUXIO = 404;

export default function NotFound() {
    return <HomeLayout>
        <div className="flex flex-col md:flex-row w-full">
            <h1 className="md:hidden text-4xl">Page not found!</h1>
            <div className="md:w-7/12 flex justify-center">
                <img className="w-60 md:w-100" src={ARTWORK_URL + LUXIO + ".png"} />
            </div>
            <div className="md:w-5/12 flex flex-col justify-center">
                <h1 className="text-3xl mb-4 hidden md:block">Page not found!</h1>
                <span>
                <Link to="/">
                    <Button title={"Go back home"}></Button>
                </Link>
                </span>
            </div>
        </div>
    </HomeLayout>
}