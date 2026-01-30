import "./Sidebar.css";

import Category from './Category/Category';
import Colors from './Colors/Colors';
import Price from './Price/Price';

function Sidebar({sidebarGrid, handleChange}) {
	return (
		<>
			<section className={`sidebar ${sidebarGrid}`}>
				<div className="logo-container">
					<h2>🛒</h2>
				</div>
				<h1>Filters</h1>
				<Category handleChange={handleChange} />
				<Colors handleChange={handleChange} />
				<Price handleChange={handleChange} />
			</section>
		</>
	);
}

export default Sidebar;
