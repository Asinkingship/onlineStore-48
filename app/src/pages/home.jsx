import './styles/home.css';

function Home(){
    return(
        <div className='home page'>
            <h1>Welcome to Our Online Store!</h1>
            <p>Our mission is to provide you with the best products and services at affordable prices.</p>

            <img className='img-1' src="./images/bagPhoto.jpg" alt="" />
            
            <div className="info">

                <h2>Smart Shopper</h2>
                <h3>Fresh fruit is 1-click away!</h3>

            </div>
        </div>

        

    );
}

export default Home;