import { useEffect, useState } from 'react'

const msInSecond = 1000
const msInMinute = 60 * 1000
const msInAHour = 60 * msInMinute
const msInADay = 24 * msInAHour

const getPartsOfTimeDuration = (duration: number): any => {
  const days = Math.floor(duration / msInADay)
  const hours = Math.floor((duration % msInADay) / msInAHour)
  const minutes = Math.floor((duration % msInAHour) / msInMinute)
  const seconds = Math.floor((duration % msInMinute) / msInSecond)
  return { days, hours, minutes, seconds }
}

export const useTime = (endDateTime: string) => {
  const date = new Date().toLocaleTimeString()
  const [time, setTime] = useState(date)
  const now = new Date().getTime()

  const future = new Date(endDateTime)
  const timeDif = future.getTime() - now
  let timeParts = getPartsOfTimeDuration(timeDif)
  timeParts.days = timeParts.days <= 9 ? `0${timeParts.days}` : timeParts.days
  timeParts.minutes = timeParts.minutes <= 9 ? `0${timeParts.minutes}` : timeParts.minutes
  timeParts.hours = timeParts.hours <= 9 ? `0${timeParts.hours}` : timeParts.hours
  timeParts.seconds = timeParts.seconds <= 9 ? `0${timeParts.seconds}` : timeParts.seconds

  useEffect(() => {
    const timeout = setTimeout(() => {
      const date = new Date()
      setTime(date.toLocaleTimeString())
    }, 1000)

    return () => {
      clearTimeout(timeout)
    }
  }, [time])

  return timeParts
}
