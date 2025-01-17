import dayjs from 'dayjs'
import type { Formatters } from 'react-day-picker'

const seasonEmoji: Record<string, string> = {
	winter: '⛄️',
	spring: '🌸',
	summer: '🌻',
	autumn: '🍂'
}
const getSeason = (month: Date): keyof typeof seasonEmoji => {
	const monthNumber = month.getMonth() + 1
	if (monthNumber > 2 && monthNumber < 6) return 'spring' // Весна
	if (monthNumber > 5 && monthNumber < 9) return 'summer' // Лето
	if (monthNumber > 8 && monthNumber < 12) return 'autumn' // Осень
	return 'winter' // Зима
}
export const formatCaption: Formatters['formatCaption'] = month => {
	const season = getSeason(month)
	return `${seasonEmoji[season]} ${dayjs(month).format('MMMM')}`
}
