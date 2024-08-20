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
				<ul className='lg:px-20 px-10 list-decimal text-white font-semibold mt-5 text-3xl'></ul>
			</div>
		</section>
	)
}
