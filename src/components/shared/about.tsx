interface Props {
	className?: string
}

export const About: React.FC<Props> = ({ className }) => {
	return (
		<section>
			<div className='xl:text-[50px] text-[40px] leading-10 pt-10'>
				<p className='text-center text-white mb-10 leading-10 font-bold'>
					PIPINDERS представляет
				</p>
				<p className='text-center text-white mb-10 font-bold mt-5 leading-10'>
					2 сезон сериала &laquo;ДИПРАШН ДМИТРИЯ&raquo;
				</p>
				<p className='text-center text-white mb-10 font-bold mt-5 leading-10'>
					Режиссёры:{' '}
					<span className='text-lime-900 font-black'>
						MrAbragadabra, MIKKUT
					</span>
				</p>
				<p className='text-center text-white mb-10 font-bold mt-5 leading-10'>
					Продюсеры:{' '}
					<span className='text-lime-900 font-black'>
						MrAbragadabra, MIKKUT
					</span>
				</p>
				<p className='text-center text-white mb-10 font-bold mt-5 leading-10'>
					Авторы сценария:{' '}
					<span className='text-lime-900 font-black'>
						MrAbragadabra, MIKKUT
					</span>
				</p>
				<p className='text-center text-white mb-10 font-bold mt-5 leading-10'>
					Художник-декоратор:{' '}
					<span className='text-lime-900 font-black'>Steiden</span>
				</p>
				<p className='text-center text-white mb-[60px] font-bold mt-5 leading-10'>
					Специалист по спецэффектам:{' '}
					<span className='text-lime-900 font-black'>Steiden</span>
				</p>
				<p className='text-center text-white mb-[60px] font-bold mt-5 leading-10'>
					Технический директор:{' '}
					<span className='text-lime-900 font-black'>MrAbragadabra</span>
				</p>
				<p className='text-center text-white mb-[60px] font-bold mt-5 leading-10'>
					Главный редактор:{' '}
					<span className='text-lime-900 font-black'>MIKKUT</span>
				</p>
				<p className='text-center text-white mb-[60px] font-bold mt-5 leading-10'>
					MrAbragadabra:{' '}
					<span className='text-lime-900 font-black'>Тот самый подрядчик</span>
				</p>
				<p className='text-center text-white mb-[60px] font-bold mt-5 leading-10'>
					MIKKUT:{' '}
					<span className='text-lime-900 font-black'>
						Крышесносный строитель
					</span>
				</p>
				<p className='text-center text-white mb-[60px] font-bold mt-5 leading-10'>
					Steiden:{' '}
					<span className='text-lime-900 font-black'>
						Шахтёр &#8734; уровня
					</span>
				</p>
				<p className='text-center text-white mb-[60px] font-bold mt-5 leading-10'>
					Armoryx:{' '}
					<span className='text-lime-900 font-black'>Владелец концлагеря</span>
				</p>
				<p className='text-center text-white mb-[60px] font-bold mt-5 leading-10'>
					SharkPop: <span className='text-lime-900 font-black'>Спидранер</span>
				</p>
				<p className='text-center text-white mb-[60px] font-bold mt-5 leading-10'>
					Nurkaev: <span className='text-lime-900 font-black'>Дачник</span>
				</p>
				<p className='text-center text-white mb-[60px] font-bold mt-5 leading-10'>
					Konstantin_mogg:{' '}
					<span className='text-lime-900 font-black'>Говяжий магнат</span>
				</p>
			</div>
		</section>
	)
}
