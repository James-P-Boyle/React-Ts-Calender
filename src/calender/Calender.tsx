import { useDate } from "../hooks/useDate"
import Cell from "./Cell"
import CalenderLayout from "./CalenderLayout"
import CalenderHeader from "./CalenderHeader"

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

interface CalenderProps {
    currentDate: Date
    setCurrentDate: React.Dispatch<React.SetStateAction<Date>>
    onChange?: (value: Date) => void
    requests?: {
        start: Date;
        end: Date;
        name: string;
        color: string;
    }[]
}

export default function Calender({
    currentDate = new Date(),
    setCurrentDate,
    onChange,
    requests,
}: CalenderProps) {

    const {
        startDate,
        endDate,
        numDays,
        monthYearString,
        prevMonth,
        nextMonth,
    } = useDate({ currentDate })

    const prefixDays = startDate.getDay()

    const cells = Array.from({ length : numDays}).map((_, index) => {
        const date = index + 1
        const currentDate = new Date(startDate.getFullYear(), startDate.getMonth(), date)

        const request = requests?.find((request) => {
            return currentDate >= request.start && currentDate <= request.end
        }) || null

        const cellText = request ? request.name : date
        const cellColor = request ? request.color : undefined

        return  <Cell key={`cell-${index}`} className="h-full" color={cellColor}>{cellText}</Cell>
    })

    return (

        <CalenderLayout>

            <CalenderHeader
                monthYearString={monthYearString}
                prevMonth={prevMonth}
                nextMonth={nextMonth}
            />

            {daysOfWeek.map((day, index) =>
                <Cell key={`day-${index}`} className="font-bold h-full">
                    {day}
                </Cell>
            )}

            {Array.from({ length: prefixDays }).map((_, index) =>
                <Cell key={`prefix-${index}`} className="h-full bg-gray-100"/>
            )}

            {Array.from({ length : numDays}).map((_, index) => {
                const date = index + 1
                const currentDate = new Date(startDate.getFullYear(), startDate.getMonth(), date)

                const request = requests?.find((request) => {
                    return currentDate >= request.start && currentDate <= request.end
                }) || null

                const cellText = request ? request.name : date

                return  <Cell key={`cell-${index}`} className="h-full" color={request?.color}>{cellText}</Cell>

            })}

            {Array.from({ length: 42 - prefixDays - numDays }).map((_, index) =>
                <Cell key={`suffix-${index}`} className="h-full bg-gray-100"/>
            )}

        </CalenderLayout>
    )
}

/*
    // options?: {
    //     backgroundColor?: string
    //     backgroundColorWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
    //     borderColor?: string
    //     borderColorWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
    //     borderWidth?: number
    //     textColor?: string
    //     fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
    // }
*/