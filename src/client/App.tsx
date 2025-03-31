import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contacts from './components/Contacts';
import Navbar from './components/Navbar'
import AppStyles from './styles/app/AppContainer.module.scss'

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




