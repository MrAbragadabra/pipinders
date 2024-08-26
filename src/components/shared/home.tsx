import { Button } from '@/components/ui'
import { ArrowUpRight } from 'lucide-react'

interface Props {
	className?: string
}

export const Home: React.FC<Props> = ({ className }) => {
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
					<span className='font-black'>28.08.2024</span> - начало приёма заявок и
					прощание с 1 сезоном
				</p>
				<p className='text-center text-white font-semibold mt-5 text-3xl leading-10'>
					<span className='font-black'>02.09.2024</span> - закрытие 1 сезона
				</p>
				<p className='text-center text-white font-semibold mt-5 text-3xl leading-10'>
					<span className='font-black'>03.09.2024</span> - открытие 2 сезона
				</p>
				<div className='flex items-center justify-center mt-5'>
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
				</div>
			</div>
		</section>
	)
}
