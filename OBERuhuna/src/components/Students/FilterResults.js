import React, { Component } from 'react';  
import { Link} from 'react-router-dom'
import axios from 'axios';  
import Table2 from '../Lecturer/Table2';  
import Logo from '../logo.jpg';


export default class FilterResults extends Component {  

  constructor(props) {  

      super(props);  
      this.state = {business: []};  
    }  
    componentDidMount(){  
      debugger;  
      console.log(this.props.match.params.moduleId);
      axios.get('https://sheetdb.io/api/v1/x56s2u7t66fhe?sheet='+this.props.match.params.moduleId)  
        .then(response => {  
          this.setState({ business: response.data });  
      
        })  
        .catch(function (error) {  
          console.log(error);  
        })  
    }  
      
    tabRow(){  
      return this.state.business.map(function(object, i){  
          return <Table2 obj={object} key={i} />;  
      });  
    }  
  
    render() {  
      return (  
        <div >  
        
        <div  >
          <h4 align="center">LO List</h4>  
          <table allign="left" className="table table-striped " >  
            <thead >  
              <tr >  
                <th >REG_NO</th>   
                <th >LO1</th> 
                <th >LO2</th> 
                <th>LO3</th> 
                <th >LO4</th> 
                <th>LO5</th> 
                <th >Total</th> 
              </tr>  
            </thead>  
            <tbody  >  
             { this.tabRow() }   
            </tbody>  
          </table>  
        </div>  </div>
      );  
    }  
  }  
