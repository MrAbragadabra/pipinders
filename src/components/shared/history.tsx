import Link from 'next/link'
import h1 from '../../../public/img/history/h1.png'
import h10 from '../../../public/img/history/h10.png'
import h11 from '../../../public/img/history/h11.png'
import h12 from '../../../public/img/history/h12.png'
import h13 from '../../../public/img/history/h13.png'
import h14 from '../../../public/img/history/h14.png'
import h15 from '../../../public/img/history/h15.png'
import h16 from '../../../public/img/history/h16.png'
import h17 from '../../../public/img/history/h17.png'
import h18 from '../../../public/img/history/h18.png'
import h19 from '../../../public/img/history/h19.png'
import h2 from '../../../public/img/history/h2.png'
import h3 from '../../../public/img/history/h3.png'
import h4 from '../../../public/img/history/h4.png'
import h5 from '../../../public/img/history/h5.png'
import h6 from '../../../public/img/history/h6.png'
import h7 from '../../../public/img/history/h7.png'
import h8 from '../../../public/img/history/h8.png'
import h9 from '../../../public/img/history/h9.png'
import { ImageWithCaption } from '../ui'

interface Props {
	className?: string
}

export const History: React.FC<Props> = ({ className }) => {
	return (
		<section>
			<div>
				<h1 className='text-white uppercase text-4xl font-bold text-center'>
					История
				</h1>
			</div>
			<div>
				<p className='just-text'>
					Изначально у нас была идея объединения людей в одно маленькое, но
					уютное комьюнити. Для этих целей был арендован хостинг, который
					позволил подключаться к игре в удобное для каждого человека время. Мы
					собрали небольшое количество людей и открыли для себя новый и
					неизведанный мир этой игры.
				</p>
				<p className='just-text'>
					С самого начала начался поиск приятного места для основания домов,
					идея заключалась в том, что все должны быть рядом и контактировать
					друг с другом. После поисков были выбраны небольшие острова,
					разделенные большой рекой:
				</p>

				<ImageWithCaption src={h1} caption='MIKKUT и столб грязи' />

				<p className='just-text'>
					После чего пошёл процесс облагораживания окружающей среды, была
					освобождена большая территория и были построены дома. В процессе
					постройки домов к нам подключались новые игроки, которые тоже начинали
					обустраиваться. Далее представлены примеры построенных домов на
					сервере:
				</p>

				<ImageWithCaption src={h2} caption='Дома с высоты птичьего полёта' />

				<p className='just-text'>
					А теперь поподробнее о каждой территории игроков:
				</p>

				<ImageWithCaption
					src={h3}
					caption='Территория игроков MIKKUT и Armoryx'
				/>

				<p className='just-text'>
					Эту территорию с лёгкостью можно было увидеть благодаря высокой и
					кривой крыше игрока MIKKUT. Когда ты зайдешь на ту территорию, твои
					фпс упадут в ноль, скажем спасибо фермам Armoryx.
				</p>

				<ImageWithCaption
					src={h4}
					caption='Территория игроков Konstantin_mogg и Nurkaev'
				/>

				<p className='just-text'>
					От такого количества коров все пк хотели взлетать в стратосферу, а вид
					на этот дворец… Сразу видно богатых людей, опытных фермеров. (Коровы в
					итоге все сбежали, что повлекло за собой нашествие коров на сервере).
				</p>

				<ImageWithCaption src={h5} caption='Территория игрока MrAbragadabra' />

				<p className='just-text'>
					На этой территории была начата стройка дома, которая шла до конца
					сезона, а также эта территория подверглась МАССОВОЙ вырубке деревьев
					(тут был сто проц лес).
				</p>

				<ImageWithCaption src={h6} caption='Территория игрока Steiden' />

				<p className='just-text'>
					Изначально было самой высокой башней на сервере. Этот огонь виден даже
					если ты в аду.
				</p>

				<ImageWithCaption src={h7} caption='Территория игрока SharkPop' />

				<p className='just-text'>
					На этой территории SharkPop построил дом, но так и не использовал его
					по назначению, но зато с радостью принял надпись SVO перед своим
					выходом!).
				</p>
				<p className='just-text'>
					После того как мы рассмотрели дома игроков, естесно нужно узнать
					игроков поподробнее:
				</p>
				<p className='just-text'>
					MrAbragadabra – Игрок, который был основателем этой территории, именно
					благодаря ему мы видим дома именно здесь. Приложил руку к основым
					событиям на сервере. Ну и самое главное это МОДЕРАТОР, так что его
					нужно уважать и бояться, а то вдруг уххх. Очень многое привнёс в само
					устройство сервера, его правила и законы. Сервер избавил человека от
					дипрашн и подарил надежду.
				</p>
				<p className='just-text'>
					MIKKUT – Игрок, который строил такие невероятные сооружения как: фигня
					с большой крышей (дом), а также строил хайперлуп в нижнем мире
					(кривой). Сделал сортировку фермы мобов (сломал сортировку). Сервер
					также избавил человека от дипрашн и подарил надежду.
				</p>
				<p className='just-text'>
					Armoryx – Игрок, который майн видел лет 100 назад, когда динозавры
					котельникову жрали. Быстро погрузился в игру, познал множество новых
					механик. Построил ферму, которая ломала пк всем игрокам.
				</p>
				<p className='just-text'>
					SharkPop – Игрок, который прославился своим подходом к игре, он играет
					в игру как будто у нас спидран. Начал создание долгостроя, но так и не
					достроил. Смешно помирает.
				</p>
				<p className='just-text'>
					Steiden – Эта легенда настолько много времени проводил в пещерах с
					самого старта сервера, что решил, что солнце это лишняя штука.
					Построил большую башню.
				</p>
				<p className='just-text'>
					Nurkaev – Вместе с Konstantin_mogg застроил большую территорию, и
					развёл настолько большое количество животных, что лаги на их
					территории преследовали до самого конца сезона.
				</p>
				<p className='just-text'>
					Konstantin_mogg – Во время игры на сервере ощутил себя
					землевладельцем, поэтому отстроил большой дворец, а самое главное
					засадил картофанчиком всё и коровами. Ходили слухи, что у него
					существовала секретная дача, которую не могли найти.
				</p>
				<p className='just-text'>
					После знакомства с персонажами первого сезона, перейдём к событиям
					сезона, а также интересным скриншотам:
				</p>

				<ImageWithCaption src={h8} caption='Ферма кур Armoryx' />

				<ImageWithCaption
					src={h9}
					caption='Если ты это читаешь, я люблю тебя :з'
				/>

				<ImageWithCaption src={h10} caption='Без комментариев…' />

				<ImageWithCaption src={h11} caption='Легендарные путешествия' />

				<ImageWithCaption src={h12} caption='«-5 фпс, спасибо за эти фермы»' />

				<ImageWithCaption
					src={h13}
					caption='Иногда так хочется просто сесть и сидеть у костра, не думая ни о
						чём…'
				/>

				<ImageWithCaption
					src={h14}
					caption='Ферма мобов (НАСТОЛЬКО КРИВОЙ МИР ЕЩЁ НЕ ВИДЕЛ)'
				/>

				<ImageWithCaption
					src={h15}
					caption='Если ваша вечеринка не похожа на эту, даже не зовите меня'
				/>

				<ImageWithCaption
					src={h16}
					caption='Ещё один приятный вайбик на фото :з'
				/>

				<ImageWithCaption
					src={h17}
					caption='От этого фото отходит атмосфера горящего пк'
				/>

				<ImageWithCaption
					src={h18}
					caption='Ферма опыта на эндерменах (с кучей жемчуга)'
				/>

				<ImageWithCaption src={h19} caption='Игорь. Просто Игорь…' />

				<p className='just-text'>
					После прочитанного вы можете понять, что наш сервер окружен приятными
					людьми, которые могут смешно шутить (надеемся), а также помогут вам в
					игре. Заходите на сервер и погрузитесь в удивительные истории, которые
					наверняка запомнятся вам надолго. А с вами был ваш любимый автор
					текста Димочка, и помните
				</p>
				<p className='text-white mt-5 text-3xl leading-10 text-center font-black'>
					<Link href='/donate'>ДАЙТЕ ДЕНЯГ</Link>
				</p>
			</div>
		</section>
	)
}
