function Input({handleChange,name,title,value,color}) {
	return (
		<label className="sidebar-label-container">
			<input type="radio" name={name} onChange={handleChange}
			value={value} />
		<span className="checkmark" style={{backgroundColor:color}} ></span>{title}
		</label>
	);

}



export default Input;
