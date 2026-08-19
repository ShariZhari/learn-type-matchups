import { useTranslation } from "react-i18next";
import TypeBadge from "./TypeBadge"
import "../utils/i18n"

interface ButtonProps {
    title: string,
    color?: string,
    onClick?: () => void,
    isType?: boolean
    disabled?: boolean
}

export default function Button({ title, onClick, color = "default", isType = false, disabled = false }: ButtonProps) {
    const {t} = useTranslation();
    return isType ?
        <button onClick={onClick}>
            <TypeBadge title={title} disabled={disabled}></TypeBadge>
        </button>
        : <button
            className={`py-2 px-4 cursor-pointer outline-2 rounded-xl hover:text-zinc-100 focus:text-zinc-100 transition-colors
                ${color !== "default" ? "outline-sky-400 text-sky-400 hover:bg-sky-900 focus:bg-sky-900"
                    : "outline-lime-400 text-lime-400 hover:bg-lime-900 focus:bg-lime-900"}`}
            onClick={onClick}
        >
            {t(title)}
        </button>
}