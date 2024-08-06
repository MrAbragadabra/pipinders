import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Правила | Pipinders Server',
	description: 'Минимальный набор правил Pipinders Server, чтобы всем было хорошо на сервере',
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
				<p className='text-white font-semibold mt-5 text-xl leading-8'>
					Здесь будет небольшой текст правил
				</p>
			</div>
		</section>
	)
}