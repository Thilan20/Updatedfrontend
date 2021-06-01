import React, { Component } from 'react';  
import axios from 'axios';  
import Logo from '../logo.jpg';
import AddasComponentPOTable from '../PO/AddasComponentPOTable';  
  
export default class AddasComponentPO extends Component {  
  
  constructor(props) {  
      super(props);  
      this.state = {business: []};  
    }  
    componentDidMount(){  
      debugger;  
      axios.get('https://localhost:5001/api/POes')  
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
          return <AddasComponentPOTable obj={object} key={i} />;  
      });  
    }  
  
    render() {  
      return (  
        <div> 
          <h5 align="center">PO List</h5>  
          <table className="table table-striped" style={{ marginTop: 10 }}>  
            <thead>  
              <tr>  
                <th >POId</th>  
                <th >PO Name</th>
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
