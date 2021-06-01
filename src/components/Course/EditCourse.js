import React from 'react';   
import { Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';  
import axios from 'axios'  

class Edit extends React.Component {  
    constructor(props) {  
        super(props)  
     
    this.onChangeModuleId = this.onChangeModuleId.bind(this);  
    this.onChangeName = this.onChangeName.bind(this);  
    this.onSubmit = this.onSubmit.bind(this);  
  
         this.state = {  
            moduleId: '',  
            name: '',  
  
        }  
    }  
    
  
  componentDidMount() {  
      axios.get('https://localhost:5001/api/Modules/'+this.props.match.params.moduleId)  
          .then(response => {  
              this.setState({   
                ModuleId: response.data.moduleId,   
                Name: response.data.name,   });  
                    debugger;           //debug
          })  
          .catch(function (error) {  
              console.log(error);  
          })  
    }  
  
  onChangeModuleId(e) {  
    this.setState({  
        moduleId: e.target.value  
    });  
  }  
  onChangeName(e) {  
    this.setState({  
        name: e.target.value  
    });    
  }  

  
  onSubmit(e) {  
    debugger;  
    e.preventDefault();  
    const obj = {  
       // Id:this.props.match.params.id,  
      moduleId: this.state.moduleId,  
      name: this.state.name,  
  
    };  
    axios.post('https://localhost:5001/api/Modules/', obj)  
        .then(res => console.log(res.data));  
        debugger;  
        this.props.history.push('/Courselist')  
  }  
    render() {  
        return (  
            <Container className="App">  
  
             <h4 className="PageHeading">Update Module Informations</h4>  
                <Form className="form" onSubmit={this.onSubmit}>  
                    <Col>  
                        <FormGroup row>  
                            <Label for="moduleId" sm={2}>ModuleId</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="moduleid" value={this.state.moduleId} onChange={this.onChangeModuleId}   // ModuleId
                                placeholder="Enter ModuleId" />  
                            </Col>  
                        </FormGroup>  
                        <FormGroup row>  
                            <Label for="name" sm={2}>Name</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="Name" value={this.state.name} onChange={this.onChangeName} placeholder="Enter New Name" />  
                            </Col>  
                        </FormGroup>  
                          
                    </Col>  
                    <Col>  
                        <FormGroup row>  
                            <Col sm={5}>  
                            </Col>  
                            <Col sm={2}>  
                          <Button type="submit" color="success">Submit</Button>{' '}  
                            </Col>  
                            <Col sm={2}>  
                                <Button color="danger">Cancel</Button>{' '}  
                            </Col>  
                            <Col sm={5}>  
                            </Col>  
                        </FormGroup>  
                    </Col>  
                </Form>  
            </Container>  
        );  
    }  
  
}  
  
export default Edit;  