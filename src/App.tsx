import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './client/components/home/Home';
import About from './client/components/about/About';
import Projects from './client/components/projects/Projects';
import Skills from './client/components/skills/Skills';
import Contacts from './client/components/contacts/Contacts';
import Navbar from './client/components/navbar/Navbar';
import AppStyles from './global-styles/App.module.scss';
import AnimationStyles from '../src/global-styles/Animation.module.scss';
import { useState, useEffect } from 'react';


const App = () => {
	const [showAnimationData, setShowAnimationData] = useState({
		showNavbar: false,
		showOutside: false,
		showMiddle: false,
		showText: false
	});
	const [showWindowSendMessage, setShowWindowSendMessage] = useState(false);
	const [showWindowSentMessage, setShowWindowSentMessage] = useState<true | false | null>(null);

	const [messageData, setMessageData] = useState({ name: '', email: '', message: '' });

	const getShowWindowSendMessage = () => setShowWindowSendMessage(true);
	const getHiddenWindowSendMessage = () => setShowWindowSendMessage(false);

	const getShowWindowSentMessage = () => {
		setShowWindowSendMessage(false);
		setShowWindowSentMessage(true);
		setTimeout(() => {
			setShowWindowSentMessage(null);
		}, 800);
	};


	const getShowAnimation = () => {
		setTimeout(() => {
			setShowAnimationData((prev) => ({ ...prev, showNavbar: true }));
		}, 1000);
		setTimeout(() => {
			setShowAnimationData((prev) => ({ ...prev, showOutside: true }));
		}, 2000);
		setTimeout(() => {
			setShowAnimationData((prev) => ({ ...prev, showMiddle: true }));
		}, 3000);
		setTimeout(() => {
			setShowAnimationData((prev) => ({ ...prev, showText: true }));
		}, 4000);
	};

	useEffect(() => {
		getShowAnimation();
	}, []);

	const getFolowLink = (event: React.MouseEvent<HTMLElement>) => {
		const id = event.currentTarget.id;
		if (!id) return;

		const links: Record<string, string | undefined> = {
			github: import.meta.env.VITE_GITHUB_LINK,
			telegram: import.meta.env.VITE_TELEGRAM_LINK,
			linkedin: import.meta.env.VITE_LINKEDIN_LINK,
		};

		const link = links[id];
		if (!link) return;
		window.open(link || '/');
	};

	const handleDownload = () => {
		const link = document.createElement('a');
		link.href = `${import.meta.env.BASE_URL}resume.pdf`;
		link.download = 'Vitalii_Resume.pdf';
		link.click();
	};

	const getMessageData = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = event.target;
		setMessageData((prev) => ({ ...prev, [name]: value }))
	};

	const getFormMessageData = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(`name: ${messageData.name}`);
		console.log(`email: ${messageData.email}`);
		console.log(`message: ${messageData.message}`);
	};


	return (
		<Router basename='/vitaly-pro-hub' future={{ v7_relativeSplatPath: true }}>
			<div className={AppStyles.app}>
				<div className={
					showAnimationData.showNavbar
						? AnimationStyles.visible_animation
						: AnimationStyles.hidden_animation}>
					<Navbar />
				</div>
				<Routes>
					<Route path='/' element={<Home
						messageData={messageData}
						showWindowSentMessage={showWindowSentMessage}
						showWindowSendMessage={showWindowSendMessage}
						showAnimationData={showAnimationData}
						getFolowLink={getFolowLink}
						getMessageData={getMessageData}
						getFormMessageData={getFormMessageData}
						handleDownload={handleDownload}
						getShowWindowSendMessage={getShowWindowSendMessage}
						getShowWindowSentMessage={getShowWindowSentMessage}
						getHiddenWindowSendMessage={getHiddenWindowSendMessage} />} />
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




