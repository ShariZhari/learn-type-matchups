import { colors, paleColors, textColors } from "../utils/colors";

interface BadgeProps {
    title: string,
    disabled?: boolean,
    isBig?: boolean
}

export default function TypeBadge({ title, disabled = false, isBig = false}: BadgeProps) {
    return <span className={`inline-flex items-center justify-center 
     px-1 py-0.5 font-medium
    ${isBig ? "min-w-24 mb-2 text-2xl" : "min-w-16 m-0.5 text-md transition-colors"}
    hover:${colors[title as keyof typeof colors]} 
    ${disabled ? paleColors[title as keyof typeof paleColors] : colors[title as keyof typeof colors]} 
    ${textColors[title as keyof typeof textColors]}
    rounded-lg`}>
        {title}
    </span>
}