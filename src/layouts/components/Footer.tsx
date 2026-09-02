import { useTranslation } from "react-i18next";

export default function Footer() {
    const {t} = useTranslation();
    return <footer className="flex flex-col md:flex-row md:gap-6 max-w-full mt-auto bg-zinc-900 pl-8 pt-14 pb-4 justify-center">
        <p className="text-sm">
            {t("home.about")}
        </p>
        <p className="text-sm">
            {t("home.copy")}
        </p>
    </footer>
}
