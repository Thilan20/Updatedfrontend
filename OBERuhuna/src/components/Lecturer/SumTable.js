import React, { Component } from 'react';  
import axios from 'axios';  
//import { Link } from 'react-router-dom';  
import { Route,Link} from 'react-router-dom'


class SumTable extends Component {  
  

  constructor(props) {  
    super(props);  
    }
    
    


     
  render() {  
    return (  
        <tr>  
          <td >  
            {this.props.obj.moduleId}   </td>  
          <td>   {this.props.obj.name}  </td> 
          <td>{this.props.obj.credits} </td>  
            <td> {this.props.obj.type}</td>  
            <td> {this.props.obj.state} </td>  
            <td>{this.props.obj.s1}</td>  
            <td>{this.props.obj.s2}</td>  
            <td>{this.props.obj.s3}</td>  
            <td>{this.props.obj.s4}</td>  
            <td>{this.props.obj.s5}</td>  
            <td>{this.props.obj.s6}</td>  
            <td>{this.props.obj.s7}</td>  
            <td>{this.props.obj.s8}</td>  
            <td>{this.props.obj.s9}</td>  
            <td>{this.props.obj.s10}</td>  
            <td>{this.props.obj.s11}</td>  
            <td>{this.props.obj.s12}</td>  
    
        </tr> 
    );
      
  }  
}  
  
export default SumTable; 