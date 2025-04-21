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
import { ValidFormDataType } from './global-types/types';
import LoadingLine from './client/components/loading-line/LoadingLine';


const App = () => {
	const [showAnimationData, setShowAnimationData] = useState({
		showNavbar: false,
		showOutside: false,
		showMiddle: false,
		showText: false
	});
	const [showWindowSendMessage, setShowWindowSendMessage] = useState(false);
	const [showWindowSentMessage, setShowWindowSentMessage] = useState<true | false | null>(null);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isLoadingLine, setIsLoadingLine] = useState(false);

	const [messageData, setMessageData] = useState({
		name: '',
		email: '',
		message: ''
	});
	const [validFormData, setValidFormData] = useState<ValidFormDataType>({
		validName: null,
		validEmail: null,
		validMessage: null,
	});

	const getShowWindowSendMessage = () => setShowWindowSendMessage(true);
	const getHiddenWindowSendMessage = () => {
		setShowWindowSendMessage(false);
		setMessageData({
			name: '',
			email: '',
			message: '',
		});
		setValidFormData({
			validName: null,
			validEmail: null,
			validMessage: null,
		});
	};

	const getShowAnimation = () => {
		setIsLoadingLine(true);
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
			setIsLoadingLine(false);
		}, 4000);
	};

	useEffect(() => {
		getShowAnimation();
	}, []);

	const getFollowLink = (event: React.MouseEvent<HTMLElement>) => {
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
		setMessageData((prev) => ({ ...prev, [name]: value }));
	};

	const URL = location.host === 'vitaly-pro-hub-client.onrender.com'
		? import.meta.env.VITE_PROD_SERVER_URL
		: location.host === 'vitalymatyko.github.io'
			? import.meta.env.VITE_PROD_SERVER_URL
			: import.meta.env.VITE_DEV_SERVER_URL;

	console.log(`URL: ${URL}`);
	console.log(`location.host: ${location.host}`)

	const getFormMessageData = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const isName = /^[a-zA-Z0-9._-]{3,10}$/.test(messageData.name);
		const isEmail = /[a-zA-Z0-9_.%-+]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(messageData.email);
		const isMessage = /^[^()[\]<>]{3,500}$/.test(messageData.message);
		setValidFormData({
			validName: !isName,
			validEmail: !isEmail,
			validMessage: !isMessage,
		});

		if (isName && isEmail && isMessage) {
			setIsSubmitting(true);
			setShowWindowSentMessage(true);
			setTimeout(() => {
				setShowWindowSentMessage(null);
			}, 1000);
			setShowWindowSendMessage(false);
			setMessageData({ name: '', email: '', message: '' });
			setValidFormData({ validName: false, validEmail: false, validMessage: false });

			try {
				const response = await fetch(`${URL}/vitaly-pro-hub/send`, {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(messageData),
				});

				if (!response.ok) {
					const error = await response.json();
					throw new Error(error.message || `Ошибка при отправке сообщения.`);
				}
			} catch (error) {
				console.error(`Ошибка сети: ${error}`);
			} finally {
				setIsSubmitting(false);
			}

		} else {
			setShowWindowSentMessage(false);
			setTimeout(() => {
				setShowWindowSentMessage(null);
			}, 1000);
		}
	};

	return (
		<Router basename='/vitaly-pro-hub' future={{ v7_relativeSplatPath: true }}>
			<div className={AppStyles.app}>
				{isLoadingLine && <LoadingLine />}
				<div className={
					showAnimationData.showNavbar
						? AnimationStyles.visible_animation
						: AnimationStyles.hidden_animation}>
					<Navbar />
				</div>
				<Routes>
					<Route path='/' element={<Home
						messageData={messageData}
						isSubmitting={isSubmitting}
						validFormData={validFormData}
						showWindowSentMessage={showWindowSentMessage}
						showWindowSendMessage={showWindowSendMessage}
						showAnimationData={showAnimationData}
						getFollowLink={getFollowLink}
						getMessageData={getMessageData}
						handleDownload={handleDownload}
						getFormMessageData={getFormMessageData}
						getShowWindowSendMessage={getShowWindowSendMessage}
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




