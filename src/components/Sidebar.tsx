import { NavLink } from "react-router-dom";

export default function Sidebar() {

    return <aside className="w-60 mt-13 px-4 h-full bg-zinc-800 text-white flex rounded-xl hidden lg:block">
        <nav className="mt-4 space-y-1">
            <ul className="flex flex-col divide-y-1 divide-white">
                <NavLink to={"/learn/lesson-1"} className={({ isActive }) =>
                    isActive ? "text-sky-400" : "text-white"
                }>
                    <li className="gap-3 px-3 py-2.5 min-h-16 hover:text-sky-400 content-center transition-colors">
                        Lesson 1. Introduction to type matchups</li></NavLink>
                <NavLink to={"/learn/type-matchups"} className={({ isActive }) =>
                    isActive ? "text-sky-400" : "text-white"
                }>
                    <li className="gap-3 px-3 py-2.5 min-h-16 hover:text-sky-400 content-center transition-colors">
                        List of all Type Matchups</li></NavLink>
                <NavLink to={"/learn/lesson-2"} className={({ isActive }) =>
                    isActive ? "text-sky-400" : "text-white"
                }>
                    <li className="gap-3 px-3 py-2.5 min-h-16 hover:text-sky-400 content-center transition-colors">
                        Lesson 2. Dual Type pokemon</li></NavLink>
            </ul>
        </nav>
    </aside>
}