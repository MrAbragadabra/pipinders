import { Header } from '@/components/shared'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'

const nunito = Nunito({
	subsets: ['cyrillic'],
	variable: '--font-nunito',
	weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
	title: 'Pipinders Server',
	description:
		'Наш сервер - уникальный проект, который совмещает в себе ванильное выживание, а также взаимодействие между игроками. После того как вы попадаете на наш сервер, вы окунаетесь в ламповое и дружелюбное комьюнити игроков, которые всегда смогут провести с вами приятный вечер за игрой.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body
				className={cn(
					nunito.className,
					'bg-gradient-to-tl from-lime-500 to-lime-700 min-h-screen overflow-x-hidden'
				)}
			>
				<Header />
				<main className='xl:px-20 px-5 mt-16 mb-16 relative'>{children}</main>
			</body>
		</html>
	)
}
