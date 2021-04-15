import axios from 'axios';
import React, { Component } from 'react';
import './portfolio.css';


class Portfolio extends Component{

    state = {
        data : []
    }

    componentDidMount (){
      axios.get('json/data.json').then( res =>{ this.setState({data:res.data.portfolio})})        
    }


    render(){
    
    const images = this.state.data ; 
    const newimages = images.map(image1 =>{
        return(
            <div className="img_card" key={image1.id}>
                <img src={image1.image}/> 
                <p className="overlay">
                    <button>Show Image</button>
                </p>
            </div> 
        )
    })
    
    return(
        <div>
            <div className="portfolio">
                <h2>My<b>Portfolio</b></h2>
                <div className="container_imgs">
                    {newimages}
                </div>


            </div>
        </div>
    )
}
}
export default Portfolio ;