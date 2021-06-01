import React, { Component } from 'react';  
import axios from 'axios';  
  
import { Route,Link} from 'react-router-dom'



class ShowLOMarksTable extends Component {  
  

  constructor(props) {  
    super(props);  
    }
     
  render() {  
    return (  
        <tr >  
          <div class=" col-md-2 offset-md-3">
            <td >  
              {this.props.obj.loid}  
            </td>
            
          </div>      
          
            <td  class="offset-md-3">  
              {this.props.obj.lmarks}  
            </td>
            
      </tr> 
    );
      
  }  
}  
  
export default ShowLOMarksTable; 