import { Link } from "react-router-dom";

export default function Navbar() {
    return <nav className="fixed min-w-screen bg-mist-500 dark:bg-mist-800 pl-4 py-2">
        <div className="flex justify-between">
        <Link to="/">
            <h2 className="font-bold text-xl hover:text-slate-400 transition-colors">Learn type matchups</h2>
        </Link>
        <div className="flex gap-6 mr-8 md:mr-20 text-lg">
            <Link to="/learn">
            <label className="hover:text-slate-400 transition-colors">Learn</label>
        </Link>
        <Link to="/quiz">
            <label className="hover:text-slate-400 transition-colors">Quiz</label>
        </Link>
        </div>
        </div>
    </nav>
}
