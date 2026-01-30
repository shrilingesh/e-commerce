/* eslint-disable jsx-a11y/anchor-is-valid */
import './Nav.css';

import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";

function Nav({navGrid,query,handleInputChange}) {
	return (
		<nav className={`nav ${navGrid}`}>
			
			<div className='nav-container'>
				<input
					type='text'
					placeholder='Enter your search shoes'
					className='search-input'

					onChange={handleInputChange}
					value={query}
				/>
			</div>
			<div className='profile-container'>
				<a href="#" >
					<CiHeart className="nav-icons"/>
				</a>
				<a href="#" >
					<CiShoppingCart className="nav-icons"/>
				</a>
<button type="button" className="icon-btn" aria-label="profile">
				<CiUser className="nav-icons"/>
			</button>

			</div> 
		</nav>
	);
}

export default Nav;

