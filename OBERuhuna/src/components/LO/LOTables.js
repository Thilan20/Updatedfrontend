import React, { Component } from 'react';  
import axios from 'axios';  
//import { Link } from 'react-router-dom';  
import { Route,Link} from 'react-router-dom'


class LOTable extends Component {  
  

  constructor(props) {  
    super(props);  
    }
      
    DeleteLO= () =>{  
     axios.delete('https://oberuhunaapi.azurewebsites.net//api/LOes/'+this.props.obj.id)  
    .then(json => {  
    alert('Record deleted successfully!!');
    
     
    }) 
   
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

          <td>  
            <Link to={"/Courselist"}>
              <button type="button" onClick={this.DeleteLO} className="btn btn-danger">Delete</button> 
              </Link>                 
          </td>

          <td>  
            <Link to={`/EditLO/${ this.props.obj.id }`} target="_blank">
              <button type="button"  className="btn btn-success">Edit LO</button> 
              </Link>                 
          </td>
      </tr> 
    );
      // /${this.props.obj.loid}/${this.props.obj.name}/${this.props.dataFromParent}
  }  
}  
  
export default LOTable; 