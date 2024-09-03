'use client'
import { ArrowUpRight, ClipboardCopy } from 'lucide-react'
import { useState } from 'react'
import { Button } from '../ui/button'

interface Props {
	className?: string
}

export const Home: React.FC<Props> = ({ className }) => {
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
					Pipinders Server
				</h1>
			</div>
			<div className='flex sm:flex-col flex-col-reverse items-center'>
				<div className='order-1'>
					<p className='text-justify text-white font-semibold mt-5 text-3xl leading-10'>
						Наш сервер - уникальный проект, который совмещает в себе ванильное
						выживание, а также взаимодействие между игроками. После того как вы
						попадаете на наш сервер, вы окунаетесь в ламповое и дружелюбное
						комьюнити игроков, которые всегда смогут провести с вами приятный
						вечер за игрой.
					</p>
				</div>

				<div className='order-2 w-full'>
					<div className='flex items-center justify-center mt-5'>
						<Button
							onClick={() => handleCopy('play.pipinders.ru')}
							type='submit'
							className='font-bold text-3xl p-7 bg-teal-700 hover:bg-teal-800 gap-2 sm:w-[355px] w-full'
						>
							Адрес 2 сезона
							<ClipboardCopy color='#ffffff' strokeWidth={2.5} size={28} />
						</Button>
					</div>
					<div className='flex items-center justify-center mt-5'>
						<form
							action='https://forms.yandex.ru/u/66cec1f443f74f2ba636df9a/'
							target='_blank'
							className='flex items-center justify-center w-full'
						>
							<Button
								type='submit'
								className='font-bold text-3xl p-7 bg-teal-700 hover:bg-teal-800 gap-2 sm:w-[355px] w-full'
							>
								Заявка на 2 сезон
								<ArrowUpRight color='#ffffff' strokeWidth={2.5} size={28} />
							</Button>
						</form>
					</div>

					<div className='flex items-center justify-center mt-5'>
						<form
							action='https://t.me/pipinders_news'
							target='_blank'
							className='flex items-center justify-center w-full'
						>
							<Button
								type='submit'
								className='font-bold text-3xl p-7 bg-teal-700 hover:bg-teal-800 gap-2 sm:w-[355px] w-full'
							>
								Наш Telegram
								<ArrowUpRight color='#ffffff' strokeWidth={2.5} size={28} />
							</Button>
						</form>
					</div>
				</div>
			</div>

			{copied && (
				<div
					className={`max-w-[80%] w-max fixed top-20 left-1/2 -translate-x-1/2 bg-teal-950 text-white py-2 px-4 rounded text-xl z-50 std-toast ${
						copied !== null ? 'std-toast--active' : ''
					}`}
				>
					Адрес успешно скопирован!
				</div>
			)}
		</section>
	)
}
