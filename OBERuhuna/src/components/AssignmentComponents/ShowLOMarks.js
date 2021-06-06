import React, { Component } from 'react';  
import axios from 'axios';  

export default class ShowLOMarks extends Component {  
  
  constructor(props) {  
      super(props);  
      this.state = {business: [],
        total:0}
       
    }  
    componentDidMount(){  
      debugger;  
      axios.get('https://oberuhunaapi.azurewebsites.net//api/LOes?id='+this.props.dataFromParent)  
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

    totalmarks(LO){
      this.state.total= parseInt(this.state.total)+parseInt(LO.lmarks)
    }
      
    tabRow(){  
      return this.state.business.map(LO=> {
        return(
            <tr key={LO.id}>
              <td >{LO.loid}</td>
              <td>{LO.lmarks} </td>
              {this.totalmarks(LO)}                   
              </tr>
        )
      });     
    } 
    resettotal(){
      {this.state.total=0}
    } 
    
    render() {  
      return (    
        <div>

            <h6 align="center">
              <strong>LO Total Marks</strong>
            </h6>
              
          <table className="table table-striped" style={{ marginTop: 10 }}>  
            <thead>  
              <tr>  
                <th >LOId</th>  
                <th >Marks</th>
   
              </tr>  
            </thead>  
            <tbody>  
             { this.tabRow() } 
             <tr>
               <td> Total</td>
               <td>{this.state.total }</td>
               {this.resettotal()}
               </tr>  
            </tbody>  

          </table>  
          
        </div>  
      );  
    }  
  }  
