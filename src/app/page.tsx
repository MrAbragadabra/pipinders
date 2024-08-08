'use client'

import { Button } from '@/components/ui'

export default function Home() {
	return (
		<section>
			<div>
				<h2 className='text-white uppercase text-4xl font-bold text-center'>
					Pipinders Server
				</h2>
			</div>
			<div>
				<p className='text-justify text-white font-semibold mt-5 text-2xl leading-8'>
					Наш сервер - уникальный проект, который совмещает в себе ванильное
					выживание, а также взаимодействие между игроками. После того как вы
					попадаете на наш сервер, вы окунаетесь в ламповое и дружелюбное
					комьюнити игроков, которые всегда смогут провести с вами приятный
					вечер за игрой.
				</p>
				<div className='flex items-center justify-center mt-5'>
					<form
						action='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
						target='_blank'
					>
						<Button
							type='submit'
							className='font-bold text-xl p-6 bg-lime-700 hover:bg-lime-800'
						>
							Оставить заявку
						</Button>
					</form>
				</div>
			</div>
		</section>
	)
}
