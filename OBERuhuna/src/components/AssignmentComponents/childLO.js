import React, { Component } from 'react';  
import axios from 'axios';  
import Logo from '../../photos/logo.jpg';
import {Button } from 'reactstrap'
import { Route, BrowserRouter,Link,Switch} from 'react-router-dom'

  
export default class childLO extends Component {  
  
   moduleId=this.props.match.params.value;
  constructor(props) {  
      super(props);  
      this.state = {
          POs:[],
          LOs:[]
      } 
    } 
    async componentDidMount(){  
      debugger;  
        const res =await axios.get('https://localhost:5001/api/LOes?id='+this.props.match.params.ModuleId)  
        const LOs = res.data;
        this.setState({LOs});
        console.log(LOs)
    }    
       

    
 

    renderrows=() => {
        return this.state.LOs.map(LO=> {
            return(
                <tr key={LO.id}>
                    <td>{LO.loid}</td>
                    <td>{LO.lmarks}</td>
                </tr>
            )
        } );

    }
    
      
    
    render() {
       
      return (    
          
        <div>  
        
        {this.renderrows()}
        

          
            </div>  
      );  
    }  
  }  
