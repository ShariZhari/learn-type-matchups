import type { LayoutProps } from "../utils/interfaces"

export default function HomeLayout({children}: LayoutProps) {
  return <div className="flex h-full pt-11 overflow-hidden rounded-xl justify-center">
        <div className="bg-mauve-700 mt-4 min-w-11/12 mx-13 p-8 flex rounded-lg">
      {children}
    </div>
  </div>
}
