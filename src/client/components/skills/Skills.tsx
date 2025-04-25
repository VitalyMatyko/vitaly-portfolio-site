import { useState, useEffect } from 'react';
import skillsStyles from './Skills.module.scss';

const Skills = () => {
	const [radius, setRadius] = useState({ lt: 10, rt: 10, rb: 10, lb: 10 });


	useEffect(() => {
		const interval = setInterval(() => {
			setRadius({
				lt: Math.floor(Math.random() * 30),
				rt: Math.floor(Math.random() * 30),
				rb: Math.floor(Math.random() * 30),
				lb: Math.floor(Math.random() * 30),
			});
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className={skillsStyles.skills_page_container}>
			<div
				className={skillsStyles.skills}
				style={{
					borderRadius: `${radius.lt}% ${radius.rt}% ${radius.rb}% ${radius.lb}%`,
					transition: 'border-radius 1s ease-in-out'
				}}>
				<div className={skillsStyles.skills_page_describe_text}>

					<div className={skillsStyles.frontend}>
						<h2>Frontend</h2>
						<ul>
							<li>Html / Css (Sass/Scss)</li>
							<li>JavaScript / TypeScript</li>
							<li>React</li>
						</ul>
						<div className={skillsStyles.border_bottom}>
							<span></span>
						</div>
					</div>

					<div className={skillsStyles.backend}>
						<h2>Backend</h2>
						<ul>
							<li>Node.js</li>
							<li>Express.js</li>
							<li>Bash</li>
						</ul>
						<div className={skillsStyles.border_bottom}>
							<span></span>
						</div>
					</div>

					<div className={skillsStyles.data_base}>
						<h2>Data Base</h2>
						<ul>
							<li>PostgreSQL</li>
							<li>MySQL</li>
							<li>Mongo DB</li>
						</ul>
						<div className={skillsStyles.border_bottom}>
							<span></span>
						</div>
					</div>

					<div className={skillsStyles.library}>
						<h2>Library</h2>
						<ul>
							<li>Bootstrap</li>
							<li>JQuery</li>
							<li>D3</li>
							<li>Tailwind CSS</li>
						</ul>
						<div className={skillsStyles.border_bottom}>
							<span></span>
						</div>
					</div>

					<div className={skillsStyles.other}>
						<h2>Other</h2>
						<ul>
							<li>Vite</li>
							<li>Docker</li>
							<li>Git</li>
							<li>Babel</li>
						</ul>
						<div className={skillsStyles.border_bottom}>
							<span></span>
						</div>
					</div>

				</div>
			</div>
		</div>
	)
};

export default Skills;