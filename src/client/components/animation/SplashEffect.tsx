import { useState, useRef, ReactNode } from "react";
import SplashStyles from '../../styles/animation/SplashEffect.module.scss';

interface SplashType {
	id: number;
	x: number;
	y: number;
	angle: number;
}
interface SplashEffectProps {
	children: ReactNode;
}

const SplashEffect: React.FC<SplashEffectProps> = ({ children }) => {
	const [splashes, setSplashes] = useState<SplashType[]>([]);
	const elementRef = useRef<HTMLDivElement | null>(null);

	const createSplash = () => {
		const element = elementRef.current;
		if (!element) return;

		const rect = element.getBoundingClientRect();
		const centerX = rect.width / 2;
		const centerY = rect.height / 2;

		const numSplashes = 20;
		const radius = Math.max(rect.width, rect.height) / 3.5;

		const newSplashes: SplashType[] = [];

		for (let i = 0; i < numSplashes; i++) {
			const angle = (Math.PI * 2 * i) / numSplashes;
			const x = centerX + Math.cos(angle) * radius;
			const y = centerY + Math.sin(angle) * radius;
			newSplashes.push({
				id: Date.now() + i,
				x,
				y,
				angle,
			});
		}
		setSplashes((prev) => [...prev, ...newSplashes]);
	};

	return (
		<div className={SplashStyles['splash_wrapper']} onClick={createSplash} ref={elementRef}>
			{children}
			{splashes.map(({ id, x, y, angle }) => {
				const offsetX = 120 * Math.cos(angle);
				const offsetY = 120 * Math.sin(angle);

				return (
					<span
						key={id}
						className={SplashStyles.splash}
						style={{
							left: `${x}px`,
							top: `${y}px`,
							'--x': `${offsetX}px`,
							'--y': `${offsetY}px`
						} as React.CSSProperties}
					/>
				);
			})}
		</div>
	);
};

export default SplashEffect;




// // Получаем координаты элемента относительно окна
// const rect = element.getBoundingClientRect();
// const xOffset = event.clientX - rect.left; // Относительно родительского элемента
// const yOffset = event.clientY - rect.top;

// if (!xOffset && !yOffset) return;

// const numSplashes = 20; // Количество брызг
// const newSplashes: SplashType[] = [];

// for (let i = 0; i < numSplashes; i++) {
// 	const angle = (Math.PI * 2 * i) / numSplashes;  // Расчет угла
// 	const radius = 30;

// 	const x = xOffset + Math.cos(angle) * radius;
// 	const y = yOffset + Math.sin(angle) * radius;

// const radiusX = rect.width / 2;
// const radiusY = rect.height / 2;

// // Вычисляем положение для каждой брызги
// const x = Math.cos(angle) * radiusX + rect.left + radiusX;
// const y = Math.sin(angle) * radiusY + rect.top + radiusY;