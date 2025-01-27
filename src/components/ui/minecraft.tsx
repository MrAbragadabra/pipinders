'use client'

import { useMinecraftStore } from '@/app/stores/minecraft'
import anime from 'animejs'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import {
	createRef,
	MouseEventHandler,
	Ref,
	useCallback,
	useEffect,
} from 'react'
import styles from './styles/minecraft.module.scss'

interface Props {}

export const Minecraft: React.FC<Props> = () => {
	const router = useRouter()
	const minecraftStore: any = useMinecraftStore()

	const overlay: Ref<HTMLDivElement> = createRef()
	const heartContainer: Ref<HTMLDivElement> = createRef()
	const killCumOverlay: Ref<HTMLDivElement> = createRef()

	const handleClick: MouseEventHandler = useCallback(() => {
		minecraftStore.addClicks()
	}, [])

	useEffect(() => {
		if (minecraftStore.clicks > 10) {
			const heartContainers = document.querySelectorAll(
				`.${styles['heart-container']}`
			)
			const hearts = heartContainers[1].querySelectorAll(`.${styles['heart']}`)

			overlay.current?.classList.add(styles['overlay--active'])
			heartContainers.forEach((container) => {
				container.classList.add(styles['heart-container--active'])
			})

			if (!hearts.length) {
				const audio = new Audio('/audio/dead.mp3')
				audio.play()

				const overlayAnime = anime({
					targets: overlay.current,
					opacity: [0, 1],
					duration: 100,
					easing: 'easeOutQuad',
				})

				const heartContainerAnime = anime({
					targets: heartContainers,
					duration: 100,
					easing: 'easeInOutQuad',
					keyframes: [
						{
							translateX: 10,
							translateY: anime.random(-5, 5),
						},
						{
							translateX: -10,
							translateY: anime.random(-5, 5),
						},
						{
							translateX: 25,
							translateY: anime.random(-15, 15),
						},
						{
							translateX: -25,
							translateY: anime.random(-15, 15),
						},
						{
							translateX: '-50%',
							translateY: 0,
						},
					],
					loop: true,
				})

				audio.addEventListener('ended', () => {
					console.log('audio ended')

					anime.remove([
						overlay.current,
						heartContainers[0],
						heartContainers[1],
					])

					overlay.current?.classList.remove(styles['overlay--active'])
					heartContainers.forEach((container) => {
						container.classList.remove(styles['heart-container--active'])
					})

					setTimeout(() => {
						new Audio('/audio/minecraft-death.mp3').play()
					}, 500)
					killCumOverlay.current?.classList.add(
						styles['kill-cum__overlay--active']
					)
				})
			}

			if (hearts.length) {
				anime({
					targets: overlay.current,
					opacity: [0, 1],
					duration: 100,
					easing: 'easeOutQuad',
					complete: () => {
						overlay.current?.classList.remove(styles['overlay--active'])
					},
				})

				if (hearts.length) {
					anime({
						targets: hearts[hearts.length - 1],
						duration: 300,
						easing: 'easeInOutQuad',
						scale: [1, 0],
						opacity: [1, 0],
						complete: () => {
							hearts[hearts.length - 1].remove()
						},
					})
				}

				anime({
					targets: heartContainers,
					duration: 300,
					easing: 'easeInOutQuad',
					keyframes: [
						{
							translateX: 10,
						},
						{
							translateX: -10,
						},
						{
							translateX: 25,
						},
						{
							translateX: -25,
						},
						{
							translateX: 0,
						},
					],
					complete: () => {
						heartContainers.forEach((container) => {
							container.classList.remove(styles['heart-container--active'])
						})
					},
				})
			}
		}
	}, [minecraftStore.clicks])

	useEffect(() => {
		minecraftStore.setHandlerClick(handleClick)
	}, [handleClick])

	return (
		<>
			<div className={styles['kill-cum__overlay']} ref={killCumOverlay}>
				<div className={styles['kill-cum']}>
					<h2 className={styles['kill-cum__title']}>
						Pipinders помер от гриферства
					</h2>
					<div className={styles['kill-cum__button-container']}>
						<button
							className={styles['kill-cum__button']}
							onClick={() => location.reload()}
						>
							<Image
								src='/img/minecraft/restart-button.png'
								alt=''
								width={400}
								height={70}
							/>
						</button>
						<button
							className={styles['kill-cum__button']}
							onClick={() => router.push('/')}
						>
							<Image
								src='/img/minecraft/menu-button.png'
								alt=''
								width={400}
								height={70}
							/>
						</button>
					</div>
				</div>
			</div>
			<div className={styles['overlay']} ref={overlay}></div>
			<div className={styles['heart-container']} ref={heartContainer}>
				<Image
					src='/icons/empty-heart.svg'
					alt=''
					width={50}
					height={50}
					className={styles['heart']}
				/>
				<Image
					src='/icons/empty-heart.svg'
					alt=''
					width={50}
					height={50}
					className={styles['heart']}
				/>
				<Image
					src='/icons/empty-heart.svg'
					alt=''
					width={50}
					height={50}
					className={styles['heart']}
				/>
				<Image
					src='/icons/empty-heart.svg'
					alt=''
					width={50}
					height={50}
					className={styles['heart']}
				/>
				<Image
					src='/icons/empty-heart.svg'
					alt=''
					width={50}
					height={50}
					className={styles['heart']}
				/>
			</div>
			<div className={styles['heart-container']} ref={heartContainer}>
				<Image
					src='/icons/heart.svg'
					alt=''
					width={50}
					height={50}
					className={styles['heart']}
				/>
				<Image
					src='/icons/heart.svg'
					alt=''
					width={50}
					height={50}
					className={styles['heart']}
				/>
				<Image
					src='/icons/heart.svg'
					alt=''
					width={50}
					height={50}
					className={styles['heart']}
				/>
				<Image
					src='/icons/heart.svg'
					alt=''
					width={50}
					height={50}
					className={styles['heart']}
				/>
				<Image
					src='/icons/heart.svg'
					alt=''
					width={50}
					height={50}
					className={styles['heart']}
				/>
			</div>
		</>
	)
}
