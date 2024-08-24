import { About } from '@/components/shared'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'О нас • PIPINDERS',
	openGraph: {
		title: 'О нас • PIPINDERS',
		description:
			'Наш сервер объединяет ванильное выживание и взаимодействие игроков, предлагая уютное и дружелюбное комьюнити, где вы сможете провести приятный вечер за игрой.',
		url: 'https://pipinders.ru',
		images: [
			{
				url: 'https://pipinders.ru/og.png',
				width: 1200,
				height: 630,
			},
		],
	},
	robots: {
		index: false,
		follow: false,
	},
}

export default function AboutPage() {
	return <About />
}
