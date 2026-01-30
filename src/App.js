import "./App.css";

import { useState } from "react";
import products from "./db/data";

import Nav from './Navigation/Nav';
import Recommended from './Recommended/Recommended';
import Sidebar from './Sidebar/Sidebar';
import Products from './Products/Products';
import Card from "./components/Card";

function App() {
	
	// App component is considered as STORE in REDUX 
	// so,STATE is defined here
	const [selectedCategory, setSelectedCategory] = useState(null);
	
	// 1.1.Input is Filtered (Search Component)
	const [query, setQuery] = useState("");	
	const handleInputChange = (e) => {
		setQuery(e.target.value);
	};

			//1.2.Items filtered based on Search query
	const filteredItems =
		products.filter(
			(product) =>
				product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1); //Validation

	// ----------- Radio Filtering ----------- (Sidebar Component)
	const handleChange = (e) => {
		setSelectedCategory(e.target.value);
	};
	// Buttons filter functionality (Recommended Component)
	const handleClick = (e) => {
		setSelectedCategory(e.target.value);
	};
	
	// Filtering the data based on search,radio,recommended-buttons
	function filteredData(products, selected, query) {
		let filteredProducts = products;

		// filtered Input Items
		if (query) {
			filteredProducts = filteredItems;
		}

		// Selected Filter
		if (selected && selected !== "All") {
			filteredProducts = filteredProducts.filter(				
					({company,category, color, newPrice,title})=>
						category === selected ||
						color === selected ||
						company === selected ||
						newPrice === selected ||
						title === selected
					);
		}


		return filteredProducts.map(
		({ img, title, reviews, prevPrice, newPrice }) => (
			<Card
				key={Math.random()}
				img={img}
				title={title}
				reviews={reviews}
				newPrice={newPrice}
				prevPrice={prevPrice}
			/>
		));
	}

					//For Products Component
	let result = filteredData(products,selectedCategory,query); 
				 

	
	return (
		<div className="App-layout">
			<Sidebar sidebarGrid="sidebarGrid" handleChange={handleChange} />
			<Nav navGrid="navGrid" query={query}
				handleInputChange={handleInputChange} />
			<Recommended recomGrid="recomGrid" handleClick={handleClick} />
			<Products productsGrid="productsGrid" result={result} />
		</div>
	);
}

export default App;
