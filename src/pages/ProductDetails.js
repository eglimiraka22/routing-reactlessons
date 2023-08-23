import React from 'react';
import { useParams,Link } from 'react-router-dom';
const ProductDetailsPage = () => {
	const params = useParams();


	return (
		<>
			<h1>Product Details</h1>
			<p>{params.productId}</p>
            <Link to='..'  relative='path'>Back one Level url</Link>
		</>
	);
};

export default ProductDetailsPage;
