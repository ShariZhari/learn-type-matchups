import { useTranslation } from "react-i18next";
import { colors, paleColors, textColors } from "../utils/colors";
import "../utils/i18n"

interface BadgeProps {
    title: string,
    disabled?: boolean,
    isX4?: boolean,
    isBig?: boolean
}

const X4 = " x4";

export default function TypeBadge({ title, disabled = false, isBig = false, isX4 = false}: BadgeProps) {
    const {t} = useTranslation();
    return <span className={`inline-flex items-center justify-center 
     px-1 py-0.5 font-medium
    ${isBig ? "min-w-24 mb-2 text-2xl" : "min-w-16 m-0.5 text-md transition-colors"}
    hover:${colors[title as keyof typeof colors]} 
    ${disabled ? paleColors[title as keyof typeof paleColors] : colors[title as keyof typeof colors]} 
    ${textColors[title as keyof typeof textColors]}
    rounded-lg`}>
        {t(title)}
        {isX4 && X4}
    </span>
}