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
      axios.get('https://localhost:5001/api/POes?id='+this.props.match.params.value)  
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

          <h4 align="center">PO List</h4>  
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
