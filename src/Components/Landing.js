import React, {Component} from 'react';
// import { BrowserRouter as Router ,Route , Link } from "react-dom";
import  User from "./User";
class Landing extends Component {
    // constructor(){
    //     super();
    //     this.state={
    //         users:[
    //             {name:"laith",color:"blue"},
    //             {name: "john" ,color:"red"},
    //             {name:"shoobert",color:"green"},
    //             {name:"jona",color:"yellow"}
    //         ]
    //     }

    // }

    render() {
        
        return(
            <div>
                <h1>WHO'S WATCHING?</h1>
                <div id="user-container">
                    {this.props.users.map(u => <User key={u.name} user={u} updateUser={this.props.updateUser}/>)}
                </div>
                <h1>IM GONNA SLEEP</h1>
            </div> 
        )
    }








}






export default Landing