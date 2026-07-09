import NextPage from "../components/NextPage"
import Sidebar from "../components/Sidebar"
import type { LayoutProps } from "../utils/interfaces"

interface LearnProps extends LayoutProps {
  previousPage?: string;
  previousLink?: string;
  nextPage?: string;
  nextLink?: string;
}

export default function Learn({ children, previousPage, previousLink, nextPage, nextLink }: LearnProps) {
  return <div className="flex h-screen w-full overflow-hidden"> <Sidebar />
    <main className="flex-1 flex flex-col h-full mt-13 ml-3 px-14 py-10 bg-mauve-700 overflow-y-auto rounded-lg">
      {children}

      <div className={`flex justify-between mb-10 ${nextLink ? "flex-row-reverse" : "flex-row"}`}>
        {(nextPage && nextLink) && <NextPage isNext={true} pageName={nextPage} pageLink={nextLink} />}
        {(previousPage && previousLink) && <NextPage isNext={false} pageName={previousPage} pageLink={previousLink} />}
      </div>
    </main>
  </div>
}
