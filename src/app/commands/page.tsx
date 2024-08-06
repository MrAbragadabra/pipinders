import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Команды | Pipinders Server',
	description: 'Команды, которые можно использовать на сервере',
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
				<p className='text-white font-semibold mt-5 text-xl leading-8'>
					На сервер есть несколько команд: много команд, спасибо
				</p>
			</div>
		</section>
	)
}
