import { ReactNode } from "react"

interface CellProps {
    className?: string
    color?: string
    children?: ReactNode
    onClick?: () => void
}

export default function Cell({ className, color, children, onClick }: CellProps) {

    return (
        <div
            onClick={onClick}
            style={{ backgroundColor: `${color}` }}
            className={`
                h-12 flex items-center justify-center
                ${className} ${onClick ? "hover:bg-gray-100 transition-colors duration-75 active:bg-green-500 cursor-pointer" : ""}
            `}
        >
            {children}
        </div>
    )
}