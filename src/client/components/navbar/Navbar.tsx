
import { Link } from 'react-router-dom';
import navbarStyles from './Navbar.module.scss'
import SplashEffect from '../animation/splash-effect/SplashEffect';
import { NavbarProps } from '../../../global-types/types';

const Navbar: React.FC<NavbarProps> = ({ selectPage, getSelectPage }) => {
	return (
		<div className={navbarStyles.navbar_panel}>
			<div className={navbarStyles.top_panel}>
				<div className={navbarStyles.top_panel_text}>Vitaly Matyko</div>
				<div onClick={getSelectPage} className={navbarStyles.top_panel_pages}>
					<SplashEffect>
						<Link className={selectPage === 'home' ? navbarStyles.active : ''} id='home' to='/home'>Home</Link>
					</SplashEffect>
					<SplashEffect>
						<Link className={selectPage === 'about' ? navbarStyles.active : ''} id='about' to='/about'>About</Link>
					</SplashEffect>
					<SplashEffect>
						<Link className={selectPage === 'projects' ? navbarStyles.active : ''} id='projects' to='/projects'>Projects</Link>
					</SplashEffect>
					<SplashEffect>
						<Link className={selectPage === 'skills' ? navbarStyles.active : ''} id='skills' to='/skills'>Skills</Link>
					</SplashEffect>
					<SplashEffect>
						<Link className={selectPage === 'contacts' ? navbarStyles.active : ''} id='contacts' to='/contacts'>Contacts</Link>
					</SplashEffect>
				</div>
			</div>
		</div>
	)
}

export default Navbar;