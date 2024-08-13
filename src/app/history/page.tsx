import { Metadata } from 'next'
import Image from 'next/image'
import History1 from '../../../public/history/history1.png'
import History2 from '../../../public/history/history2.png'
import History3 from '../../../public/history/history3.png'
import History4 from '../../../public/history/history4.png'
import History5 from '../../../public/history/history5.png'

export const metadata: Metadata = {
	title: 'История сервера • PIPINDERS',
	openGraph: {
		title: 'История сервера • PIPINDERS',
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

export default function History() {
	return (
		<section>
			<div>
				<h2 className='text-white uppercase text-4xl font-bold text-center'>
					История
				</h2>
			</div>
			<div>
				<Image
					className='py-5'
					alt='history1'
					src={History1}
					width={1920}
					height={1080}
					sizes='80vw'
					style={{
						width: '80%',
						height: 'auto',
						margin: '0 auto',
					}}
					draggable='false'
					quality={100}
				/>

				<Image
					className='pb-5'
					alt='history2'
					src={History2}
					width={1920}
					height={1080}
					sizes='80vw'
					style={{
						width: '80%',
						height: 'auto',
						margin: '0 auto',
					}}
					draggable='false'
					quality={100}
				/>

				<Image
					className='pb-5'
					alt='history3'
					src={History3}
					width={1920}
					height={1080}
					sizes='80vw'
					style={{
						width: '80%',
						height: 'auto',
						margin: '0 auto',
					}}
					draggable='false'
					quality={100}
				/>

				<Image
					className='pb-5'
					alt='history4'
					src={History4}
					width={1920}
					height={1080}
					sizes='80vw'
					style={{
						width: '80%',
						height: 'auto',
						margin: '0 auto',
					}}
					draggable='false'
					quality={100}
				/>

				<Image
					className='pb-5'
					alt='history5'
					src={History5}
					width={1920}
					height={1080}
					sizes='80vw'
					style={{
						width: '80%',
						height: 'auto',
						margin: '0 auto',
					}}
					draggable='false'
					quality={100}
				/>
			</div>
		</section>
	)
}
