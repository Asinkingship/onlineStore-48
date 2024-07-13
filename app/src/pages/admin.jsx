import "./styles/admin.css"
import { useState } from 'react';
function Admin(){

    const [product, setProduct] = useState({
        title: "",
        image: "",
        price: "",
        category: ""
    });
    
    const [coupon, setCoupon] = useState({
        code: '',
        discount: '',
    });



    function handleCoupon(e){
        const text = e.target.value;
        const name = e.target.name;

        // create a copy
        let copy = {...coupon};
        // modify the copy
        copy[name] = text;
        // set the copy back
        setCoupon(copy);
    }
    function saveCoupon(){
        console.log(coupon);
    }



    function handleProduct(e){
        const text = e.target.value;
        const name = e.target.name;

        // create a copy
        let copy = {...product};
        // modify the copy
        copy[name] = text;
        // set the copy back
        setProduct(copy);
    }
    function saveProduct(){
        console.log(product);
    }



    return(

        <div className="adminHome page">
            <h1>Admin Homepage</h1>
            <p>Welcome to the admin dashboard</p>

            <div className="parent">
                <section className="sec-prods">
                    <h3>Poducts</h3>

                    <div className="form">
                
                        <div>
                            <label className="form-label">Title</label>
                            <input onBlur={handleProduct} name="title" type="text" className="form-control" />                    
                        </div>
                        <div>
                            <label className="form-label">Image</label>
                            <input onBlur={handleProduct} name="image" type="text" className="form-control" />                    
                        </div>
                        <div>
                            <label className="form-label">Price</label>
                            <input onBlur={handleProduct} name="price" type="text" className="form-control" />                    
                        </div>
                        <div>
                            <label className="form-label">Category</label>
                            <input onBlur={handleProduct} name="category" type="text" className="form-control" />                    
                        </div>
                            <button onClick={saveProduct} className='btn btn-primary'><i class="fa-regular fa-floppy-disk"></i> Save Product</button>
                    
                </div>
                </section>

                <section className= "sec-coupons">
                    <h3>Coupons</h3>

                    <div className="form">
                
                        <div>
                            <label className="form-label">Code</label>
                            <input onBlur={handleCoupon} name="code" type="text" className="form-control" />                    
                        </div>
                        <div>
                            <label className="form-label">Discount</label>
                            <input onBlur={handleCoupon} name="discount" type="text" className="form-control" />                    
                        </div>
                            <button onClick={saveCoupon} className='btn btn-primary'><i class="fa-regular fa-floppy-disk"></i> Save Coupon</button>
                    
                </div>
                </section>
            </div>
        </div>
        


    );
}

export default Admin;