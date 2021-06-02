import React, { Component } from 'react';  
import axios from 'axios';  
//import Table from './Tables';  
import Table from '../Feedback/Table';
import Logo from './logo.jpg';
import { Route,Link} from 'react-router-dom'
import  '../Feedback/Feedback.css'
import { trackPromise } from 'react-promise-tracker';



  
export default class ModuleList extends Component {  
  

  
  constructor(props) {  
      super(props);  
      this.state = {business: []};  
    }  
    
    componentDidMount(){  
      debugger;
      
      axios.get('https://localhost:44303/api/Modules')  
        .then(response => {  
          this.setState({ business: response.data });  
          debugger;  
  
        })
        .catch(function (error) {  
          console.log(error);  
        })  
    } 
    
      
    tabRow(){  
      return this.state.business.map(function(object, i){  
          return <Table obj={object} key={i} />;  
      });  
    }  
  
    render() {  
      return (  
        <div>  
              <div class= "header">
          <img src={Logo} alt ='weblogo' />
          <h1>
              <Link className="header" to='/'>
                  Faculty of Engineering University of Ruhuna
              </Link>
          </h1>
                            
          <h2>Outcome Based Education System</h2>

        </div>

        <div class ="title">            
        </div>
          <h4 align="center">Enrolled Courses</h4>  
          <div>
          <table class="table table-light"  style={{ marginTop: 10 }}>  
            <thead>  
              <tr>  
                <th >CourseId</th>  
                <th >Name</th>  
                <th >Feedback Option</th>  
              </tr>  
            </thead>  
            <tbody>  
             { this.tabRow() }   
            </tbody>  
          </table> 
          </div> 
        </div>  
      );  
    }  
    
  }  
