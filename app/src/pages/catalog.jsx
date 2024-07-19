import { useEffect, useState } from "react";
import Product from "../components/product";
import "./styles/catalog.css";
import dataService from "../services/dataService";


function Catalog(){
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);


    //do something when the  cmp loads
    useEffect(function() {
        console.log("Catalog loaded");

        const prods = dataService.getProducts();
        setProducts(prods);

        const cats = dataService.getCategories();
        setCategories(cats);  
    }, []);
    
    
    
    
    return(
        <div className="catalog page">
            <h1>Check our amazing catalog!</h1>

            

            <div className="filters">
            {categories.map(cat => 
            <button className = "btn btn-sm btn-secondary">{cat}</button>)}
            </div>
            
            {products.map(prod => <Product info={prod}/>)}

        </div>
    );
}

export default Catalog;