import { colors } from "../utils/colors"
import TypeBadge from "./TypeBadge"

interface ButtonProps {
    title: string,
    color?: string,
    onClick?: () => void,
    isType?: boolean
    disabled?: boolean
}

export default function Button({ title, onClick, color = "default", isType = false, disabled = false }: ButtonProps) {
    return isType ?
        <button onClick={onClick}>
            <TypeBadge title={title} disabled={disabled}></TypeBadge>
        </button>
        : <button
            className={`py-2 px-4 outline-2 rounded-xl hover:text-zinc-100 transition-colors
                ${color !== "default" ? "outline-sky-400 text-sky-400 hover:bg-sky-900" : "outline-lime-400 text-lime-400 hover:bg-lime-900"}`}
            onClick={onClick}
        >
            {title}
        </button>
}