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
		</section>
	)
}
