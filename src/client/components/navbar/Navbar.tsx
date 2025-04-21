
import { Link } from 'react-router-dom';
import navbarStyles from './Navbar.module.scss'
import SplashEffect from '../animation/splash-effect/SplashEffect';

const Navbar = () => {
	return (
		<div className={navbarStyles.navbar_panel}>
			<div className={navbarStyles.top_panel}>
				<div className={navbarStyles.top_panel_text}>Vitaly Matyko</div>
				<div className={navbarStyles.top_panel_pages}>
					<SplashEffect>
						<Link className={navbarStyles.active} to='/'>Home</Link>
					</SplashEffect>
					<SplashEffect>
						<Link to='/about'>About</Link>
					</SplashEffect>
					<SplashEffect>
						<Link to='/projects'>Projects</Link>
					</SplashEffect>
					<SplashEffect>
						<Link to='/skills'>Skills</Link>
					</SplashEffect>
					<SplashEffect>
						<Link to='/contacts'>Contact</Link>
					</SplashEffect>
				</div>
			</div>
		</div>
	)
}

export default Navbar;