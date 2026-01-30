import './Colors.css';

import Input from "../../components/Input";
function Colors({handleChange}) {
	return (
		<div className=''>
			<h2 className="sidebar-title Color">Color</h2>

			<div className="sidebar-items">
				<label className="sidebar-label-container">
				<input type="radio" name='test3' value="All" onChange={handleChange} />
					<span className="checkmark all"></span>All
				</label>
				<Input
					handleChange={handleChange}
					value="black"
					name="test3"
					title="Black"
					color="black"
				/>
				<Input
					handleChange={handleChange}
					value="blue"
					name="test3"
					title="Blue"
					color="blue"
				/>
				<Input
					handleChange={handleChange}
					value="red"
					name="test3"
					title="Red"
					color="red"
				/>
				<Input
					handleChange={handleChange}
					value="green"
					name="test3"
					title="Green"
					color="green"
				/>
				<label className="sidebar-label-container">
					<input type="radio" name='test3'
						value="white"
						onChange={handleChange} />
					<span
						className="checkmark"
						style={{ background: "white", border: "2px solid black" }} ></span>
					White
				</label>
				
			</div>
			
		</div>
	);
}

export default Colors;




