import { ReactNode } from "react"

interface CalenderLayoutProps {
    children: ReactNode
}

export default function CalenderLayout({ children }: CalenderLayoutProps) {

    return (
        <div className="border-t border-l h-screen border-gray-400">
            <div className="h-full grid grid-cols-7 items-center justify-center text-center font-bold" style={{gridTemplateRows: "repeat(8, 1fr)"}}>
                {children}
            </div>
        </div>
    )
}