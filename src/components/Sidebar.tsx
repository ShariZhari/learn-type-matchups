import { NavLink } from "react-router-dom";

export default function Sidebar() {

    return <aside className="w-60 mt-13 px-4 h-full bg-mauve-800 text-white flex hidden md:flex">
        <nav className="mt-4 space-y-1">
            <ul>
                <NavLink to={"/learn/lesson-1"} className={({ isActive }) =>
                    isActive ? "text-slate-400" : "text-white"
                }>
                    <li className="gap-3 px-3 py-2.5 hover:text-slate-400 transition-colors">
                        Lesson 1. Introduction to type matchups</li></NavLink>
                <NavLink to={"/learn/type-matchups"} className={({ isActive }) =>
                    isActive ? "text-slate-400" : "text-white"
                }>
                    <li className="gap-3 px-3 py-2.5 hover:text-slate-400 transition-colors">
                        List of all Type Matchups</li></NavLink>
                <NavLink to={"/learn/lesson-2"} className={({ isActive }) =>
                    isActive ? "text-slate-400" : "text-white"
                }>
                    <li className="gap-3 px-3 py-2.5 hover:text-slate-400 transition-colors">
                        Lesson 2. Dual Type pokemon</li></NavLink>
            </ul>
        </nav>
    </aside>
}