import { colors, paleColors, textColors } from "../utils/colors";

interface BadgeProps {
    title: string,
    disabled?: boolean,
}

export default function TypeBadge({ title, disabled = false }: BadgeProps) {
    return <span className={`inline-flex items-center justify-center 
    m-0.5 min-w-16 px-1 py-0.5 text-md font-medium 
    hover:${colors[title as keyof typeof colors]} transition-colors
    ${disabled ? paleColors[title as keyof typeof colors] : colors[title as keyof typeof colors]} 
    ${textColors[title as keyof typeof textColors]}
    rounded-lg`}>
        {title}
    </span>
}