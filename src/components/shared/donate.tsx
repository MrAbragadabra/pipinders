import { JetBrains_Mono } from 'next/font/google'
import Script from 'next/script'

const jetBrains_mono = JetBrains_Mono({
	weight: ['400', '700'],
	subsets: ['cyrillic'],
})

interface Props {
	className?: string
}

export const Donate: React.FC<Props> = ({ className }) => {
	return (
		<section>
			<div>
				<Script
					type='text/javascript'
					async
					defer
					src='https://forms.yandex.ru/_static/embed.js'
				/>
				<h1 className='text-white uppercase text-4xl font-bold text-center'>
					Донат
				</h1>
				<p className='text-justify text-white font-semibold mt-5 text-3xl leading-10'>
					Для работы сервера приходится оплачивать хостинг (ничего себе). Если
					вы хотите помочь работе сервера, то можете оставлять донат в любое
					время (все деньги 100% идут только на оплату хостинга):
				</p>
				<iframe
					className='mt-5 overflow-hidden w-full'
					src='https://forms.yandex.ru/u/66c1bd92068ff0991750247e/?iframe=1'
					name='ya-form-66c1bd92068ff0991750247e'
				></iframe>
			</div>
		</section>
	)
}
