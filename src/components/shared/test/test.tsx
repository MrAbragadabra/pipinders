"use client";
import styles from "./test.module.scss";
import anime from "animejs/lib/anime.es.js";
import { createRef, Ref, useEffect } from "react";

interface Props {}

export const Test: React.FC<Props> = () => {
	const block: Ref<HTMLDivElement> = createRef();
	const block2: Ref<HTMLDivElement> = createRef();
	const megaTitle: Ref<HTMLHeadingElement> = createRef();
    const video: Ref<HTMLVideoElement> = createRef();

	useEffect(() => {
		anime({
			targets: `.${block.current?.className}`,
			translateX: 150,
			opacity: [0, 1],
			duration: 1000,
			direction: "alternate",
			delay: anime.stagger(200),
			easing: "easeInOutQuad",
			loop: true,
		});

		anime({
			targets: `.${block2.current?.className}`,
			translateX: -150,
			opacity: [0, 1],
			duration: 1000,
			direction: "alternate",
			delay: anime.stagger(200),
			easing: "easeInOutQuad",
			loop: true,
		});

		anime({
			targets: megaTitle.current,
			scale: [0, 1],
			opacity: [0, 1],
			duration: 2000,
			direction: "alternate",
			easing: "easeOutElastic",
			loop: true,
		});

        anime({
            targets: video.current,
            scale: [0, 1],
            opacity: [0, 0.5],
            rotate: "3turn",
            delay: 500,
            duration: 2000,
            direction: "alternate",
            easing: "easeOutElastic",
            loop: true,
            autoplay: true,
            play: true,
            controls: true,
            volume: 0.5,
            muted: true,
            fill: "red"
        })
	}, []);

	return (
		<section className={styles["test"]}>
			<video className={styles["test-video"]} ref={video} autoPlay loop playsInline controls>
				<source src="/video/Это просто охуенно.mp4" type="video/mp4" />
				Ваш браузер не поддерживает HTML5 видео :(
			</video>

			<div className={styles["block-container"]}>
				<div>
					<div className={styles["block"]} ref={block}></div>
					<div className={styles["block"]}></div>
					<div className={styles["block"]}></div>
					<div className={styles["block"]}></div>
					<div className={styles["block"]}></div>
				</div>
				<h1 className={styles["mega-title"]} ref={megaTitle}>
					MEGA TEST
				</h1>
				<div>
					<div className={styles["block2"]} ref={block2}></div>
					<div className={styles["block2"]}></div>
					<div className={styles["block2"]}></div>
					<div className={styles["block2"]}></div>
					<div className={styles["block2"]}></div>
				</div>
			</div>
		</section>
	);
};
