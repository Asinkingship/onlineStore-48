import "./styles/admin.css"
import { useState } from 'react';
function Admin(){

    const [coupon, setCoupon] = useState({
        code: '',
        discount: '',
    });

    function handleCoupon(e){
        const text = e.target.value;
        const name = e.target.value;

        // create a copy
        let copy = {...coupon};
        // modify the copy
        copy[name] = text;
        // set the copy back
        setCoupon(copy);
    }

    return(

        <div className="adminHome page">
            <h1>Admin Homepage</h1>
            <p>Welcome to the admin dashboard</p>

            <div className="parent">
                <section className="sec-prods">
                    <h3>Poducts</h3>
                </section>

                <section className= "sec-coupons">
                    <h3>Coupons</h3>

                    <div className="form">
                
                        <div>
                            <label className="form-label">Code</label>
                            <input onChange={handleCoupon} name="code" type="text" className="form-control" />                    
                        </div>
                        <div>
                            <label className="form-label">Discount</label>
                            <input onChange={handleCoupon} name="discount" type="text" className="form-control" />                    
                        </div>
                            <button className='btn btn-primary'>Save Coupon</button>
                    
                </div>
                </section>
            </div>
        </div>
        


    );
}

export default Admin;