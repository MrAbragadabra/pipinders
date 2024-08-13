import Image from 'next/image'
import History1 from '../../../public/history/history1.png'
import History2 from '../../../public/history/history2.png'
import History3 from '../../../public/history/history3.png'
import History4 from '../../../public/history/history4.png'
import History5 from '../../../public/history/history5.png'

export default function History() {
	return (
		<section>
			<div>
				<h2 className='text-white uppercase text-4xl font-bold text-center'>
					История
				</h2>
			</div>
			<div>
				<Image
					className='py-5'
					alt='history1'
					src={History1}
					width={1920}
					height={1080}
					sizes='80vw'
					style={{
						width: '80%',
						height: 'auto',
						margin: '0 auto',
					}}
					draggable='false'
					quality={100}
				/>

				<Image
					className='pb-5'
					alt='history2'
					src={History2}
					width={1920}
					height={1080}
					sizes='80vw'
					style={{
						width: '80%',
						height: 'auto',
						margin: '0 auto',
					}}
					draggable='false'
					quality={100}
				/>

				<Image
					className='pb-5'
					alt='history3'
					src={History3}
					width={1920}
					height={1080}
					sizes='80vw'
					style={{
						width: '80%',
						height: 'auto',
						margin: '0 auto',
					}}
					draggable='false'
					quality={100}
				/>

				<Image
					className='pb-5'
					alt='history4'
					src={History4}
					width={1920}
					height={1080}
					sizes='80vw'
					style={{
						width: '80%',
						height: 'auto',
						margin: '0 auto',
					}}
					draggable='false'
					quality={100}
				/>

				<Image
					className='pb-5'
					alt='history5'
					src={History5}
					width={1920}
					height={1080}
					sizes='80vw'
					style={{
						width: '80%',
						height: 'auto',
						margin: '0 auto',
					}}
					draggable='false'
					quality={100}
				/>
			</div>
		</section>
	)
}
