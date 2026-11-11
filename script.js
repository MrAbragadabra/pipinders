'use strict'

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

if ('IntersectionObserver' in window && !reducedMotion.matches) {
	document.documentElement.classList.add('js')
	const observer = new IntersectionObserver(
		(entries, ob) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					entry.target.classList.add('visible')
					ob.unobserve(entry.target)
				}
			}
		},
		{ threshold: 0.12 },
	)
	document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
}

const shareButton = document.getElementById('shareButton')
const toast = document.getElementById('toast')
let toastTimer
function showToast(message) {
	toast.textContent = message
	toast.classList.add('show')
	clearTimeout(toastTimer)
	toastTimer = setTimeout(() => toast.classList.remove('show'), 3000)
}

shareButton.addEventListener('click', async () => {
	const url = 'https://pipinders.ru/'
	try {
		if (navigator.share) {
			await navigator.share({
				title: 'PIPINDERS — Скоро',
				text: 'Новый Minecraft-мир. Скоро.',
				url,
			})
		} else if (navigator.clipboard && window.isSecureContext) {
			await navigator.clipboard.writeText(url)
			showToast('Ссылка скопирована!')
		} else {
			const field = document.createElement('textarea')
			field.value = url
			field.style.position = 'fixed'
			field.style.opacity = '0'
			document.body.appendChild(field)
			field.select()
			const success = document.execCommand('copy')
			field.remove()
			showToast(success ? 'Ссылка скопирована!' : 'Адрес сайта: pipinders.ru')
		}
	} catch (err) {
		if (err.name !== 'AbortError') showToast('Адрес сайта: pipinders.ru')
	}
})

const canvas = document.getElementById('particles')
const context = canvas.getContext('2d', { alpha: true })
if (context && !reducedMotion.matches) {
	let width = 0,
		height = 0,
		dpr = 1,
		points = [],
		raf = null
	let lastTime = 0
	const palette = ['84,252,84', '192,241,192', '220,255,220']

	const resize = () => {
		width = window.innerWidth
		height = Math.min(1100, Math.max(700, window.innerHeight + 240))
		dpr = Math.min(window.devicePixelRatio || 1, 2)
		canvas.width = Math.ceil(width * dpr)
		canvas.height = Math.ceil(height * dpr)
		canvas.style.height = `${height}px`
		context.setTransform(dpr, 0, 0, dpr, 0, 0)
		const count = Math.min(66, Math.max(18, Math.round(width / 21)))
		points = Array.from({ length: count }, () => ({
			x: Math.random() * width,
			y: Math.random() * height,
			size: Math.random() * 1.2 + 0.35,
			speed: Math.random() * 0.006 + 0.003,
			phase: Math.random() * Math.PI * 2,
			color: palette[Math.floor(Math.random() * palette.length)],
		}))
	}

	const draw = time => {
		if (document.hidden) {
			raf = null
			return
		}
		if (time - lastTime < 33) {
			raf = requestAnimationFrame(draw)
			return
		} // ~30 fps
		lastTime = time
		context.clearRect(0, 0, width, height)
		for (const p of points) {
			const a = (0.14 + Math.sin(time * p.speed + p.phase) * 0.09).toFixed(3)
			context.fillStyle = `rgba(${p.color},${a})`
			context.fillRect(p.x, p.y, p.size, p.size)
		}
		raf = requestAnimationFrame(draw)
	}
	const start = () => {
		if (raf === null && !document.hidden) raf = requestAnimationFrame(draw)
	}
	window.addEventListener('resize', resize, { passive: true })
	document.addEventListener('visibilitychange', () => {
		if (document.hidden && raf !== null) {
			cancelAnimationFrame(raf)
			raf = null
		} else start()
	})
	resize()
	start()
}
