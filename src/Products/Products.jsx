import './Products.css';

function Products({ productsGrid, result }) {
		
	return (		
		<section className={`card-container ${productsGrid}`}>
			{result}			
		</section>
	);
}

export default Products;