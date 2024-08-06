'use client'
import { cn } from '@/lib/utils'
import React from 'react'
import { Button } from '../ui'
import { Container } from './container'
import Link from 'next/link'

interface Props {
	className?: string
}

export const Header: React.FC<Props> = ({ className }) => {
	return (
		<header className={cn('h-[70px] w-full px-20 flex items-center justify-between bg-gray-400 bg-opacity-20 backdrop-blur-md select-none', className)}>
			{/* Название сайта */}
			<div>
				<h1 className='uppercase text-white font-bold text-2xl'><Link href='/'>Pipinders Server</Link></h1>
			</div>

			{/* Навигационное меню */}
			<div className='flex gap-7 items-center text-white font-bold text-xl'>
				<Link className='hover:underline' href='/history'>История</Link>
				<Link className='hover:underline' href='/rules'>Правила</Link>
				<Link className='hover:underline' href='/commands'>Команды</Link>
				<Link className='hover:underline' href='/skins'>Скины</Link>
			</div>
		</header>
	)
}
