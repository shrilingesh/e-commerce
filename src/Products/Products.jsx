import './Products.css';
import Card from '../components/Card';

function Products({ productsGrid, result }) {
		
	return (		
		<section className={`card-container ${productsGrid}`}>
			{result}			
		</section>
	);
}

export default Products;


{/* 
	<Card
	img="https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg"
	title="Nike Air Vapormax Plus"
	reviews="(456 reviews)"
	prevPrice={800}
	newPrice = {500}
	/>
	<Card
	img="https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg"
	title="Nike Air Vapormax Plus"
	reviews="(456 reviews)"
	prevPrice={800}
	newPrice = {500}
	/>
	<Card
	img="https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg"
	title="Nike Air Vapormax Plus"
	reviews="(456 reviews)"
	prevPrice={800}
	newPrice = {500}
	/>
	
	<Card
	img="https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg"
	title="Nike Air Vapormax Plus"
	reviews="(456 reviews)"
	prevPrice={800}
	newPrice = {500}
	/> */}