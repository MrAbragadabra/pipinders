'use client'
import { cn } from '@/lib/utils'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

interface Props {
	className?: string
}

export const Header: React.FC<Props> = ({ className }) => {
	const [isClick, setIsClick] = useState(false)

	const toggleBurger = () => {
		setIsClick(!isClick)
	}
	return (
		<>
			<header
				className={cn(
					'h-[70px] w-full lg:px-20 px-5 flex items-center justify-between bg-gray-400 bg-opacity-20 backdrop-blur-md select-none',
					className
				)}
			>
				{/* Название сайта */}
				<div>
					<h1 className='uppercase text-white font-bold text-2xl'>
						<Link href='/'>Pipinders Server</Link>
					</h1>
				</div>

				{/* Навигационное меню */}
				<div className='hidden lg:flex gap-7 items-center text-white font-bold text-xl'>
					<Link className='hover:underline' href='/history'>
						История
					</Link>
					<Link className='hover:underline' href='/rules'>
						Правила
					</Link>
					<Link className='hover:underline' href='/commands'>
						Команды
					</Link>
					<Link className='hover:underline' href='/skins'>
						Скины
					</Link>
				</div>
				<Menu
					className='inline-block lg:hidden cursor-pointer'
					size={28}
					color='#ffffff'
					strokeWidth={2.25}
					onClick={toggleBurger}
				/>
			</header>
			{isClick && (
				<div
					className='lg:hidden absolute w-full bg-pink-400 bg-opacity-20 backdrop-blur-md flex-col z-10 p-7 items-center justify-center text-center text-white text-2xl'
				>
					<Link className='block hover:underline' href='/history'>
						История
					</Link>
					<Link className='mt-4 block hover:underline' href='/rules'>
						Правила
					</Link>
					<Link className='mt-4 block hover:underline' href='/commands'>
						Команды
					</Link>
					<Link className='mt-4 block hover:underline' href='/skins'>
						Скины
					</Link>
				</div>
			)}
		</>
	)
}
