import React, { Component } from 'react';  
import axios from 'axios';  
//import { Link } from 'react-router-dom';  
import ModuleList from '../Feedback/ModuleList'
import { Route,Link} from 'react-router-dom'


class Table extends Component {  
  

  constructor(props) {  
    super(props);  
    }
      
   
     
  render() {  
    return (  
        <tr>
          <div>
          <td >  
            {this.props.obj.moduleId}  
           
          </td>  
          </div>
            <td >  
                    {this.props.obj.name}  
           </td> 
          
          <td>  
            <Link to={"/feedback"}>
              <button type="button"  className="btn btn-success" >Give Feedback</button> 
              </Link>                 
          </td>
           {/* { <td>  
            <Link to={"/"}>
              <button type="button"  className="btn btn-success">Add PO</button> 
              </Link>                 
          </td>
          <td>  
             
            <Link to={"../Lecturer/CourseDetails"}>
              <button type="button"  className="btn btn-danger">Details</button> 
              </Link>
                            
          </td>   
          } */}
        </tr> 
      
    );
      
  }  
}  
  
export default Table; 