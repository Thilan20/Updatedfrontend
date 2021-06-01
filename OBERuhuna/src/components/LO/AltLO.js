import React, { Component } from 'react';  
import axios from 'axios';  
import Logo from './logo.jpg';
import LOTable from '../LO/LOTables';  
import {Link} from 'react-router-dom'
  
export default class AltLO extends Component {  
  
  constructor(props) {  
      super(props);  
      this.state = {business: []};  
    }  
    componentDidMount(){  
      debugger;  
      axios.get('https://localhost:5001/api/LOes/'+this.props.dataid)  
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
        obj={object},
         key={i}
         datafromchild = this.props.object.loid  
          return datafromchild;  
      });  
    }  
    
    render() {  
      return (    
        <div>  
         {this.tabRow()}
          </div>  
      );  
    }  
  }  
