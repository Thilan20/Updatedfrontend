import React, { Component } from 'react';  
import axios from 'axios';  
import Logo from './logo.jpg';
import LOTable from '../LO/LOTables';  
import {Link} from 'react-router-dom'
  
export default class LOlist extends Component {  
  
  constructor(props) {  
      super(props);  
      this.state = {business: []};  
    }  
    componentDidMount(){  
      debugger;  
      axios.get('https://localhost:5001/api/LOes?id='+this.props.match.params.value)  
        .then(response => {  
      
          this.setState({ business: response.data });
          console.log(json.data.Status);  
          alert("LOs of  "+this.props.match.params.value);
             
          debugger;  
  
        })  
        .catch(function (error) {  
          console.log(error);  
        })  
    }  
      
    tabRow(){  
      return this.state.business.map(function(object, i){  
          return <LOTable obj={object} key={i} />;  
      });  
    }  
    
    render() {  
      return (    
        <div>  
         
          <h4 align="center">LO List</h4>  
          <table className="table table-striped" style={{ marginTop: 10 }}>  
            <thead>  
              <tr>  
                <th >LOId</th>  
                <th >LO Name</th>
                <th>PO</th>
                <th> Delete</th>   
                <th>PO List</th>
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
