import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'История | Pipinders Server',
	description: 'Небольшой рассказ про историю сервера',
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
				<p className='text-white font-semibold mt-5 text-xl leading-8'>
					Тут очень большая история сервера, которую можно будет написать вот так вот и вот да
				</p>
			</div>
		</section>
	)
}