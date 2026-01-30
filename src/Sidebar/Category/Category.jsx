import './Category.css';

import Input from "../../components/Input";
function Category({handleChange}) {
	return (
		<div className="">
			<h2 className="sidebar-title Category">Category</h2>

			<div className="sidebar-items" >
				<label className="sidebar-label-container">
				<input type="radio" name='test' value="All" onChange={handleChange} />
					<span className="checkmark"></span>All
				</label>
				<Input
				handleChange={handleChange}
				value="sneakers"
				name="test"
				title="Sneakers"/>				
			<Input
				handleChange={handleChange}
				value="flats"
				name="test"
				title="Flats"/>				
			<Input
				handleChange={handleChange}
				value="sandals"
				name="test"
				title="Sandals"/>				
			<Input
				handleChange={handleChange}
					name="test"
					title="Heels"/>							
								
			</div>
			
		</div>
	);
}

export default Category;






{/* <div className="sidebar-items" >
				<label className="sidebar-label-container">
					<input type="radio" name='test' />
					<span className="checkmark"></span>All
				</label>
				<label className="sidebar-label-container">
					<input type="radio" name='test' />
					<span className="checkmark"></span>Sneakers
				</label>
				<label className="sidebar-label-container">
					<input type="radio" name='test' />
					<span className="checkmark"></span>Flats
				</label>
				<label className="sidebar-label-container">
					<input type="radio" name='test' />
					<span className="checkmark"></span>Sandals
				</label>
				<label className="sidebar-label-container">
					<input type="radio" name='test' />
					<span className="checkmark"></span>Heels
				</label>
			</div> */}