import { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import Script from 'next/script'

const jetBrains_mono = JetBrains_Mono({
	weight: ['400', '700'],
	subsets: ['cyrillic'],
})

export const metadata: Metadata = {
	title: 'Донат • PIPINDERS',
	openGraph: {
		title: 'Донат • PIPINDERS',
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

export default function Commands() {
	return (
		<section>
			<div>
				<Script
					type='text/javascript'
					async
					defer
					src='https://forms.yandex.ru/_static/embed.js'
				/>
				<h2 className='text-white uppercase text-4xl font-bold text-center'>
					Донат
				</h2>
				<p className='text-justify text-white font-semibold mt-5 text-3xl leading-10'>
					Для работы сервер приходится оплачивать хостинг (ничего себе). Если вы
					хотите помочь работе сервера, то можете оставлять донат в любое время:
				</p>
				<iframe
					className='mt-5 overflow-hidden w-full'
					src='https://forms.yandex.ru/u/66c1bd92068ff0991750247e/?iframe=1'
					name='ya-form-66c1bd92068ff0991750247e'
				></iframe>
			</div>
		</section>
	)
}
