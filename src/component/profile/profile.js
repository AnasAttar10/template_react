import React, { Component } from 'react';
import './profile.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import axios from 'axios';

class Profile extends Component{

    state ={
        data : [] , 
        isLoading: true , 
        number:0

    }

    componentDidMount(){
        axios.get('json/data.json').then(res =>{
            this.setState({data : res.data.profile});
            this.setState({ isLoading: false });
        }) ; 
    }

    printstate = (status)=>{
        let newstatus= '' ; 
        if(status>=75 && status <= 100 )
            newstatus = "success" ; 
        else if(status>= 50 && status < 75)
            newstatus = "info" ;
        else if(status>= 25 && status <50)
            newstatus = "warning" ;
        else if(status>= 0 && status < 25 )
            newstatus = "danger" ;

        return newstatus ;

    }
    
    
    render(){
        const { isLoading, data } = this.state; 
        let num =this.state.number  ; 
        if (isLoading) {
            return <div className="App">Loading...</div>;
          }
        // setTimeout(()=>{
        //     let rand_num = Math.floor(Math.random() * 4 ) ; 
        //    this.setState({number:rand_num });
        // },10000)
        
    return(
    <div className="profile">
        <div className="container">
            <div className="continer_profile" key={data[2].id}>
                        <div className="mydate">
                                <h2>My Profile </h2>
                                <div>
                                    <div>
                                    <label>Name :</label> <span>{data[num].name}</span>
                                    </div>
                                    <div>
                                        <label>Age :</label> <span>{data[num].age}</span>
                                    </div>
                                    <div>
                                        <label>Phone :</label> <span>{data[num].phone}</span>
                                    </div>
                                    <div>
                                        <label>Email :</label> <span>{data[num].email}</span>
                                    </div>
                                    <div>
                                        <label>City :</label> <span>{data[num].city}</span>
                                    </div>
                                </div>
                        </div>
                        <div className="prograse">
                                <h2>Skilles</h2>
                                <div>
                                <label> bootstrap</label>
                                <div className="progressBar">
                                <ProgressBar variant={this.printstate(data[num].bootstrap)} now={data[num].bootstrap} label ={data[num].bootstrap+"%"}  />
                            </div>
                            <label> Java</label>
                                <div className="progressBar">
                                <ProgressBar variant={this.printstate(data[num].java)} now={data[num].java} label={data[num].java+"%"}  />
                            </div>
                            <label> Html </label>
                                <div className="progressBar">
                                <ProgressBar variant={this.printstate(data[num].html)} now={data[num].html} label={data[num].html+"%"}  />
                            </div>
                            <label> Css</label>
                                <div className="progressBar">
                                <ProgressBar variant={this.printstate(data[num].css)} now={data[num].css} label={data[num].css+"%"} />
                            </div>
                            </div>
        
                        </div>
                    </div>
        </div>
    </div>
        
    )
    }
}
export default Profile ;