import {Link} from 'react-router-dom'


const HomePage = () => {
	return (
        <>
    <div>My home page</div>

    <p>Go to <Link to="/products"> list of products</Link></p>
    </>
    )
};

export default HomePage;
