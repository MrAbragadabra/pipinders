'use client'

import { Box } from 'lucide-react'
import styles from './Loader.module.scss'

interface Props {}

export const Loader: React.FC<Props> = () => {
	return (
		<div
			className={`${styles['loader']} bg-gradient-to-tl from-emerald-700 to-emerald-900`}
		>
			<div className={styles['loader__title-container']}>
				<h1 className={styles['loader__title']}>Pipinders</h1>
				<Box className={styles['loader__icon']} size={50} color='#ffffff' />
			</div>
		</div>
	)
}
