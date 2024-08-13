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
	title: 'Приватный Minecraft сервер • PIPINDERS',
	description:
		'Наш сервер объединяет ванильное выживание и взаимодействие игроков, предлагая уютное и дружелюбное комьюнити, где вы сможете провести приятный вечер за игрой.',
	keywords: [
		'Ванильный Minecraft сервер',
		'Чистый Minecraft',
		'Без модов',
		'Оригинальный игровой опыт',
		'Survival сервер',
		'Приключения в Minecraft',
		'Minecraft сообщество',
		'Minecraft строительные проекты',
		'Выживание в Minecraft',
	],
	openGraph: {
		title: 'Приватный Minecraft сервер • PIPINDERS',
		description:
			'Наш сервер объединяет ванильное выживание и взаимодействие игроков, предлагая уютное и дружелюбное комьюнити, где вы сможете провести приятный вечер за игрой.',
		url: 'https://pipinders.ru',
		images: [
			{
				url: 'https://pipinders.vercel.app/og.png',
				width: 1200,
				height: 630,
			},
		],
	},
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
