import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ICONS } from "../../utils/utils";

interface NextPageProps {
    isNext: Boolean;
    pageName: string;
    pageLink: string;
}

export default function NextPage({isNext, pageName, pageLink}: NextPageProps) {
    const {t} = useTranslation();
    return <Link to={pageLink}>
        <div className="flex flex-row rounded-lg p-4 bg-zinc-900 max-w-60 hover:text-lime-400 transition-colors">
            {!isNext && <div className="content-center pr-2 text-xl font-bold">{ICONS.LEFT_ARROW}</div>}
            <div className="flex flex-col">
            {isNext ? <label>{t("learn.nextLesson")}</label> : <label>{t("learn.previousLesson")}</label>}
            <label className="text-lg">{t(pageName)}</label>
            </div>
            {isNext && <div className="content-center pl-2 text-xl font-bold">{ICONS.RIGHT_ARROW}</div>}
        </div>
    </Link>
}