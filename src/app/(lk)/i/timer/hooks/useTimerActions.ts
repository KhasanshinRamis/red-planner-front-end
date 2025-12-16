import type { IPomodoroRoundResponse } from '@/types/pomodoro.types'

import type { ITimerState } from '../timer.types'

import { useLoadSettings } from './useLoadSettings'
import { useUpdateRound } from './useUpdateRound'
import { useUpdateSession } from './useUpdateSession'

type TypeUseTimerActions = ITimerState & {
	rounds: IPomodoroRoundResponse[] | undefined
	sessionId: string | undefined
}

export function useTimerActions({
	activeRound,
	setIsRunning,
	secondsLeft,
	rounds,
	setActiveRound,
	sessionId
}: TypeUseTimerActions) {
	const { workInterval } = useLoadSettings()
	const { isUpdateRoundPending, updateRound } = useUpdateRound()
	const { updateSession } = useUpdateSession()

	const pauseHandler = () => {
		setIsRunning(false)

		if (sessionId) {
			updateSession({
				id: sessionId,
				data: {
					isRunning: false,
					secondsLeft: secondsLeft,
				}
			})
		}

		if (!activeRound?.id) return

		updateRound({
			id: activeRound?.id,
			data: {
				totalSeconds: secondsLeft,
				isCompleted: Math.floor(secondsLeft / 60) >= workInterval
			}
		})
	}

	const playHandler = () => {
		setIsRunning(true)

		if (sessionId) {
			updateSession({
				id: sessionId,
				data: {
					isRunning: true,
					secondsLeft: secondsLeft,
				}
			})
		}
	}

	const nextRoundHandler = () => {
		if (!activeRound?.id) return

		updateRound({
			id: activeRound?.id,
			data: {
				isCompleted: true,
				totalSeconds: workInterval * 60
			}
		})
	}

	const prevRoundHandler = () => {
		// ES2023
		const lastCompletedRound = rounds?.findLast(round => round.isCompleted)
		if (!lastCompletedRound?.id) return

		updateRound({
			id: lastCompletedRound?.id,
			data: {
				isCompleted: false,
				totalSeconds: 0
			}
		})

		setActiveRound(lastCompletedRound)
	}

	return {
		isUpdateRoundPending,
		pauseHandler,
		playHandler,
		nextRoundHandler,
		prevRoundHandler
	}
}
