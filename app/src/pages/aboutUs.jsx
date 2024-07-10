import { Button } from "bootstrap";
import { useState } from 'react';
import "./styles/aboutUs.css";

function AboutUS(){

    const [isInfoVisible, setIsInfoVisible] = useState(false);

    function showInfo(){
        setIsInfoVisible(true);
    }


    function getInfo(){
        if(isInfoVisible){
            return(
                <div className="info">
                    <p>phone: 999-999-999</p>
                    <p>email: djhfskjdfh@yahoo.com</p>
                </div>
            );
        }
        else {
            return <p className="alert alert-warning">Click the button to view info</p>
        }
    }

    return(
        <div className="about page">
            <h1>About Us</h1>
            <div className="aboutInfo">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus enim porro, aperiam vel dolorem unde debitis adip</p>
            </div>
            <div>
                <h4>KB Osborne</h4>
            </div>

            {getInfo()}

            {isInfoVisible ? "" : (
                <button onClick={showInfo} className='btn btn-sm btn-outline-dark'>
                    view my contact info
                </button> 
            ) }

        </div>

    );

}
export default AboutUS