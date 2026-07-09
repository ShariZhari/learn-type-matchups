import { Link } from "react-router-dom";

interface NextPageProps {
    isNext: Boolean;
    pageName: string;
    pageLink: string;
}

export default function NextPage({isNext, pageName, pageLink}: NextPageProps) {
    return <Link to={pageLink}>
        <div className="flex flex-col rounded-lg p-4 bg-mauve-800 max-w-60 hover:text-slate-400 transition-colors">
            {isNext ? <label>Next lesson:</label> : <label>Previous lesson:</label>}
            <label className="text-lg">{pageName}</label>
        </div>
    </Link>
}