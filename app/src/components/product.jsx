import { useState } from 'react';
import QuantityPicker from './quantityPicker';
import './styles/product.css';

function Product(props){

    const [quantity, setQuantity] = useState(1);

    function Add(){
        console.log("adding" + props.info.title)
    }

    function handleQuantityChange(val){
        setQuantity(val);
    }

    function getTotal(){
        let total = props.info.price * quantity;
        return total.toFixed(2);
    }


    return(
        <div className="product">

            <img src={"/images/" + props.info.image} alt="" />
            <h5>-{props.info.title}-</h5>

            <label className='total'>${getTotal()}</label>
            <label>${props.info.price.toFixed(2)}</label>


            <div className="controls">

            <QuantityPicker onChange={handleQuantityChange} />
            <button onClick={Add} className="btn btn-sm btn-primary">
            <i class="fa-solid fa-cart-arrow-down"></i>
            </button>
            </div>


        </div>
    );
}

export default Product;