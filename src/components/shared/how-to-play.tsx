import Image from 'next/image'
import Link from 'next/link'
import how1 from '../../../public/img/how/how1.png'
import how2 from '../../../public/img/how/how2.png'
import how3 from '../../../public/img/how/how3.png'
import how4 from '../../../public/img/how/how4.png'
import how5 from '../../../public/img/how/how5.png'

interface Props {
	className?: string
}

export const HowToPlay: React.FC<Props> = ({ className }) => {
	return (
		<section>
			<div>
				<h1 className='text-white uppercase text-4xl font-bold text-center'>
					Как играть?
				</h1>
			</div>
			<div>
				<p className='text-justify text-white font-semibold mt-5 text-3xl leading-10'>
					Для игры на нашем сервере майнкрафт мы рекомендуем использовать
					LegacyLauncher, так как в нём есть встроенная система скинов.
					Благодаря этой системе + плагина на сервере можно менять скины на
					ходу.
				</p>
				<ul className='lg:px-20 px-10 list-decimal text-white font-semibold mt-5 text-3xl'>
					<li className='mb-5 text-left leading-10'>
						Скачайте{' '}
						<Link
							className='underline hover:no-underline'
							href='https://disk.yandex.ru/d/FsnXNe_eWWSGWw'
							target='_blank'
						>
							Legacy Launcher.
						</Link>
					</li>
					<li className='mb-5 text-left leading-10'>
						Запустите <span className='highlighting'>Launcher.exe</span> и
						установите куда вам удобно.
					</li>
					<li className='mb-5 text-left leading-10'>
						Далее вам надо создать аккаунт на{' '}
						<Link
							className='underline hover:no-underline'
							href='https://ely.by'
							target='_blank'
						>
							ely.by
						</Link>{' '}
						(бесплатная система скинов). ВНИМАНИЕ! Регистрируйте ник на сайте
						такой, который вы указали в заявке, либо сначала настройте всё для
						игры, а потом отправляйте заявку (чтобы не создавать лишние заботы
						для админа, спасибо :3).
					</li>
					<li className='mb-5 text-left leading-10'>
						После регистрации на ely.by откройте установленный Legacy Launcher.
					</li>
					<li className='mb-5 text-left leading-10'>
						После открытия вам надо нажать на три полоски, далее{' '}
						<span className='highlighting'>Настройка лаунчера и игры:</span>
						<figure className='flex-col items-center my-5'>
							<Image
								className='m-auto'
								src={how1}
								alt='скриншот'
								height={how1.height}
								width={how1.width}
								sizes='100vw'
								style={{
									width: '100%',
									height: 'auto',
								}}
								quality={100}
								draggable='false'
							/>
						</figure>
					</li>
					<li className='mb-5 text-left leading-10'>
						В настройках на вкладке Minecraft меняем 3 пукнта (указаны
						стрелками). На первой стрелке меняем на{' '}
						<span className='highlighting'>
							отдельная папка для каждой версии
						</span>
						. На втрой стрелке выставляем нужное для вас количество оперативной
						памяти. На третьей стрелке убираем галочку с{' '}
						<span className='highlighting'>Автодобавление серверов.</span>
						НЕ ЗАБУДЬТЕ НАЖАТЬ КНОПКУ СОХРАНИТЬ!!!
						<figure className='flex-col items-center my-5'>
							<Image
								className='m-auto'
								src={how2}
								alt='скриншот'
								height={how2.height}
								width={how2.width}
								sizes='100vw'
								style={{
									width: '100%',
									height: 'auto',
								}}
								quality={100}
								draggable='false'
							/>
						</figure>
					</li>
					<li className='mb-5 text-left leading-10'>
						Далее приступим к подключению аккаунта ely.by. Переходим обратно на
						главную страницу и в списке аккаунтов нажимаем на{' '}
						<span className='highlighting'>настроить аккаунты:</span>
						<figure className='flex-col items-center my-5'>
							<Image
								className='m-auto'
								src={how3}
								alt='скриншот'
								height={how3.height}
								width={how3.width}
								sizes='100vw'
								style={{
									width: '100%',
									height: 'auto',
								}}
								quality={100}
								draggable='false'
							/>
						</figure>
					</li>
					<li className='mb-5 text-left leading-10'>
						Далее надо выбрать ely.by в качестве аккаунта. После нажатия вас
						перекинет в браузер, где произойдет аутентификация на ely.by и ваш
						аккаунт будет добавлен:
						<figure className='flex-col items-center my-5'>
							<Image
								className='m-auto'
								src={how4}
								alt='скриншот'
								height={how4.height}
								width={how4.width}
								sizes='100vw'
								style={{
									width: '100%',
									height: 'auto',
								}}
								quality={100}
								draggable='false'
							/>
						</figure>
					</li>
					<li className='mb-5 text-left leading-[55px]'>
						Далее мы установим майнкрафт версии{' '}
						<span className='highlighting'>1.21.4</span> (на такой версии
						сервер). В главном меню в списке версии выбирете{' '}
						<span className='highlighting'>Fabric 1.21.4</span> (благодаря
						fabric вы сможете ставить моды для себя (оптимизация, мини карта и
						тд)):
						<figure className='flex-col items-center my-5'>
							<Image
								className='m-auto'
								src={how5}
								alt='скриншот'
								height={how5.height}
								width={how5.width}
								sizes='100vw'
								style={{
									width: '100%',
									height: 'auto',
								}}
								quality={100}
								draggable='false'
							/>
						</figure>
					</li>
					<li className='mb-5 text-left leading-loose'>
						На этом и завершена настройка Legacy Launcher для игры в майнкрафт.
					</li>
				</ul>
			</div>
		</section>
	)
}
