import { useEffect, useState } from "react";
import Product from "../components/product";
import "./styles/catalog.css";
import dataService from "../services/dataService";


function Catalog(){
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);


    //do something when the  cmp loads
    useEffect(function() {

        loadCatalog()
        loadCategories()

        
    }, []);

    async function loadCatalog(){

        let prods = await dataService.getProducts();
        setProducts(prods);
        console.log(prods);

    }

    async function loadCategories(){
        
        let cats = await dataService.getCategories();
        setCategories(cats);
        console.log(cats);

    }
    
    
    
    
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