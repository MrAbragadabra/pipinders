import Image from 'next/image'
import h1 from '../../../public/history/h1.png'

interface Props {
	className?: string
}

export const History: React.FC<Props> = ({ className }) => {
	return (
		<section>
			<div>
				<h2 className='text-white uppercase text-4xl font-bold text-center'>
					История
				</h2>
			</div>
			<div>
				<p className='text-justify text-white font-semibold mt-5 text-3xl leading-10'>
					С самого появления человечества, люди стремились к творчеству. По сей
					день находят наскальные рисунки и разные статуэтки. В наше время для
					всего этого существуют видеоигры, и в первую очередь MINECRAFT.
					Появление нашего сервера позволило множеству людей раскрыть свои
					спрятанные качества. И сейчас мы расскажем интересный путь становления
					нашего сервера.
				</p>
				<p className='text-justify text-white font-semibold mt-5 text-3xl leading-10'>
					Изначально у нас была идея объединения людей в одно маленькое, но
					уютное комьюнити. Для этих целей был арендован хостинг, который
					позволил подключаться к игре в удобное для каждого человека время. Мы
					собрали небольшое количество людей и открыли для себя новый и
					неизведанный мир этой игры.
				</p>
				<p className='text-justify text-white font-semibold mt-5 text-3xl leading-10'>
					С самого начала начался поиск приятного места для основания домов,
					идея заключалась в том, что все должны быть рядом и контактировать
					друг с другом. После поисков были выбраны небольшие острова,
					разделенные большой рекой:
				</p>
				<div className='flex-col items-center mt-5'>
					<Image
						className='m-auto'
						src={h1}
						alt='Игрок MIKKUT проник на территорию MrAbragadabra'
						height={h1.height}
						width={h1.width}
						sizes='85vw'
						style={{
							width: '85%',
							height: 'auto',
						}}
						quality={90}
						draggable='false'
					/>
				</div>
			</div>
		</section>
	)
}
