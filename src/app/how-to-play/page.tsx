import { ArrowUpRight } from 'lucide-react'
import { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import Link from 'next/link'

const jetBrains_mono = JetBrains_Mono({
	weight: ['400', '700'],
	subsets: ['cyrillic'],
})

export const metadata: Metadata = {
	title: 'Как играть? • PIPINDERS',
	openGraph: {
		title: 'Как играть? • PIPINDERS',
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

export default function Skins() {
	return (
		<section>
			<div>
				<h2 className='text-white uppercase text-4xl font-bold text-center'>
					Как играть?
				</h2>
			</div>
			<div>
				<ul className='lg:px-20 px-10 list-decimal text-white font-semibold mt-5 text-3xl'>
					<li className='mb-5 text-left leading-10'>
						Чтобы начать играть на сервере, вам нужно оставить заявку на
						участие.
					</li>
					<li className='mb-5 text-left leading-10'>
						После того, как вы получили письмо, с тем, что вас приняли на
						сервер, мы рекомендуем установить{' '}
						<Link
							href='https://lln4.ru/ru'
							target='_blank'
							className='underline hover:no-underline'
						>
							Legacy Launcher.
						</Link>{' '}
						Данный лаунчер с открытым исходным кодом и у него есть рабочая система скинов, благодаря которой вы сможете менять скин с помощью <Link className='underline hover:no-underline' href='/commands'>простых команд</Link> не выходя с сервера!
					</li>
					<li className='mb-5 text-left leading-10'></li>
					<li className='mb-5 text-left leading-10'></li>
					<li className='mb-5 text-left leading-10'></li>
				</ul>
			</div>
		</section>
	)
}
