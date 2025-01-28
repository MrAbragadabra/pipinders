import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface ImageWithCaptionProps {
	src: StaticImageData
	caption: string
}

export const ImageWithCaption: React.FC<ImageWithCaptionProps> = ({
	src,
	caption,
}) => {
	return (
		<figure className='flex-col items-center my-5'>
			<Image
				className='m-auto'
				src={src}
				alt={caption}
				height={src.height}
				width={src.width}
				sizes='100vw'
				style={{
					width: '100%',
					height: 'auto',
				}}
				quality={90}
				draggable='false'
			/>
			<figcaption className='text-center mt-2 text-white text-2xl'>
				{caption}
			</figcaption>
		</figure>
	)
}

export default ImageWithCaption
