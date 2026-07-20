import type { LayoutProps } from "../utils/interfaces";

export default function Card({children}: LayoutProps) {
    return <div className="rounded-lg p-4 bg-zinc-900">
            {children}
        </div>
}