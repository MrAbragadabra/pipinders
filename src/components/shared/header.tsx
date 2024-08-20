'use client'
import { cn } from '@/lib/utils'
import {
	Box,
	CircleDollarSign,
	CircleHelp,
	Clock,
	House,
	Scale,
	Terminal,
} from 'lucide-react'
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
					'h-[70px] w-full xl:px-20 px-5 flex items-center justify-between bg-gray-400 bg-opacity-20 backdrop-blur-md select-none fixed top-0 z-10',
					className
				)}
			>
				{/* Название сайта */}
				<div>
					<h1 className='uppercase text-white font-bold sm:text-3xl text-2xl'>
						<Link href='/' className='flex items-center gap-2'>
							Pipinders
							<Box className='animate-bounce' size={34} color='#ffffff' />
						</Link>
					</h1>
				</div>

				{/* Навигационное меню в десктопе*/}
				<div className='hidden xl:flex gap-7 items-center text-white font-bold text-2xl'>
					<Link
						className='flex items-center gap-2 std-link'
						href='/how-to-play'
					>
						<CircleHelp color='#ffffff' size={24} />
						Как играть?
					</Link>

					<Link className='flex items-center gap-2 std-link' href='/rules'>
						<Scale color='#ffffff' size={24} />
						Правила
					</Link>

					<Link className='flex items-center gap-2 std-link' href='/commands'>
						<Terminal color='#ffffff' size={24} />
						Команды
					</Link>

					<Link className='flex items-center gap-2 std-link' href='/history'>
						<Clock color='#ffffff' size={24} />
						История
					</Link>

					<Link className='flex items-center gap-2 std-link' href='/donate'>
						<CircleDollarSign color='#ffffff' size={24} />
						Донат
					</Link>
				</div>

				<button
					className='xl:hidden std-burger-container'
					onClick={toggleBurger}
				>
					<div
						className={`inline-block std-burger ${
							isClick ? 'std-burger--active' : ''
						}`}
					></div>
				</button>
				{/* {!isClick ? (

					<Menu
						className="inline-block xl:hidden cursor-pointer"
						size={28}
						color="#ffffff"
						strokeWidth={2.25}
						onClick={toggleBurger}
					/>
				) : (
					<X
						className="inline-block xl:hidden cursor-pointer"
						size={28}
						color="#ffffff"
						strokeWidth={2.25}
						onClick={toggleBurger}
					/>
				)} */}
			</header>

			{/* Навигационное меню в мобильном */}
			<div
				className={`w-full z-10 px-2 fixed top-20 std-menu ${
					isClick ? 'std-menu--active' : ''
				}`}
			>
				<div className='xl:hidden bg-lime-400 bg-opacity-20 backdrop-blur-md flex-col p-7 items-center justify-center text-center text-white text-3xl font-semibold rounded-md'>
					<div className='flex items-center gap-2 w-full justify-left'>
						<House color='#ffffff' size={24} />
						<Link onClick={clickOnLink} className='block std-link' href='/'>
							Главная
						</Link>
					</div>

					<div className='flex items-center gap-2 w-full justify-left mt-4'>
						<CircleHelp color='#ffffff' size={24} />
						<Link
							onClick={clickOnLink}
							className='block std-link'
							href='/how-to-play'
						>
							Как играть?
						</Link>
					</div>

					<div className='flex items-center gap-2 w-full justify-left mt-4'>
						<Scale color='#ffffff' size={24} />
						<Link
							onClick={clickOnLink}
							className='block std-link'
							href='/rules'
						>
							Правила
						</Link>
					</div>

					<div className='flex items-center gap-2 w-full justify-left mt-4'>
						<Terminal color='#ffffff' size={24} />
						<Link
							onClick={clickOnLink}
							className='block std-link'
							href='/commands'
						>
							Команды
						</Link>
					</div>

					<div className='flex items-center gap-2 w-full justify-left mt-4'>
						<Clock color='#ffffff' size={24} />
						<Link
							onClick={clickOnLink}
							className='block std-link'
							href='/history'
						>
							История
						</Link>
					</div>

					<div className='flex items-center gap-2 w-full justify-left mt-4'>
						<CircleDollarSign color='#ffffff' size={24} />
						<Link
							onClick={clickOnLink}
							className='block std-link'
							href='/donate'
						>
							Донат
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}
