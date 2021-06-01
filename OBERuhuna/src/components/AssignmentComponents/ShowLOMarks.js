import React, { Component } from 'react';  
import axios from 'axios';  
import ShowLOMarksTable from './ShowLOMarksTable'  
export default class ShowLOMarks extends Component {  
  
  constructor(props) {  
      super(props);  
      this.state = {business: []};  
    }  
    componentDidMount(){  
      debugger;  
      axios.get('https://localhost:5001/api/LOes?id='+this.props.dataFromParent)  
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
          return <ShowLOMarksTable obj={object} key={i} />;  
      });  
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
            </tbody>  
          </table>  
        </div>  
      );  
    }  
  }  
