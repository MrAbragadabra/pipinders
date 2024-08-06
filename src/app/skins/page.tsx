import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Скины | Pipinders Server',
	description: 'Инструкция по настройке лаунчера для скинов.',
}


export default function Skins() {
	return (
		<section>
			<div>
				<h2 className='text-white uppercase text-4xl font-bold text-center'>
					Скины
				</h2>
			</div>
			<div>
				<p className='text-white font-semibold mt-5 text-xl leading-8'>
					Чтобы на сервер нормально отображились скины игроков нужно всего лишь взять соду пищевую...
				</p>
			</div>
		</section>
	)
}