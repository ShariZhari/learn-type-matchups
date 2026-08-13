import type { LayoutProps } from "../utils/interfaces"

export default function QuizLayout({ children }: LayoutProps) {
    return <div className="pt-11 mx-13 overflow-hidden rounded-xl bg-zinc-800 shadow-md">
        <div className="min-h-100 p-8">
            {children}
        </div>
    </div>
}
