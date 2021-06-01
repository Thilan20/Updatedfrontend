import React, { Component } from 'react';  
import axios from 'axios';  
//import { Link } from 'react-router-dom';  
import { Route,Link} from 'react-router-dom'



class AddasComponentLOtable extends Component {  
  

  constructor(props) {  
    super(props);  
    }
     
  render() {  
    return (  
        <tr >  
          <div class=" col-md-1 offset-md-5">
            <td >  
              {this.props.obj.loid}  
            </td>
            
          </div>      
          
            <td >  
              {this.props.obj.name}  
            </td>
            
      </tr> 
    );
      
  }  
}  
  
export default AddasComponentLOtable; 