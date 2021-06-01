import React, { Component } from 'react';  
import axios from 'axios';  
import CourseDetails from '../Lecturer/CourseDetails'

import LO from '../LO/AddLO'

import { Route,Link} from 'react-router-dom'


class Table extends Component {  
  

  constructor(props) {  
    super(props);  
    }
      
   
     
  render() {  
    return ( 
        <tr colSpan="4">
          <div class=" offset-md-4">
            
          <td >  
            {this.props.obj.moduleId}  
          </td>  
          </div>
        
            <td >  
                    {this.props.obj.name}  
           </td> 
           <td>
            <Link to={'/results/'+this.props.obj.moduleId} >
              <button type="button" className="btn btn-success" > Results</button>
            </Link>
          </td>
          <td>
            <Link to={'/ /'+this.props.obj.moduleId} >
              <button type="button" className="btn btn-success" > Feedback</button>
            </Link>
          </td>
           <td>
            <Link to={ `/Ascomponent/${ this.props.obj.moduleId }`} target="_blank" >
              <button type="button" className="btn btn-success" > Assessment Components</button>
            </Link>
          </td>
          <td> 

            <Link to={`/AddLO/${ this.props.obj.moduleId }`} target="_blank" >
              <button type="button"  className="btn btn-success">Add LO</button> 
              </Link>
          </td>
          
          <td>
           <Link to={`/LOlist/${ this.props.obj.moduleId }`} >   
              <button type="button"  className="btn btn-danger">Details</button> 
              </Link>
                            
          </td>  
        </tr> 
      
    );
      
  }  
}  
  
export default Table; 