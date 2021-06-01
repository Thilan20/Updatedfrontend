import React, { Component, useEffect,useState,setState } from 'react';  
import axios from 'axios';  
//import { Link } from 'react-router-dom';  
import { Route,Link} from 'react-router-dom'



class AsComponentTable extends Component {  
  

  constructor(props) {  
    super(props);  
    this.state = {  
      LO:{
        id:'',
        loid:'',
        lmarks:0,
        name:'',
        moduleId:''
      }
      ,
      PLO:{},
      nm:'',
      mks:0
    } 
    const pk = 0;
//   this.LO =this.LO.bind(this);  
  // this.nm=this.nm.bind(this);
      }
    getascomponent(asID){    
          axios.get('https://localhost:5001/api/AsComponents1/' +asID)

      .then(response =>{
        console.log(response);
         this.setState({name:response.name})});


      debugger;  
  

     

    }
    getlo(iid){
      debugger
      
      axios.get('https://localhost:5001/api/LOes1/'+iid)
     .then(response => {
            this.setState({mks:response.data.lmarks,nm:response.data.name})
            console.log(response.data);
            console.log (this.state.mks);
            console.log(this.state.nm);
          return(this.state.nm, this.state.mks)
    })
    debugger;  
    }



    DeleteAsComponent= () =>{  
   //this.getascomponent(this.props.obj.asID);
    
   console.log(this.props.obj.lid);  //Test whether data is correct
    this.getlo(this.props.obj.lid);
    
    console.log(this.state.nm);
    console.log(this.props.obj.moduleId);
    console.log(this.props.obj.marks);
    console.log(this.state.mks);
    debugger;


   axios.put('https://localhost:5001/api/LOes1/'+this.props.obj.lid,
    {
    lmarks:parseInt(this.props.obj.lmarks)-parseInt(this.props.obj.marks) ,
    id:this.props.obj.lid, 
    loid:this.props.obj.loid,
    ModuleId:this.props.obj.moduleId,
    name:this.props.obj.name
  })

     axios.delete('https://localhost:5001/api/AsComponents/'+this.props.obj.asID)  
    .then(json => {  
    alert('Record deleted successfully!!');
    debugger;  
    window.location.reload(false);  
     
    }) 
   
    } 

  
     
  render() {  
    
    return ( 
       
        <tr >  
          <div class=" col-md-1 offset-md-3">
            <td >  
              {this.props.obj.ascomponent}  
            </td>
            
          </div>      
          
            <td >  
              {this.props.obj.loid}  
            </td> 

           <td >  
              {this.props.obj.poid}  
            </td>

            <td >  
              {this.props.obj.marks}  
            </td>
            <td class=" offset-md-3" >  
              {this.props.obj.ld}  
            </td>
            <td >  
              {this.props.obj.type}  
            </td>
          <td>  
            <Link to={`/AsComponent/${this.props.dataFromParent}`}>
              <button type="button" onClick={this.DeleteAsComponent} className="btn btn-danger">Delete</button> 
              </Link>                 
          </td>
          
     </tr> 
      
    );
      
  }  
}  
  
export default AsComponentTable; 