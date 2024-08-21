import Image from 'next/image'
import h1 from '../../../public/history/h1.png'
import h2 from '../../../public/history/h2.png'
import h3 from '../../../public/history/h3.png'
import h4 from '../../../public/history/h4.png'
import h5 from '../../../public/history/h5.png'
import h6 from '../../../public/history/h6.png'
import h7 from '../../../public/history/h7.png'
import h8 from '../../../public/history/h8.png'
import h9 from '../../../public/history/h9.png'
import h10 from '../../../public/history/h10.png'
import h11 from '../../../public/history/h11.png'
import h12 from '../../../public/history/h12.png'
import h13 from '../../../public/history/h13.png'
import h14 from '../../../public/history/h14.png'
import h15 from '../../../public/history/h15.png'
import h16 from '../../../public/history/h16.png'
import h17 from '../../../public/history/h17.png'
import h18 from '../../../public/history/h18.png'
import h119 from '../../../public/history/h19.png'

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
				<div className='flex-col items-center my-5'>
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
				<p className='text-justify text-white font-semibold mt-5 text-3xl leading-10'>
					После чего пошёл процесс облагораживания окружающей среды, была
					освобождена большая территория и были построены дома. В процессе
					постройки домов к нам подключались новые игроки, которые тоже начинали
					обустраиваться. Далее представлены примеры построенных домов на
					сервере:
				</p>
				<div className='flex-col items-center my-5'>
					<Image
						className='m-auto'
						src={h2}
						alt='Дома с высоты птичьего полёта (в майнкрафте ведь нет птичек, которые так высоко летают?)'
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
					<p className='text-center mt-2 text-white text-2xl'>
						Дома с высоты птичьего полёта
					</p>
				</div>
				<p className='text-justify text-white font-semibold mt-5 text-3xl leading-10'>
					А теперь поподробнее о каждой территории игроков:
				</p>
				<div className='flex-col items-center my-5'>
					<Image
						className='m-auto'
						src={h3}
						alt='Территория игроков MIKKUT и Armoryx'
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
					<p className='text-center mt-2 text-white text-2xl'>
					Территория игроков MIKKUT и Armoryx
					</p>
				</div>
				<p className='text-justify text-white font-semibold mt-5 text-3xl leading-10'>
				Эту территорию с лёгкостью можно было увидеть благодаря высокой и кривой крыше игрока MIKKUT. Когда ты зайдешь на ту территорию, твои фпс упадут в ноль, скажем спасибо фермам Armoryx.
				</p>
				<div className='flex-col items-center my-5'>
					<Image
						className='m-auto'
						src={h4}
						alt='Территория игроков Konstantin_mogg и Nurkaev'
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
					<p className='text-center mt-2 text-white text-2xl'>
					Территория игроков  Konstantin_mogg и Nurkaev
					</p>
				</div>
				<p className='text-justify text-white font-semibold mt-5 text-3xl leading-10'>
				От такого количества коров все пк хотели взлетать в стратосферу, а вид на этот дворец… Сразу видно богатых людей, опытных фермеров. (Коровы в итоге все сбежали, что повлекло за собой нашествие коров на сервере).
				</p>
			</div>
		</section>
	)
}
