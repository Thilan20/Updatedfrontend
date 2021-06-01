import React from 'react';  
import axios from 'axios';   
import { Container, Col, Form,FormGroup, Label, Input, Button } from 'reactstrap';  
//import FeedbackCourse from './Feedback';
import Logo from '../../photos/logo.jpg';
import { Link, Redirect} from 'react-router-dom'
import './Feedback.css'

class FeedbackCourse extends React.Component{  
constructor(props){  
super(props)  
this.state = {  
moduleId:'', 
q1:'',q2:'',q3:'',q4:'',q5:'',q6:'',q7:'',q8:'',q9:'',q10:'',

} 

}   
Feedbackcourse=()=>{  
 
  axios.post('https://localhost:44303/api/feedbacks', {moduleId:this.state.moduleId,q1:this.state.q1,q2:this.state.q2,q3:this.state.q3,
  q4:this.state.q4,q5:this.state.q5,q6:this.state.q6,q7:this.state.q7,q8:this.state.q8,q9:this.state.q9,q10:this.state.q10 })  
.then(json => { 
  console.log(json.data.Status);  
  alert("Data Save Successfully"); 
  
 
//this.props.history.push('/ModuleList')  
}  
 
  
 
)  
}  
   
handleChange= (e)=> {  
    this.setState({[e.target.name]:e.target.value});  

   

}  
   
render() {  
return (  
    <div>
        <div className= "header">

                         <img src={Logo} alt ='weblogo' />
                           <h1>
                           <Link className="header" to='/'  >
                                Faculty of Engineering University of Ruhuna
                                </Link>
                                </h1>
                            
                            <h2>Outcome Based Education System</h2>

                    </div>

      <div className="container">
    
       
<form >
  <div className="container">
    <h1>Feedback Form</h1>
    <p>Please fill in this form From 1-5 to to give Feedback to the relevant course</p>
    <div>
        5-Very Satisfied  4-Satisfied 3-Moderate 2-Unsatisfied 1-Very bad
    </div>
    <Label  for="psw" style={{float:'left'}} ><b>Module Code</b></Label>
    <input type="text" placeholder="Enter Here" name="moduleId" onChange={this.handleChange} value={this.state.moduleId}  id="modulecode" required />
    <Label for="psw" style={{float:'left'}}><b>The lectures helped to improve knowledge</b></Label>
    <input type="number" placeholder="Please enter number between 1 to 5" name="q1" onChange={this.handleChange} value={this.state.q1}  id="q1"  min="1" max="5" required/>
	
    <Label for="psw" style={{float:'left'}}><b>The teacher was confident in teaching the subject</b></Label>
    <input type="number" placeholder="Please enter number between 1 to 5"  min="1" max="5" name="q2" onChange={this.handleChange} value={this.state.q2}  id="q2" required/>
        
     <Label for="psw" style={{float:'left'}}><b>The methods of teaching adopted were good (lectures,Tutorials,Presentations,Case Studies ,Discussions)</b></Label>
     <input type="number" placeholder="Please enter number between 1 to 5"  min="1" max="5" name="q3" onChange={this.handleChange} value={this.state.q3}  id="q3" required/>

    <Label for="psw" style={{float:'left'}}><b>The Lecture was conducted at all accepted pace</b></Label>
    <input type="number"placeholder="Please enter number between 1 to 5"  min="1" max="5" name="q4" onChange={this.handleChange} value={this.state.q4}  id="q4" required/>
    
    <Label for="psw" style={{float:'left'}}><b>The Teaching Aids were used effectively during the lecture(Chalkboard,Handouts,Slides,Specimens,Overhead Projector etc)</b></Label>
    <input type="number" placeholder="Please enter number between 1 to 5"   min="1" max="5" name="q5" onChange={this.handleChange} value={this.state.q5}  id="q5" required />

    <Label for="psw" style={{float:'left'}}><b>The teacher encouraged questions by students and discussed them.</b></Label>
    <input type="number" placeholder="Please enter number between 1 to 5"  min="1" max="5" name="q6" onChange={this.handleChange} value={this.state.q6}  id="q6" required/>

    <Label for="psw" style={{float:'left'}}><b>The lecturess were clear and interesting</b></Label>
    <input type="number" placeholder="Please enter number between 1 to 5"  min="1" max="5" name="q7" onChange={this.handleChange} value={this.state.q7}  id="q7" required/>

    <Label for="psw" style={{float:'left'}}><b>The lecturer was punctual</b></Label>
    <input type="number" placeholder="Please enter number between 1 to 5"  min="1" max="5" name="q8" onChange={this.handleChange} value={this.state.q8 } id="q8" required/>

    <Label for="psw" style={{float:'left'}}><b>The classes were conducted as indicated in the time table </b></Label>
    <input type="number" placeholder="Please enter number between 1 to 5"  min="1" max="5" name="q9" onChange={this.handleChange} value={this.state.q9}  id="q9" required/>

    <Label for="psw" style={{float:'left'}}><b>The syllabus/course outline given at the beginning was covered </b></Label>
    <input type="number" placeholder="Please enter number between 1 to 5"  min="1" max="5" name="q10" onChange={this.handleChange} value={this.state.q10}  id="q10" required/>
    
    <button type="submit" className="registerbtn"  onClick={this.Feedbackcourse} >Submit Feedback</button>
  </div>
  
 
</form>


      </div>
    </div>
);  
}  
   
}  
   
export default FeedbackCourse;