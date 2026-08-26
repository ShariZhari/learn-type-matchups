import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Navbar() {
    const {t} = useTranslation();
    return <nav className="fixed min-w-screen bg-mist-500 dark:bg-zinc-950 pl-4 py-2">
        <div className="flex justify-between">
        <Link to="/">
            <h2 className="font-bold text-xl hover:text-sky-400 transition-colors">{t("common.mainTitle")}</h2>
        </Link>
        <div className="flex gap-6 mr-8 md:mr-20 text-lg">
            <Link to="/learn">
            <label className="hover:text-sky-400 transition-colors">{t("common.learn")}</label>
        </Link>
        <Link to="/quiz">
            <label className="hover:text-sky-400 transition-colors">{t("common.quiz")}</label>
        </Link>
        </div>
        </div>
    </nav>
}
