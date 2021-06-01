import React, { Component } from 'react';  
import axios from 'axios';  
import Table from '../Lecturer/Table';  

export default class Courselist extends Component {  
  
  constructor(props) {  
      super(props);  
      this.state = {business: []};  
    }  
    componentDidMount(){  
      debugger;  
      axios.get('https://localhost:5001/api/Modules')  
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
          <h4 align="center">Course List</h4>  
          <table className="table table-striped" style={{ marginTop: 10 }}>  
            <thead>  
              <tr>  
                <th>CourseId</th>  
                <th>Name</th>   
                <th colSpan="4">Action</th> 
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
