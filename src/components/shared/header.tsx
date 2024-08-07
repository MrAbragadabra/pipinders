'use client'
import { cn } from '@/lib/utils'
import { Box, Menu } from 'lucide-react'
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

	const clickOnLink = () => {
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
						<div className='flex items-center gap-2'>
							<Link href='/'>Pipinders Server</Link>
							<Box className='animate-bounce' size={32} color='#ffffff' />
						</div>
					</h1>
				</div>

				{/* Навигационное меню */}
				<div className='hidden lg:flex gap-7 items-center text-white font-bold text-xl'>
					<Link className='group' href='/history'>
						История
						<span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-lime-300'></span>
					</Link>
					<Link className='group' href='/rules'>
						Правила
						<span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-lime-300'></span>
					</Link>
					<Link className='group' href='/commands'>
						Команды
						<span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-lime-300'></span>
					</Link>
					<Link className='group' href='/how-to-play'>
						Как играть?
						<span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-lime-300'></span>
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
				<div className='absolute w-full z-10 px-2 mt-2'>
					<div className='lg:hidden bg-lime-400 bg-opacity-20 backdrop-blur-md flex-col p-7 items-center justify-center text-center text-white text-2xl font-semibold rounded-md'>
						<Link
							onClick={clickOnLink}
							className='block hover:underline'
							href='/'
						>
							Главная
						</Link>
						<Link
							onClick={clickOnLink}
							className='mt-4 block hover:underline'
							href='/history'
						>
							История
						</Link>
						<Link
							onClick={clickOnLink}
							className='mt-4 block hover:underline'
							href='/rules'
						>
							Правила
						</Link>
						<Link
							onClick={clickOnLink}
							className='mt-4 block hover:underline'
							href='/commands'
						>
							Команды
						</Link>
						<Link
							onClick={clickOnLink}
							className='mt-4 block hover:underline'
							href='/how-to-play'
						>
							Как играть?
						</Link>
					</div>
				</div>
			)}
		</>
	)
}
