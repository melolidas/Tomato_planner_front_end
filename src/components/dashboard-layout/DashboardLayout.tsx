import { Header } from './header/Header'
import { Sidebar } from './sidebar/Sidebar'
import type { PropsWithChildren } from 'react'

export default function DashboardLayout({
	children
}: PropsWithChildren<unknown>) {
	return (
		<div className='grid min-h-screen 2xl:grid-cols-[1.3fr_6fr] grid-cols-[1.3fr_6fr]'>
			<Sidebar />

			<main className='p-big-layout overflow-x-hidden max-h-screen relative'>
				<Header />
				{children}
			</main>
		</div>
	)
}
