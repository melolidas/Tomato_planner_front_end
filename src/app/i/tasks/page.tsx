import { TasksView } from './TasksView'
import { Heading } from '@/components/ui/Heading'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Tasks',
	...NO_INDEX_PAGE
}

export default function TasksPage() {
	return (
		<div>
			<Heading title='Tasks' />
			<TasksView />
		</div>
	)
}
