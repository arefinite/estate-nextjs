'use client'

import { useEffect, useState } from "react"

const DateTime = () => {
  const [time, setTime] = useState('')
  const [date, setDate] = useState('')

  useEffect(() => {
    const updateDateTime = () => {
      setTime(new Date().toLocaleTimeString())
      setDate(new Date().toDateString())
    }

    updateDateTime()
    const intervalId = setInterval(updateDateTime, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])
  return (
    <div className="text-sm">
      {date} | {time}
    </div>
  )
}
export default DateTime