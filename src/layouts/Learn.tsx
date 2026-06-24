import Sidebar from "../components/Sidebar"
interface LearnProps {
  children: React.ReactNode
}

export default function Learn({children}: LearnProps) {
  return <div className="flex h-screen w-full overflow-hidden"> <Sidebar />
    <main className="flex-1 flex flex-col h-full mt-13 ml-3 px-14 py-10 bg-mauve-700 overflow-y-auto rounded-lg">
      {children}
    </main>
  </div>
}
