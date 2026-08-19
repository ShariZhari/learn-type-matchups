import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

interface SidebarProps {
    showSidebar: boolean;
    toggleSidebar: () => void;
}

export default function Sidebar({ showSidebar, toggleSidebar }: SidebarProps) {
    const {t} = useTranslation();
    return <>
        {!showSidebar && <button className="absolute top-14 rotate-90 bg-zinc-900 px-2 py-3 rounded-xl" onClick={toggleSidebar}>
            {t("learn.sidebar.menu")}</button>}
        {showSidebar && <div className="absolute lg:hidden left-0 bottom-0 top-11 h-1vh w-full bg-zinc-950/70" onClick={toggleSidebar}></div>}
        <aside inert={!showSidebar} className={`w-60 mt-13 px-4 h-full bg-zinc-800 text-white flex rounded-xl fixed lg:static 
            ${showSidebar ? "left-0" : "-left-60"} transition-all ease-out delay-150 duration-300`}>
            <nav className="mt-4 space-y-1">
                <div className="flex justify-end">
                    <button className="px-2 text-xl font-bold block lg:hidden" onClick={toggleSidebar}>{"\u02C2"}</button>
                </div>
                <ul className="flex flex-col divide-y-1 divide-white">
                    <NavLink to={"/learn/lesson-1"} className={({ isActive }) =>
                        isActive ? "text-sky-400" : "text-white"
                    }>
                        <li className="gap-3 px-3 py-2.5 min-h-16 hover:text-sky-400 content-center transition-colors">
                            {t("learn.lesson1")}</li></NavLink>
                    <NavLink to={"/learn/type-matchups"} className={({ isActive }) =>
                        isActive ? "text-sky-400" : "text-white"
                    }>
                        <li className="gap-3 px-3 py-2.5 min-h-16 hover:text-sky-400 content-center transition-colors">
                            {t("learn.typeMatchups")}</li></NavLink>
                    <NavLink to={"/learn/lesson-2"} className={({ isActive }) =>
                        isActive ? "text-sky-400" : "text-white"
                    }>
                        <li className="gap-3 px-3 py-2.5 min-h-16 hover:text-sky-400 content-center transition-colors">
                            {t("learn.lesson2")}</li></NavLink>
                </ul>
            </nav>
        </aside>
    </>
}