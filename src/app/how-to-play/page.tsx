import { Metadata } from 'next'

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
				<p className='text-justify text-white font-semibold mt-5 text-2xl leading-8'>
					Чтобы играть вам надо взять советскую...
				</p>
			</div>
		</section>
	)
}
