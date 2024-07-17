import './styles/cart.css';
import { useContext } from 'react';
import DataContext from '../state/dataContext';

function CartPage(){

    const cart = useContext(DataContext).cart;

    function getTotal(){
        let total = 0;
        for (let i = 0; i < cart.length; i++){
            let prod = cart[i];
            total += prod.price * prod.quantity;
        }

        return total.toFixed(2);
    }



    return(
        <div className="cart page">
            <h1>Cart Items</h1>

            <div className="parent">
                <section className="cartList">
                    
                        {cart.map(prod => 
                        <div className='cartForm flexed'>
                            <img src={"/images/" + prod.image} alt="" />
                            <h5>{prod.title}</h5>
                            <label>{prod.price.toFixed(2)}</label>
                            <label>{prod.quantity}</label>
                            <label>Total</label>
                            <button className='btn btn-sm btn-danger'>Remove</button>
                        </div>
                        )}                     
                    

                    
                </section>



                <section className= "cartMenu">
                    <div className='cartForm'>
                        <h3>Total</h3>
                        <h3>${getTotal()}</h3> 

                        <hr />  
                        <button className="btn btn-primary">Proceed to Payment</button>                
                    </div>

                    
                </section>
            </div>
        </div>
    );
}

export default CartPage;