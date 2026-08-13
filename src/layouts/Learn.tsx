import { useState, useEffect } from "react";
import defaultTheme from "tailwindcss/defaultTheme";
import NextPage from "../components/NextPage"
import Sidebar from "../components/Sidebar"
import useWindowSize from "../utils/hooks";
import type { LayoutProps } from "../utils/interfaces"

interface LearnProps extends LayoutProps {
  previousPage?: string;
  previousLink?: string;
  nextPage?: string;
  nextLink?: string;
}

export default function Learn({ children, previousPage, previousLink, nextPage, nextLink }: LearnProps) {
  const [showSidebar, setShowSidebar] = useState(true);
  const [inertContent, setInertContent] = useState(false);
  const size = useWindowSize();

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
    setInertContent(!inertContent);
  }

  useEffect(() => {
    if (window.innerWidth / 16 < parseInt(defaultTheme.screens["lg"].replace("rem", ""))) {
      setShowSidebar(false);
      setInertContent(false);
    } else {
      setShowSidebar(true);
    }
  }, [size])

  return <div className="flex h-screen w-full overflow-hidden"> <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
    <main inert={inertContent} className="flex-1 flex flex-col h-full mt-13 ml-3 px-14 py-10 bg-zinc-800 overflow-y-auto rounded-lg">
      {children}

      <div className={`flex justify-between mb-10 ${nextLink ? "flex-row-reverse" : "flex-row"}`}>
        {(nextPage && nextLink) && <NextPage isNext={true} pageName={nextPage} pageLink={nextLink} />}
        {(previousPage && previousLink) && <NextPage isNext={false} pageName={previousPage} pageLink={previousLink} />}
      </div>
    </main>
  </div>
}
