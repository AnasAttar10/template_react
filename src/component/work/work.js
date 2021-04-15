import axios from 'axios';
import React, { Component } from 'react';
import'../work/work.css';

class Work extends Component {
    state ={
        objs : []
    }
    componentDidMount(){
        axios.get('json/data.json').then(res => {
          this.setState({objs:res.data.works});
        }
        );
    }
    render(){
        const works = this.state.objs ; 
        const el_works = works.map(work =>{
            return(
                <div className="general_information" key={work.id}>
                    <i className={work.icon_name}></i>
                    <h4>{work.title}</h4>
                    <hr/>
                    <p> {work.body}</p>
                </div>
            )
        });
        return(
            <div className="work">
                <div className="container">
                     <h1>My <b>Work</b> </h1>  
                     <div className="container_boxs">
                       {el_works} 
                        {/* <div className="general_information">
                        <i className="fa fa-spinner fa-spin fa-2x">♥</i>
                        <h4>Mobile</h4>
                        <hr/>
                        <p>anas attar love html,css and js </p>
                        </div>
                        <div className="general_information">
                        <i className="fa fa-spinner fa-spin fa-2x">♥</i>
                        <h4>Mobile</h4>
                        <hr/>
                        <p>anas attar love html,css and js </p>
                        </div> */}
                     </div>
                </div>   
            </div>
        )
    }

}
export default Work ;