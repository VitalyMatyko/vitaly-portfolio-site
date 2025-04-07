
import { Link } from 'react-router-dom';
import NavbarStyles from './Navbar.module.scss';

const Navbar = () => {
	return (
		<>
			<div className={NavbarStyles.navbar_panel}>
				<div className={NavbarStyles.top_panel}>
					<div className={NavbarStyles.top_panel_text}>Portfolio</div>
					<div className={NavbarStyles.top_panel_pages}>
						<Link className={NavbarStyles.active} to='/'>Home</Link>
						<Link to='/about'>About</Link>
						<Link to='/projects'>Projects</Link>
						<Link to='/skills'>Skills</Link>
						<Link to='/contacts'>Contact</Link>
					</div>
				</div>
			</div>
		</>
	)
}

export default Navbar;