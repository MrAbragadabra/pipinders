import Image from 'next/image'
import Link from 'next/link'
import how1 from '../../../public/how/how1.png'
import how2 from '../../../public/how/how2.png'
import how3 from '../../../public/how/how3.png'
import how4 from '../../../public/how/how4.png'
import how5 from '../../../public/how/how5.png'

interface Props {
	className?: string
}

export const HowToPlay: React.FC<Props> = ({ className }) => {
	return (
		<section>
			<div>
				<h2 className='text-white uppercase text-4xl font-bold text-center'>
					Как играть?
				</h2>
			</div>
			<div>
				<p className='text-justify text-white font-semibold mt-5 text-3xl leading-10'>
					Для корректной работы нашего сервера необходимо настроить клиент
					Minecraft. В частности, следует установить мод Simple Voice Chat, без
					которого игра на сервере будет невозможна. Также рекомендуется
					использовать Legacy Launcher, так как на нём реализована система
					скинов, которая позволит вам на ходу менять скин во время игры. Ниже
					приведена инструкция по его установке и настройке.
				</p>
				<ul className='lg:px-20 px-10 list-decimal text-white font-semibold mt-5 text-3xl'>
					<li className='mb-5 text-left leading-10'>
						Скачайте{' '}
						<Link
							className='underline hover:no-underline'
							href='https://disk.yandex.ru/d/FsnXNe_eWWSGWw'
							target='_blank'
						>
							Legacy Launcher и Simple Voice Chat (вместе с зависимостями).
						</Link>
					</li>
					<li className='mb-5 text-left leading-10'>
						Запустите{' '}
						<span className='bg-lime-800 p-1 rounded-sm tracking-widest'>
							LegacyLauncher.exe
						</span>{' '}
						и установите куда вам удобно.
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
						<span className='bg-lime-800 p-1 rounded-sm tracking-widest'>
							Настройка лаунчера и игры:
						</span>
						<figure className='flex-col items-center my-5'>
							<Image
								className='m-auto'
								src={how1}
								alt='На скриншоте открытие настроен лаунчера'
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
						<span className='bg-lime-800 p-1 rounded-sm tracking-widest'>
							отдельная папка для каждой версии
						</span>
						. На втрой стрелке выставляем нужное для вас количество оперативной
						памяти. На третьей стрелке убираем галочку с{' '}
						<span className='bg-lime-800 p-1 rounded-sm tracking-widest'>
							Автодобавление серверов:
						</span>
						<figure className='flex-col items-center my-5'>
							<Image
								className='m-auto'
								src={how2}
								alt='На скриншоте открытие насроен лаунчера'
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
						<span className='bg-lime-800 p-1 rounded-sm tracking-widest'>
							настроить аккаунты:
						</span>
						<figure className='flex-col items-center my-5'>
							<Image
								className='m-auto'
								src={how3}
								alt='На скриншоте открытие насроен лаунчера'
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
								alt='На скриншоте открытие насроен лаунчера'
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
					<li className='mb-5 text-left leading-10'>
						Далее мы установим майнкрафт версии{' '}
						<span className='bg-lime-800 p-1 rounded-sm tracking-widest'>
							1.21.1
						</span>{' '}
						(на такой версии сервер) и установим моды. В главном меню в списке
						версии выбирете{' '}
						<span className='bg-lime-800 p-1 rounded-sm tracking-widest'>
							Fabric 1.21.1
						</span>
						:
						<figure className='flex-col items-center my-5'>
							<Image
								className='m-auto'
								src={how5}
								alt='На скриншоте открытие насроен лаунчера'
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
					<li className='mb-5 text-left leading-10'>
						Нажмите кнопку{' '}
						<span className='bg-lime-800 p-1 rounded-sm tracking-widest'>
							установить.
						</span>
					</li>
					<li className='mb-5 text-left leading-loose'>
						Если после установки у вас открылся майнкрафт, то можете его закрыть
						(если он открылся после установки), чтобы установить моды. После
						того как вы закрыли майнкрафт, на главно нажмите на значок папки и
						нажмите{' '}
						<span className='bg-lime-800 p-1 rounded-sm tracking-widest'>
							Открыть папку Fabric-1.21
						</span>
						. У вас откроется проводник с папками майнкрафт. Среди этих папок
						найдите папку{' '}
						<span className='bg-lime-800 p-1 rounded-sm tracking-widest'>
							mods
						</span>{' '}
						и скопируйте в неё ранее скачанные файлы{' '}
						<span className='bg-lime-800 p-1 rounded-sm tracking-widest'>
							fabric-api.jar
						</span>{' '}
						и{' '}
						<span className='bg-lime-800 p-1 rounded-sm tracking-widest'>
							voicechat.jar
						</span>
					</li>
					<li className='mb-5 text-left leading-loose'>
						На этом и завершена настройка Legacy Launcher для игры в майнкрафт.
					</li>
				</ul>
			</div>
		</section>
	)
}
