function Buttons({title, onClickHandler,value,className}) {
	return (
		<button
			className={`btns ${ className }`}
		onClick={onClickHandler}
		value={value}>
			
		{title}
		</button>
	);
}

export default Buttons;
