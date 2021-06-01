import React from 'react';
import axios from 'axios';   
import { Container, Col, Form,FormGroup, Label, Input, Button } from 'reactstrap';  
import Logo from '../logo.jpg';
import { Route, BrowserRouter,Link,Switch} from 'react-router-dom'

class EditLO extends React.Component{  
  constructor(props){  
  super(props)  
  this.state = {  
      id:'',
  loid:'',  
  name:'',
  lmarks:0,
  ModuleId:'',   
  } 
  
  }   
  AddLO=()=>{  
    axios.put('https://localhost:5001/api/LOes1/'+this.props.match.params.vlid, {lmarks:parseInt(this.state.lmarks)+10 ,
    id:this.props.match.params.vlid,
    loid:this.props.match.params.vloid,
    name:this.props.match.params.vloname,
    ModuleId:this.props.match.params.vmoduleid,
   })  
    
  .then(json => {  
      console.log(json.data.Status);  
      alert("Edited Successfully "+this.props.match.params.vlid); 
      window.open("", "_self");
    window.close(); 
      this.props.history.push('/LOlist') 
              }  
      )
  }

  onClose = () => {
    window.open("", "_self");
    window.close();
  }
         
      

  handleChange= (e)=> {  
  this.setState({[e.target.name]:e.target.value});  
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

    <Container className="App"> 
     
    <h4 className="PageHeading">Add Learning Outcomes </h4>  
    <Form className="form">  
      <Col>  

        <FormGroup row>  
          <Label for="lmarks" sm={2}>lmarks</Label>  
          <Col sm={10}>  
            <Input type="text" name="lmarks" onChange={this.handleChange} value={this.state.lmarks} placeholder="Enter Lmarks" />  
          </Col>  
        </FormGroup>  
           
      </Col>  
      <Col>  
        <FormGroup row>  
          <Col sm={5}>  
          </Col>  
          <Col sm={2}>  
          <button type="button" onClick={this.AddLO} className="btn btn-success">Submit</button>  
          </Col>  
          <Col sm={2}>  
            <Button color="danger" onClick={this.onClose}>Cancel</Button>
          </Col>  
          <Col sm={5}>  
          </Col>  
        </FormGroup>  
      </Col>  
    </Form>  
    
  </Container> 
 </div>  
    
  );
}

}

export default EditLO