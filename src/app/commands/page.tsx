import { cn } from '@/lib/utils'
import { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'

const jetBrains_mono = JetBrains_Mono({
	weight: ['400', '700'],
	subsets: ['cyrillic'],
})

export const metadata: Metadata = {
	title: 'Команды сервера • PIPINDERS',
	openGraph: {
		title: 'Команды сервера • PIPINDERS',
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
				<h2 className='text-white uppercase text-4xl font-bold text-center'>
					Команды
				</h2>
			</div>
			<div>
				<ul className='lg:px-20 px-10 list-disc text-white font-semibold mt-5 text-3xl'>
					<li className='mb-5 text-left leading-10'>
						<span
							className={cn(
								jetBrains_mono.className,
								'bg-lime-800 p-1 rounded-sm tracking-widest'
							)}
						>
							/bellyflop
						</span>{' '}
						- команда позволяет вашему игроку плюхнуться на живот
					</li>
					<li className='mb-5 text-left leading-10'>
						<span
							className={cn(
								jetBrains_mono.className,
								'bg-lime-800 p-1 rounded-sm tracking-widest'
							)}
						>
							/crawl
						</span>{' '}
						- команда позволяет вам поползать
					</li>
					<li className='mb-5 text-left leading-10'>
						<span
							className={cn(
								jetBrains_mono.className,
								'bg-lime-800 p-1 rounded-sm tracking-widest'
							)}
						>
							/lay
						</span>{' '}
						- команда вас положит на спину
					</li>
					<li className='mb-5 text-left leading-10'>
						<span
							className={cn(
								jetBrains_mono.className,
								'bg-lime-800 p-1 rounded-sm tracking-widest'
							)}
						>
							/sit
						</span>{' '}
						- команда заставит вас сесть на что угодно (почти)
					</li>
					<li className='mb-5 text-left leading-10'>
						<span
							className={cn(
								jetBrains_mono.className,
								'bg-lime-800 p-1 rounded-sm tracking-widest'
							)}
						>
							/spin
						</span>{' '}
						- команда вас сильно закрутит, что вам захочется послушать Around
						The World
					</li>
					<li className='mb-5 text-left leading-10'>
						<span
							className={cn(
								jetBrains_mono.className,
								'bg-lime-800 p-1 rounded-sm tracking-widest'
							)}
						>
							/me &lt;сообщение&gt;
						</span>{' '}
						- команда позволит вам сказать всем, как вы всех любите
					</li>
					<li className='mb-5 text-left leading-10'>
						<span
							className={cn(
								jetBrains_mono.className,
								'bg-lime-800 p-1 rounded-sm tracking-widest'
							)}
						>
							/msg &lt;ник игрока&gt; &lt;сообщение&gt;
						</span>{' '}
						- команда которая поможет вам прошептать игроку на сколько он
						хороший человек
					</li>
					<li className='mb-5 text-left leading-10'>
						<span
							className={cn(
								jetBrains_mono.className,
								'bg-lime-800 p-1 rounded-sm tracking-widest'
							)}
						>
							/skin set &lt;ник игрока&gt;
						</span>{' '}
						- с помощью этой команды вы можете поменять скин на скин
						существующего игрока, например{' '}
						<span
							className={cn(
								jetBrains_mono.className,
								'bg-lime-800 p-1 rounded-sm tracking-widest'
							)}
						>
							notch
						</span>
					</li>
					<li className='mb-5 text-left leading-10'>
						<span
							className={cn(
								jetBrains_mono.className,
								'bg-lime-800 p-1 rounded-sm tracking-widest'
							)}
						>
							/skin update
						</span>{' '}
						- с помощью этой команды вы обновите свой скин, если он не
						установился сразу
					</li>
					<li className='mb-5 text-left leading-10'>
						<span
							className={cn(
								jetBrains_mono.className,
								'bg-lime-800 p-1 rounded-sm tracking-widest'
							)}
						>
							/skin url &lt;ссылка на скин&gt;
						</span>{' '}
						- данная команда помогает вам сделать скин из своей развертки скин в
						png. Вам нужно предоставить прямую ссылку на png файл из интернета.
						Для этого можно использовать imgur или github
					</li>
					<li className='mb-5 text-left leading-10'>
						<span
							className={cn(
								jetBrains_mono.className,
								'bg-lime-800 p-1 rounded-sm tracking-widest'
							)}
						>
							/skin clear
						</span>{' '}
						- команда сбрасывает ваш скин до исходного
					</li>
					<li className='mb-5 text-left leading-10'>
						<span
							className={cn(
								jetBrains_mono.className,
								'bg-lime-800 p-1 rounded-sm tracking-widest'
							)}
						>
							/skin undo
						</span>{' '}
						- возврат предыдущего скина
					</li>
				</ul>
			</div>
		</section>
	)
}
