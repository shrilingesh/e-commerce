import Buttons from '../components/Buttons';
import './Recommended.css';

function Recommended({recomGrid, handleClick}) {
	
	return (<section className={`Recommended ${recomGrid}`}>

		<h2 className="Recommended-title">Recommended</h2>
		<div className="Recommended-flex">
			<Buttons
				className="Recommended-btns"
				onClickHandler={handleClick}
				value="All"
				title="All Products"
			/>
			<Buttons
				className="Recommended-btns"
				onClickHandler={handleClick}
				value="Nike"
				title="Nike"
				/>
			<Buttons
				className="Recommended-btns"
				onClickHandler={handleClick}
				value="Adidas"
				title="Adidas"
				/>
			<Buttons
				className="Recommended-btns"
				onClickHandler={handleClick}
				value="Puma"
				title="Puma"
				/>
			<Buttons
				className="Recommended-btns"
				onClickHandler={handleClick}
				value="Vans"
				title="Vans"
				/>
		</div>
	</section>
	);
}

export default Recommended;
