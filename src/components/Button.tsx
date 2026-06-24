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
            className={`py-2 px-4 ${colors[color as keyof typeof colors]} rounded-full`}
            onClick={onClick}
        >
            {title}
        </button>
}