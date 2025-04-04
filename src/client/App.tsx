import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Contacts from './components/contacts/Contacts';
import Navbar from './components/navbar/Navbar';
import AppStyles from './styles/AppContainer.module.scss';
import Animation from './styles/Animation.module.scss'
import { useEffect, useState } from 'react';



const App = () => {

	const [showNavbar, setShowNavbar] = useState<boolean>(false);
	const [showOutside, setShowOutside] = useState<boolean>(false);
	const [showMiddle, setShowMiddle] = useState<boolean>(false);
	const [showText, setShowText] = useState<boolean>(false);

	const getShowAnimation = () => {
		setTimeout(() => {
			setShowNavbar(true);
		}, 1000);
		setTimeout(() => {
			setShowOutside(true);
		}, 2000);
		setTimeout(() => {
			setShowMiddle(true);
		}, 3000);
		setTimeout(() => {
			setShowText(true);
		}, 4000);
	}

	useEffect(() => {
		getShowAnimation()
	}, [])

	const followLink = (event: React.MouseEvent<HTMLDivElement>) => {
		const id = event.currentTarget.id;
		if (!id) return;

		const link = {
			github: import.meta.env.VITE_GITHUB_LINK,
			telegram: import.meta.env.VITE_TELEGRAM_LINK,
			linkedin: import.meta.env.VITE_LINKEDIN_LINK
		}[id];

		if (link) {
			return window.open(link);
		} else {
			return window.location.href = '/'
		}
	}


	return (
		<Router>
			<div className={AppStyles.app}>
				<div className={showNavbar ? Animation.visible_animation : Animation.hidden_animation}>
					<Navbar />
				</div>
				<Routes>
					<Route path='/' element={
						<Home showOutside={showOutside} showMiddle={showMiddle} showText={showText} followLink={followLink} />} />
					<Route path='/about' element={<About />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/skills' element={<Skills />} />
					<Route path='/contacts' element={<Contacts />} />
				</Routes>
			</div>
		</Router>
	)
};

export default App




