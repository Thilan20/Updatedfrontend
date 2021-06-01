import React, { Component } from 'react';  
import axios from 'axios';  
import Logo from '../logo.jpg';
import POTable from '../PO/POTables';  
import {Link} from 'react-router-dom'
  
export default class POlist extends Component {  
  
  constructor(props) {  
      super(props);  
      this.state = {business: []}; 

    }  
    
    componentDidMount(){  
      debugger;  
//      axios.get('https://localhost:5001/api/POes?id='+this.props.match.params.value) 
      axios.get('https://localhost:5001/api/POes1')  //PO from lecturer page
        .then(response => {  
          this.setState({ business: response.data });  
          debugger;  
  
        })  
        .catch(function (error) {  
          console.log(error);  
        })  
    }  
      
    tabRow(mid=this.props.match.params.value){  
      return this.state.business.map(function(object, i){  
          return <POTable  dataFromParent = {mid} obj={object} key={i} />;  
      });  
    }  
  
    render() {  
      return (  
        <div>  
         <div class= "header">
          <img src={Logo} alt ='weblogo' />
          <h1>
              <Link className="header" to='/'  >
                  Faculty of Engineering University of Ruhuna
              </Link>
          </h1>
                            
          <h2>Outcome Based Education System</h2>

        </div>
        
        <div class="column col-md-1 offset-md-5">
            <h4 align="center">PO List</h4>  
        </div>
        <div class="column col-md-2 offset-md-4">
            <Link to={`/AddPO`} >
                  <button type="button"  className="btn btn-success">Add PO</button> 
            </Link>
        </div>
          <table className="table table-striped" style={{ marginTop: 10 }}>  
            <thead>  
              <tr>  
                <th >POId</th>  
                <th >PO Name</th>
                
                <th> Delete</th>   
              </tr>  
            </thead>  
            <tbody>  
             { this.tabRow() }   
            </tbody>  
          </table>  
        </div>  
      );  
    }  
  }  
