import Image from 'next/image'

export default function NotFound() {
	return (
		<section>
			<div>
				<h2 className='text-white uppercase text-4xl font-bold text-center'>
					Вы ошиблись адресом
				</h2>
				<div className='flex items-center justify-center mt-5'>
					<Image
						src='/404.jpg'
						width={300}
						height={300}
						alt='404 cat'
					/>
				</div>
			</div>
		</section>
	)
}
