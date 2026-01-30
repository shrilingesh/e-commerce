import './Price.css';

import Input from "../../components/Input";
function Price({handleChange}) {
	
	// console.log(handleChange);

	return (
		<div className='ms-3'>
			<h2 className="sidebar-title Price">Price</h2>

			<div className="sidebar-items">
				<Input
					handleChange={handleChange}
					name="test2"
					title= "All"
					value= "All"
				/>
				<Input
					handleChange={handleChange}
					name="test2"
					title="$0-$50"
					value= {50}
				/>
				<Input
					handleChange={handleChange}
					name="test2"
					title="$50-$100"
					value= {100}
				/>
				<Input
					handleChange={handleChange}
					name="test2"
					title="$100-$150"
					value= {150}
				/>
				<Input
					handleChange={handleChange}
					name="test2"
					title="Over $150"
					value= {200}
				/>
				
			</div>
			
		</div>
	);
}

export default Price;




{/* <div className="sidebar-items">
				<label className="sidebar-label-container">
					<input type="radio" name="test2" />
					<span className='checkmark'></span>All
				</label>
				<label className="sidebar-label-container">
					<input type="radio" name="test2" />
					<span className='checkmark'></span>$0-$50
				</label>
				<label className="sidebar-label-container">
		 			<input type="radio" name="test2" />
					<span className='checkmark'></span>$50-$100
				</label>
				<label className="sidebar-label-container">
					<input type="radio" name="test2" />
					<span className='checkmark'></span>$100-$150
				</label>
				<label className="sidebar-label-container">
					<input type="radio" name="test2" />
					<span className='checkmark'></span>Over $150
				</label>
			</div> */}