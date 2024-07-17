import DataContext from "./dataContext";
import { useState } from "react";
function GlobalProvider(props){
    const [cart, setCart]= useState([]);
    const [user, setUser]= useState({name: "KB"});

    function addProductToCart(product){
        console.log("Global fn");

        var copy = [...cart];
        copy.push(product);
        setCart(copy);


    }

    function resetCart(){
    }

    return (
        <DataContext.Provider value={{
            cart: cart,
            user: user,
            addProductToCart: addProductToCart,
            resetCart: resetCart
        }}>
            {props.children}
        </DataContext.Provider>
    );
}

export default GlobalProvider;