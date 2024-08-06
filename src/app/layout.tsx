import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/shared'

const nunito = Nunito({
	subsets: ['cyrillic'],
	variable: '--font-nunito',
	weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
	title: 'Pipinders Server',
	description: 'Уютный майнкрафт сервер, доступный каждому.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body className={cn(nunito.className, 'bg-gradient-to-tr from-slate-900 to-pink-500 min-h-screen overflow-x-hidden')}>
        <Header/>
				<main className='px-20 mt-16 mb-16 relative'>{children}</main>
			</body>
		</html>
	)
}
