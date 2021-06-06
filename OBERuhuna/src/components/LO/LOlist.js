import React, { Component } from 'react';  
import axios from 'axios';  
import LOTable from '../LO/LOTables';  
import {Link} from 'react-router-dom'
  
export default class LOlist extends Component {  
  
  constructor(props) {  
      super(props);  
      this.state = {business: []};  
    }  
    componentDidMount(){  
      debugger;  
      axios.get('https://oberuhunaapi.azurewebsites.net//api/LOes?id='+this.props.match.params.value)  
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
      
    tabRow(mid=this.props.match.params.value){  
      return this.state.business.map(function(object, i){  
          return <LOTable dataFromParent={mid} obj={object} key={i} />;  
      });  
    }  
    
    render() {  
      return (    
        <div>  

        <div class="w3-container" >
            <div class="w3-bar w3-blue">
          <h3 align="center"><strong>Learning Outcome List of Module {this.props.match.params.value}</strong></h3></div></div><br></br>


          <table className="table table-striped" style={{ marginTop: 10 }}>  
            <thead>  
              <tr>  
                <th >LOId</th>  
                <th >LO Name</th>
                <th> </th>
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
