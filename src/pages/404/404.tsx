import { Link } from "react-router";
import Button from "../../components/Button";
import HomeLayout from "../../layouts/HomeLayout";
import { ARTWORK_URL, IMG_TYPE } from "../../utils/utils";
import "../../utils/i18n";
import { useTranslation } from "react-i18next";

const LUXIO = 404;

export default function NotFound() {
    const {t} = useTranslation();
    return <HomeLayout>
        <div className="flex flex-col md:flex-row w-full">
            <h1 className="md:hidden text-4xl">{t("common.notFound")}</h1>
            <div className="md:w-7/12 flex justify-center">
                <img className="w-60 md:w-100" src={ARTWORK_URL + LUXIO + IMG_TYPE} />
            </div>
            <div className="md:w-5/12 flex flex-col justify-center">
                <h1 className="text-3xl mb-4 hidden md:block">{t("common.notFound")}</h1>
                <span>
                <Link to="/">
                    <Button title={t("common.goBackHome")}></Button>
                </Link>
                </span>
            </div>
        </div>
    </HomeLayout>
}