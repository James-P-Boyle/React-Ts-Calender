import { useEffect, useState } from 'react'

interface UseDateProps {
  currentDate?: Date
}

interface UseDateResult {
  startDate: Date
  endDate: Date
  numDays: number
  monthYearString: string
  prevMonth: () => void
  nextMonth: () => void
}

export function useDate({ currentDate }: UseDateProps): UseDateResult {

  const [startDate, setStartDate] = useState(startOfMonth(currentDate || new Date()))
  const [endDate, setEndDate] = useState(endOfMonth(currentDate || new Date()))
  const [numDays, setNumDays] = useState(differenceInDays(endDate, startDate) + 1)
  const [monthYearString, setMonthYearString] = useState<string>("")

  useEffect(() => {
    updateMonthYearString(currentDate || new Date());
  }, [])

  function startOfMonth(date: Date): Date {
    return new Date(date.getFullYear(), date.getMonth(), 1)
  }

  function endOfMonth(date: Date): Date {
    const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0)
    return new Date(lastDayOfMonth.getFullYear(), lastDayOfMonth.getMonth(), lastDayOfMonth.getDate())
  }

  function differenceInDays(endDate: Date, startDate: Date): number {
    const diffInMs = endDate.getTime() - startDate.getTime()
    return Math.round(diffInMs / (1000 * 60 * 60 * 24))
  }

  function prevMonth() {
    const newDate = new Date(startDate.getFullYear(), startDate.getMonth() - 1, 1)
    setStartDate(startOfMonth(newDate))
    setEndDate(endOfMonth(newDate))

    updateMonthYearString(newDate)
  }

  function nextMonth() {
    const newDate = new Date(startDate.getFullYear(), startDate.getMonth() + 1, 1)
    setStartDate(startOfMonth(newDate))
    setEndDate(endOfMonth(newDate))

    updateMonthYearString(newDate)
  }

  function updateMonthYearString(date: Date) {
    setMonthYearString(
      date.toLocaleString("default", {
        month: "long",
        year: "numeric"
      })
    )
  }

  return {
    startDate,
    endDate,
    numDays,
    monthYearString,
    prevMonth,
    nextMonth,
  }
}