import QuantityPicker from './quantityPicker';
import './styles/product.css';

function Product(props){

    function Add(){
        console.log("adding" + props.info.title)
    }
    return(
        <div className="product">

            <img src={"/images/" + props.info.image} alt="" />
            <h5>-{props.info.title}-</h5>

            <label className='total'>${props.info.price.toFixed(2)}</label>
            <label>${props.info.price.toFixed(2)}</label>


            <QuantityPicker />
            <div>
            <button onClick={Add} className="btn btn-sm btn-primary">Add</button>
            </div>


        </div>
    );
}

export default Product;