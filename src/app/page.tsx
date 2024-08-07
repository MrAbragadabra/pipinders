'use client'

import { Button } from '@/components/ui'

export default function Home() {
	return (
		<section>
			<div>
				<h2 className='text-white uppercase text-4xl font-bold text-center'>
					Pipinders Server
				</h2>
			</div>
			<div>
				<p className='text-justify text-white font-semibold mt-5 text-xl leading-8'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
					rerum blanditiis autem facilis corporis similique ut corrupti, id et,
					fugiat consequatur assumenda nemo, molestiae repellendus error
					laborum? Doloremque soluta ea ullam dolores, sed vero illo temporibus
					quod consequatur provident recusandae officia harum molestiae ipsum
					corrupti tenetur accusantium asperiores. Quia eaque ipsam officiis!
					Pariatur suscipit accusamus, porro officia inventore sint deleniti.
					Fuga, unde laboriosam ipsam dolore velit obcaecati voluptas commodi
					quisquam!
				</p>
				<div className='flex items-center justify-center mt-5'>
					<form action='https://ya.ru' target='_blank'>
						<Button type='submit' className='font-bold text-xl p-6 bg-lime-700 hover:bg-lime-800'>
							Оставить заявку
						</Button>
					</form>
				</div>
			</div>
		</section>
	)
}
