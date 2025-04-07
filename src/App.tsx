import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './client/components/home/Home';
import About from './client/components/about/About';
import Projects from './client/components/projects/Projects';
import Skills from './client/components/skills/Skills';
import Contacts from './client/components/contacts/Contacts';
import Navbar from './client/components/navbar/Navbar'
import AppStyles from './app-styles/App.module.scss'

const App = () => {
	return (
		<Router>
			<div className={AppStyles.app}>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
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




