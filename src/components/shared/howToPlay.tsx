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
					скинов, которая позволит вам находу менять скин во время игры. Ниже
					приведена инструкция по его установке и настройке.
				</p>
			</div>
		</section>
	)
}
