'use client'
import { cn } from '@/lib/utils'
import { JetBrains_Mono } from 'next/font/google'
import { useState } from 'react'

const jetBrains_mono = JetBrains_Mono({
	weight: ['400', '700'],
	subsets: ['cyrillic'],
})

interface Props {
	className?: string
}

export const Commands: React.FC<Props> = ({ className }) => {
	const [copied, setCopied] = useState<string | null>(null)

	const handleCopy = (command: string) => {
		navigator.clipboard.writeText(command).then(() => {
			setCopied(command)
			setTimeout(() => setCopied(null), 2000)
		})
	}

	return (
		<section>
			<div>
				<h1 className='text-white uppercase text-4xl font-bold text-center'>
					Команды
				</h1>
			</div>
			<div>
				<ul className='lg:px-20 px-10 list-disc text-white font-semibold mt-5 text-3xl'>
					<li className='mb-5 text-left leading-10'>
						<span
							onClick={() => handleCopy('/bellyflop')}
							className={cn(
								jetBrains_mono.className,
								'highlighting select-none cursor-pointer'
							)}
						>
							/bellyflop
						</span>{' '}
						- ваш игрок плюхнится на живот и вы будете лежать (ого)
					</li>
					<li className='mb-5 text-left leading-10'>
						<span
							onClick={() => handleCopy('/crawl')}
							className={cn(
								jetBrains_mono.className,
								'highlighting select-none cursor-pointer'
							)}
						>
							/crawl
						</span>{' '}
						- позволяет ползать и более пристально наблюдать за землёй
					</li>
					<li className='mb-5 text-left leading-10'>
						<span
							onClick={() => handleCopy('/lay')}
							className={cn(
								jetBrains_mono.className,
								'highlighting select-none cursor-pointer'
							)}
						>
							/lay
						</span>{' '}
						- вы ляжете, а это как бы одна из самых сложных поз в йоге
					</li>
					<li className='mb-5 text-left leading-10'>
						<span
							className={cn(
								jetBrains_mono.className,
								'highlighting select-none cursor-pointer'
							)}
						>
							/sit
						</span>{' '}
						- вы сядите
					</li>
					<li className='mb-5 text-left leading-10'>
						<span
							onClick={() => handleCopy('/spin')}
							className={cn(
								jetBrains_mono.className,
								'highlighting select-none cursor-pointer'
							)}
						>
							/spin
						</span>{' '}
						- вас сильно закрутит, что вам захочется послушать Around The World
					</li>
					<li className='mb-5 text-left leading-10'>
						<span
							onClick={() => handleCopy('/me привет!')}
							className={cn(
								jetBrains_mono.className,
								'highlighting select-none cursor-pointer'
							)}
						>
							/me &lt;сообщение&gt;
						</span>{' '}
						- позволит вам сказать всем, как вы всех любите
					</li>
					<li className='mb-5 text-left leading-10'>
						<span
							onClick={() => handleCopy('/msg MrAbragadabra привет!')}
							className={cn(
								jetBrains_mono.className,
								'highlighting select-none cursor-pointer'
							)}
						>
							/msg &lt;ник игрока&gt; &lt;сообщение&gt;
						</span>{' '}
						- поможет вам прошептать игроку на сколько он хороший человек
					</li>
					<li className='mb-5 text-left leading-10'>
						<span
							onClick={() => handleCopy('/skin set notch')}
							className={cn(
								jetBrains_mono.className,
								'highlighting select-none cursor-pointer'
							)}
						>
							/skin set &lt;ник игрока&gt;
						</span>{' '}
						- вы можете поменять скин на скин существующего игрока, например{' '}
						<span
							className={cn(
								jetBrains_mono.className,
								'highlighting select-none cursor-pointer'
							)}
						>
							notch
						</span>
					</li>
					<li className='mb-5 text-left leading-10'>
						<span
							onClick={() => handleCopy('/skin update')}
							className={cn(
								jetBrains_mono.className,
								'highlighting select-none cursor-pointer'
							)}
						>
							/skin update
						</span>{' '}
						- вы обновите свой скин, если он не установился сразу
					</li>
					<li className='mb-5 text-left leading-10'>
						<span
							onClick={() =>
								handleCopy(
									'/skin url https://s.namemc.com/i/c928f3b2fc46087e.png'
								)
							}
							className={cn(
								jetBrains_mono.className,
								'highlighting select-none cursor-pointer'
							)}
						>
							/skin url &lt;ссылка на скин&gt;
						</span>{' '}
						- поможет вам сделать скин из своей развертки скин в png. Вам нужно
						предоставить прямую ссылку на png файл из интернета. Для этого можно
						использовать imgur или github
					</li>
					<li className='mb-5 text-left leading-10'>
						<span
							onClick={() => handleCopy('/skin clear')}
							className={cn(
								jetBrains_mono.className,
								'highlighting select-none cursor-pointer'
							)}
						>
							/skin clear
						</span>{' '}
						- сбрасывает ваш скин до исходного состояния
					</li>
					<li className='mb-5 text-left leading-10'>
						<span
							onClick={() => handleCopy('/skin undo')}
							className={cn(
								jetBrains_mono.className,
								'highlighting select-none cursor-pointer'
							)}
						>
							/skin undo
						</span>{' '}
						- возврат предыдущего скина
					</li>
					<li className='mb-5 text-left leading-10'>
						<span
							onClick={() => handleCopy('/afk')}
							className={cn(
								jetBrains_mono.className,
								'highlighting select-none cursor-pointer'
							)}
						>
							/afk
						</span>{' '}
						- сообщит всем игрокам в чате о том, что вы AFK (команду вызывать
						можно раз в 10 секунд)
					</li>
					<li className='mb-5 text-left leading-10'>
						<span
							onClick={() => handleCopy('/comeback')}
							className={cn(
								jetBrains_mono.className,
								'highlighting select-none cursor-pointer'
							)}
						>
							/comeback
						</span>{' '}
						- сообщит всем игрокам в чате о том, что вы больше не AFK (команду
						вызывать можно раз в 10 секунд)
					</li>
					<li className='mb-5 text-left leading-10'>
						<span
							onClick={() => handleCopy('/geo')}
							className={cn(
								jetBrains_mono.className,
								'highlighting select-none cursor-pointer'
							)}
						>
							/geo
						</span>{' '}
						- сообщит всем игрокам ваше текущее местоположение по координатам (XYZ)
					</li>
				</ul>
			</div>
			{copied && (
				<div
					className={`max-w-[80%] w-max fixed top-20 left-1/2 -translate-x-1/2 bg-teal-950 text-white py-2 px-4 rounded text-xl z-50 std-toast ${
						copied !== null ? 'std-toast--active' : ''
					}`}
				>
					Команда скопирована!
				</div>
			)}
		</section>
	)
}
