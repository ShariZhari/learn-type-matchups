import { Link } from "react-router-dom";

interface NextPageProps {
    isNext: Boolean;
    pageName: string;
    pageLink: string;
}

export default function NextPage({isNext, pageName, pageLink}: NextPageProps) {
    return <Link to={pageLink}>
        <div className="flex flex-row rounded-lg p-4 bg-zinc-900 max-w-60 hover:text-lime-400 transition-colors">
            {!isNext && <div className="content-center pr-2 text-xl font-bold">{"\u02C2"}</div>}
            <div className="flex flex-col">
            {isNext ? <label>Next lesson:</label> : <label>Previous lesson:</label>}
            <label className="text-lg">{pageName}</label>
            </div>
            {isNext && <div className="content-center pl-2 text-xl font-bold">{"\u02C3"}</div>}
        </div>
    </Link>
}