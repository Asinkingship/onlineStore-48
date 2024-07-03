import Product from "../components/product";
import "./styles/catalog.css";

const categories = ['Fruit', 'Meat', 'Beverages'];

const data = [
    {
        "title": "Apple",
        "price": 12.33,
        "catagory": "fruit",
        "image": "apple.jpg",
        "_id": "1"
    },
    {
        "title": "Orange",
        "price": 8.99,
        "catagory": "fruit",
        "image": "orange.jpg",
        "_id": "2"
    },
    {
        "title": "Strawberry",
        "price": 6.999,
        "catagory": "fruit",
        "image": "strawberry.jpg",
        "_id": "3"
    },
    {
        "title": "Kiwi",
        "price": 2.99,
        "catagory": "fruit",
        "image": "kiwi.jpg",
        "_id": "4"
    },
    {
        "title": "Watermelon",
        "price": 22.99,
        "catagory": "fruit",
        "image": "watermellon.jpg",
        "_id": "5"
    },
    {
        "title": "Pineapple",
        "price": 9.99,
        "catagory": "fruit",
        "image": "pineapple.jpg",
        "_id": "6"
    }
];


function Catalog(){
    return(
        <div className="catalog">
            <h1>Check our amazing catalog!</h1>

            {/*map to buttopn*/}

            <div className="filters">
            {categories.map(cat => <button className = "btn btn-sm btn-secondary">{cat}</button>)}
            </div>
            
            {data.map(prod => <Product info={prod}/>)}

        </div>
    );
}

export default Catalog;