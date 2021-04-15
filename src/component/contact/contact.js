import React from 'react';
import './contact.css' ;

const Contact =()=>{
    return(
        <div className="contact">
            <h1>My<b>Form</b></h1>
            <div className="contact_in">   
                <form>
                    <input placeholder="Enter Your Name "/>
                    <input placeholder="Enter Your Age "/>
                    <input placeholder="Enter Your Email "/>
                    <textarea placeholder="Enter Your Notes "> 
                    </textarea>
                    <button>Save</button>
                </form>
            </div>
        </div>
    )
}
export default Contact ;