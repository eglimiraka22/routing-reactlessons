import {Link,useNavigate} from 'react-router-dom'


const HomePage = () => {

    const navigate = useNavigate()

    const navigateHandler=()=> {
navigate('products')
    }
	return (
        <>
    <div>My home page</div>

    <p>Go to <Link to="products"> list of products</Link></p>
        <p>
            <button onClick={navigateHandler}>Navigate</button>
        </p>
    </>
    )
};

export default HomePage;
