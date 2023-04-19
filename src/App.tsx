import { useState } from 'react'
import Calender from './calender/Calender'

function App() {

  const bookings = [
    {
      start: new Date("2023-04-01"),
      end: new Date("2023-04-05"),
      name: "James",
      color: "green",
    },
    {
      start: new Date("2023-04-10"),
      end: new Date("2023-04-12"),
      name: "Leif",
      color: "red",
    },
  ]

  const [currentDate, setCurrentDate] = useState(new Date())

  return (
    <div className="App">
      <Calender
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
        onChange={() => {}}
        requests={bookings}
      />
    </div>
  )
}

export default App
