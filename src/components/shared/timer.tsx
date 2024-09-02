'use client'
import React, { useEffect, useState } from 'react'

type TimerProps = {
	targetDate: Date
}

export const Timer: React.FC<TimerProps> = ({ targetDate }) => {
	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	})

	useEffect(() => {
		const interval = setInterval(() => {
			const difference = targetDate.getTime() - Date.now()
			const days = Math.floor(difference / (1000 * 60 * 60 * 24))
			const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
			const minutes = Math.floor((difference / 1000 / 60) % 60)
			const seconds = Math.floor((difference / 1000) % 60)

			setTimeLeft({ days, hours, minutes, seconds })
		}, 1000)

		return () => clearInterval(interval)
	}, [targetDate])

	return (
		<div className='text-left text-white font-black mt-5 text-3xl leading-10'>
			{timeLeft.days}д, {timeLeft.hours}ч, {timeLeft.minutes}м,{' '}
			{timeLeft.seconds}с до открытия
		</div>
	)
}

export default Timer