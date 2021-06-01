import React, { Component } from 'react'
import axios from 'axios'
import ReactTable from "react-table"; 
import 'react-table/react-table.css'
import { Link } from 'react-router-dom'; 

export default class Test extends Component {
  constructor(props){
    super(props)
    this.state = {
      users: [],
      loading:true
    }
  }

  async getUsersData(){
    const res = await axios.get('https://localhost:5001/api/AsComponents')
    console.log(res.data)
    this.setState({loading:false, users: res.data})
  }
  componentDidMount(){
    this.getUsersData()
  }
  deelterecord= (id) =>{  
    axios.delete('https://localhost:5001/api/AsComponents/'+id)  
   .then(json => {  
   alert('Record deleted successfully!!');
   window.location.reload(false);  
    
   }) 
  
   } 
  render() {
    const columns = [{  
      Header: 'Assignment Component',  
      accessor: 'ascomponent',
     }
     ,{  
      Header: 'LOID',  
      accessor: 'loid' ,
      }
     
     ,{  
     Header: 'POID',  
     accessor: 'poid' ,
     }
     ,{  
     Header: 'Marks',  
     accessor: 'marks',
     cell: 'EditableNumberCell'
     },
     {  
      Header: 'Learning Domain',  
      accessor: 'ld',
      },
      {  
        Header: 'Type',  
        accessor: 'type',
        },
        
        {  
          Header: 'Delete',  
          Cell: props => {
            return(
              <button className= "btn btn-danger"  
              > Delete</button>
            )
          }
          },
  ]
    return (
      <ReactTable  
      data={this.state.users}  
      columns={columns}  
   />
    )
  }
}

