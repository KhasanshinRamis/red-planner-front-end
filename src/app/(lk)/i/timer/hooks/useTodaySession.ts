import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'

import type { ITimerState } from '../timer.types'

import { useLoadSettings } from './useLoadSettings'
import { pomodoroService } from '@/services/pomodoro.service'

export function useTodaySession({
	setActiveRound,
	setSecondsLeft,
	setIsRunning
}: ITimerState) {
	const { workInterval } = useLoadSettings()

	const {
		data: sessionsResponse,
		isLoading,
		refetch,
		isSuccess
	} = useQuery({
		queryKey: ['get today session'],
		queryFn: () => pomodoroService.getTodaySession()
	})

	const rounds = sessionsResponse?.data.rounds

	useEffect(() => {
		if (isSuccess && rounds) {
			const activeRound = rounds.find(round => !round.isCompleted)
			setActiveRound(activeRound)

			if (sessionsResponse?.data) {
				const { isRunning, secondsLeft, updatedAt } = sessionsResponse.data

				if (isRunning) {
					const secondsPassed = Math.floor(
						(Date.now() - new Date(updatedAt).getTime()) / 1000
					)
					const currentSecondsLeft = (secondsLeft ?? workInterval * 60) - secondsPassed

					setSecondsLeft(currentSecondsLeft > 0 ? currentSecondsLeft : 0)
					setIsRunning(true)
				} else if (secondsLeft) {
					setSecondsLeft(secondsLeft)
					setIsRunning(false)
				}
			} else if (activeRound && activeRound?.totalSeconds !== 0) {
				setSecondsLeft(activeRound.totalSeconds)
			}
		}
	}, [isSuccess, rounds])

	return { sessionsResponse, isLoading, workInterval }
}
