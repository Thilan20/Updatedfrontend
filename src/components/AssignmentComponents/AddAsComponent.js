import React from 'react';
import axios from 'axios';   
import { Container, Col, Form,FormGroup, Label, Input, Button } from 'reactstrap';  
import { Route, BrowserRouter,Link,Switch} from 'react-router-dom'
import AddasComponentLO from'../LO/AddasComponentLO'
import AddasComponentPO from'../PO/AddasComponentPO'

class AddAsComponent extends React.Component{  
  constructor(props){  
  super(props)  
  this.state = {  
    ascomponent:'',
  loid:'',  
  poid:'',
  marks:'',
  ld:'',
  type:''
  
  } 
  
  }   
  AddAsComponent=()=>{  
    console.log()
    axios.post('https://localhost:5001/api/AsComponents', {ascomponent:this.state.ascomponent,
    loid:this.state.loid,
  poid:this.state.poid,
  marks:this.state.marks,
  ld:this.state.ld,
  type:this.state.type,
  ModuleId:this.props.match.params.value1})  
    
  .then(json => {  
      console.log(json.data.Status);  
      alert("Data Save Successfully to " +this.props.match.params.value1); 
      this.props.history.push( `/AsComponent/${this.props.match.params.value1}`) 
              }  
      )
  }

  onClose = () => {
      this.props.history.push(`/AsComponent/${this.props.match.params.value1}`);
  }
         
      

  handleChange= (e)=> {  
  this.setState({[e.target.name]:e.target.value});  
  }  
    

  render() {  
  return (
    
    <Container className="App">        
     
    <h4 className="PageHeading">Add Learning Outcomes </h4>  
    <Form className="form">  
      <Col>
      <FormGroup row>  
          <Label for="ascomponent" sm={2}>Assignment Component</Label>  
          <Col sm={10}>  
            <Input type="text" name="ascomponent" onChange={this.handleChange} value={this.state.ascomponent} placeholder="Enter Assignment Component" />  
          </Col>  
        </FormGroup>  
         
        <FormGroup row>  
          <Label for="loid" sm={2}>LOID</Label>  
          <Col sm={10}>  
            <Input type="text" name="loid" onChange={this.handleChange} value={this.state.loid} placeholder="Enter LO Id" />  
          </Col>  
        </FormGroup>
        <FormGroup row>  
          <Label for="poid" sm={2}>POID</Label>  
          <Col sm={10}>  
            <Input type="text" name="poid" onChange={this.handleChange} value={this.state.poid} placeholder="Enter PO Id" />  
          </Col>  
        </FormGroup>  
          
        <FormGroup row>  
          <Label for="marks" sm={2}>Marks</Label>  
          <Col sm={10}>  
            <Input type="text" name="marks" onChange={this.handleChange} value={this.state.marks} placeholder="Enter Marks" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="ld" sm={2}>Learning Domain</Label>  
          <Col sm={10}>  
            <Input type="text" name="ld" onChange={this.handleChange} value={this.state.ld} placeholder="C1/C2/C3/C4/P/E" />  
          </Col>  
        </FormGroup> 
        <FormGroup row>  
          <Label for="type" sm={2}>Type</Label>  
          <Col sm={10}>  
            <Input type="text" name="type" onChange={this.handleChange} value={this.state.type} placeholder="C/E" />  
          </Col>  
        </FormGroup>  
         
            
      </Col>  
      <Col>  
        <FormGroup row>  
          <Col sm={5}>  
          </Col>  
          <Col sm={2}>  
          <button type="button" onClick={this.AddAsComponent} className="btn btn-success">Submit</button>  
          </Col>  
          <Col sm={2}>  
            <Button color="danger" onClick={this.onClose}>Cancel</Button>
          </Col>  
          <Col sm={5}>  
          </Col>  
        </FormGroup>  
      </Col>
        <FormGroup row>
            <div class="column">
                <AddasComponentLO  dataFromParent = {this.props.match.params.value1}/>
            </div>
                   </FormGroup>  
    </Form>  
    
  </Container>  
    
  );
}

}

export default AddAsComponent