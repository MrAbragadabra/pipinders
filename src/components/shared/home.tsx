'use client'

import { useState } from 'react'

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
			<div>
				<p className='text-justify text-white font-semibold mt-5 text-3xl leading-10'>
					Наш сервер - уникальный проект, который совмещает в себе ванильное
					выживание, а также взаимодействие между игроками. После того как вы
					попадаете на наш сервер, вы окунаетесь в ламповое и дружелюбное
					комьюнити игроков, которые всегда смогут провести с вами приятный
					вечер за игрой.
				</p>
				<p className='text-center text-white font-semibold mt-5 text-3xl leading-10 '>
					<span className='font-black'>28.08.2024</span> - начало приёма заявок
					и прощание с 1 сезоном
				</p>
				<p className='text-center text-white font-semibold mt-5 text-3xl leading-10'>
					<span className='font-black'>02.09.2024</span> - закрытие 1 сезона
				</p>
				<p className='text-center text-white font-semibold mt-5 text-3xl leading-10'>
					<span className='font-black'>03.09.2024</span> - открытие 2 сезона
				</p>
				<p className='text-center text-white font-semibold mt-5 text-3xl leading-10'>
					Адрес для подключения:
				</p>
				<p className='text-center text-white font-semibold mt-5 text-3xl leading-10'>
					<span className='bg-lime-800 p-1 rounded-sm tracking-widest font-black cursor-pointer select-none' onClick={() => handleCopy('play.pipinders.ru')}>
						play.pipinders.ru
					</span>
				</p>
				{/* <div className='flex items-center justify-center mt-5'>
					<form
						action='https://forms.yandex.ru/u/66b34efa3e9d080517e62485/'
						target='_blank'
					>
						<Button
							type='submit'
							className='font-bold text-3xl p-7 bg-lime-700 hover:bg-lime-800 gap-2'
						>
							Оставить заявку
							<ArrowUpRight color='#ffffff' strokeWidth={2.5} size={28} />
						</Button>
					</form>
				</div> */}
			</div>
			{copied && (
				<div
					className={`fixed top-20 left-1/2 -translate-x-1/2 bg-lime-900 text-white py-2 px-4 rounded text-xl z-50 std-toast ${
						copied !== null ? 'std-toast--active' : ''
					}`}
				>
					Адрес успешно скопирован!
				</div>
			)}
		</section>
	)
}
