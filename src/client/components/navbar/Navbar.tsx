
import { Link } from 'react-router-dom';
import NavbarStyles from './Navbar.module.scss'
import SplashEffect from '../animation/SplashEffect';

const Navbar = () => {
	return (
		<>
			<div className={NavbarStyles.navbar_panel}>
				<div className={NavbarStyles.top_panel}>
					<div className={NavbarStyles.top_panel_text}>Vitalii Matyko</div>
					<div className={NavbarStyles.top_panel_pages}>
						<SplashEffect>
							<Link className={NavbarStyles.active} to='/'>Home</Link>
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
		</>
	)
}

export default Navbar;