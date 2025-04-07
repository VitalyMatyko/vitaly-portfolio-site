import homeStyles from './Home.module.scss'


const Home = () => {
	return (
		<>
			<div className={homeStyles.main_container}>
				<div className={homeStyles.main_animation}>
					<div className={homeStyles.triangle} ></div>
					<div className={homeStyles.triangle} ></div>
					<div className={homeStyles.triangle} ></div>
					<div className={homeStyles.triangle} ></div>
					<div className={homeStyles.triangle} ></div>
				</div>
			</div>
		</>
	)
};

export default Home;