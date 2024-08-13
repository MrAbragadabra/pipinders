import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Правила сервера • PIPINDERS',
	openGraph: {
		title: 'Правила сервера • PIPINDERS',
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

export default function Rules() {
	return (
		<section>
			<div>
				<h2 className='text-white uppercase text-4xl font-bold text-center'>
					Правила
				</h2>
			</div>
			<div>
				<ul className='lg:px-20 px-10 list-decimal text-white font-semibold mt-5 text-3xl'>
					<li className='mb-5 text-left leading-10'>Не гриферить.</li>
					<li className='mb-5 text-left leading-10'>
						Не убивать кого-либо для какой-то выгоды.
					</li>
					<li className='mb-5 text-left leading-10'>
						Не нарушать законы Российской Федерации.
					</li>
					<li className='mb-5 text-left leading-10'>
						Лаг машины категорически запрещены.
					</li>
					<li className='mb-5 text-left leading-10'>
						Большие и нагружающие сервер фермы обсуждать с админом.
					</li>
				</ul>
			</div>
		</section>
	)
}
