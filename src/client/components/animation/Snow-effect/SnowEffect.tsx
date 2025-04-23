import { JSX, useEffect, useState } from 'react';
import snowEffectStyles from './SnowEffect.module.scss';

const SnowEffect = () => {
	const [flakes, setFlakes] = useState<JSX.Element[]>([]);

	useEffect(() => {
		const numFlakes = 100;
		const newFlakes = [];

		for (let i = 0; i < numFlakes; i++) {
			const left = Math.random() * 100;
			const delay = Math.random() * -20;
			const duration = 5 + Math.random() * 5;
			const size = 8 + Math.random() * 5;

			newFlakes.push(
				<span
					key={i}
					className={snowEffectStyles.snow_flake}
					style={{
						left: `${left}vw`,
						animationDelay: `${delay}s`,
						animationDuration: `${duration}s`,
						fontSize: `${size}px`,
					}}
				>❄</span>
			)
		}
		setFlakes(newFlakes);
	}, [])


	return (
		<div className={snowEffectStyles.snow_effect_container}>{flakes}</div>
	)
};

export default SnowEffect;