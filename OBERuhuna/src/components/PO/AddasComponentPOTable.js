import React, { Component } from 'react';  
import axios from 'axios';  

class AddasComponentPOTable extends Component {  
  

  constructor(props) {  
    super(props);  
    }
      
    
     
  render() {  
    return (  
        <tr >  
          <div class=" col-md-1 offset-md-5">
            <td >  
              {this.props.obj.poid}  
            </td>
            
          </div>      
          
            <td >  
              {this.props.obj.poName}  
            </td>
            
      </tr> 
    );
      
  }  
}  
  
export default AddasComponentPOTable; 