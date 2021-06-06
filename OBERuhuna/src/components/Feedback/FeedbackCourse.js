import axios from 'axios';   
import React, { useState, useEffect } from 'react'   

import { Container, Col, Form,FormGroup, Label, Input, Button } from 'reactstrap';  
//import FeedbackCourse from './Feedback';
import './Feedback.css'

function FeedbackCourse(props){ 
  var URL = window.location.pathname
  var ModuleIdFeedback = URL.slice(16);
  console.log( ModuleIdFeedback);

  const [feedback, setfeedback] = useState({ moduleId:'', 
  q1:'',q2:'',q3:'',q4:'',q5:'',q6:'',q7:'',q8:'',q9:'',q10:'',
  });  

 






  const apiUrl = "https://oberuhunaapi.azurewebsites.net//api/Feedbacks";    
  const feedbackFunc = (e) => {    
          e.preventDefault();    
          debugger;   
          const data = {moduleId:ModuleIdFeedback,q1:feedback.q1,q2:feedback.q2,q3:feedback.q3,
             q4:feedback.q4,q5:feedback.q5,q6:feedback.q6,q7:feedback.q7,q8:feedback.q8,q9:feedback.q9,q10:feedback.q10 };    
          axios.post(apiUrl,  data)    
          .then((result) => {    
              debugger;  
              alert("Data Saved Successfully")
              props.history.push("/Student")
              console.log(result);
             
              
               
          })        
        };    
        
        const onChange = (e) => {    
              e.persist();    
              debugger;    
              setfeedback({...feedback, [e.target.name]: e.target.value});    
            }    



return (  
    <div>
        

      <div className="container">
    
       
<form >
  <div className="container">
    <h1>Feedback Form</h1>
    <p>Please fill in this form From 1-5 to to give Feedback to the relevant course</p>
    <div>
        5-Very Satisfied  4-Satisfied 3-Moderate 2-Unsatisfied 1-Very bad
    </div>
    <Label  for="psw" style={{float:'left'}} ><b>Module Code</b></Label>
    <input type="text" placeholder={ModuleIdFeedback} name="moduleId" onChange={ onChange } value= {ModuleIdFeedback}  id="modulecode" required />
    <Label for="psw" style={{float:'left'}}><b>The lectures helped to improve knowledge</b></Label>
    <input type="number" placeholder="Please enter number between 1 to 5" name="q1"onChange={ onChange } value={feedback.q1}  id="q1"  min="1" max="5" required/>
	
    <Label for="psw" style={{float:'left'}}><b>The teacher was confident in teaching the subject</b></Label>
    <input type="number" placeholder="Please enter number between 1 to 5"  min="1" max="5" name="q2" onChange={ onChange } value={feedback.q2}  id="q2" required/>
        
     <Label for="psw" style={{float:'left'}}><b>The methods of teaching adopted were good (lectures,Tutorials,Presentations,Case Studies ,Discussions)</b></Label>
     <input type="number" placeholder="Please enter number between 1 to 5"  min="1" max="5" name="q3" onChange={ onChange } value={feedback.q3}  id="q3" required/>

    <Label for="psw" style={{float:'left'}}><b>The Lecture was conducted at all accepted pace</b></Label>
    <input type="number"placeholder="Please enter number between 1 to 5"  min="1" max="5" name="q4" onChange={ onChange } value={feedback.q4}  id="q4" required/>
    
    <Label for="psw" style={{float:'left'}}><b>The Teaching Aids were used effectively during the lecture(Chalkboard,Handouts,Slides,Specimens,Overhead Projector etc)</b></Label>
    <input type="number" placeholder="Please enter number between 1 to 5"   min="1" max="5" name="q5" onChange={ onChange } value={feedback.q5}  id="q5" required />

    <Label for="psw" style={{float:'left'}}><b>The teacher encouraged questions by students and discussed them.</b></Label>
    <input type="number" placeholder="Please enter number between 1 to 5"  min="1" max="5" name="q6" onChange={ onChange } value={feedback.q6}  id="q6" required/>

    <Label for="psw" style={{float:'left'}}><b>The lecturess were clear and interesting</b></Label>
    <input type="number" placeholder="Please enter number between 1 to 5"  min="1" max="5" name="q7" onChange={ onChange } value={feedback.q7}  id="q7" required/>

    <Label for="psw" style={{float:'left'}}><b>The lecturer was punctual</b></Label>
    <input type="number" placeholder="Please enter number between 1 to 5"  min="1" max="5" name="q8" onChange={ onChange } value={feedback.q8 } id="q8" required/>

    <Label for="psw" style={{float:'left'}}><b>The classes were conducted as indicated in the time table </b></Label>
    <input type="number" placeholder="Please enter number between 1 to 5"  min="1" max="5" name="q9" onChange={ onChange } value={feedback.q9}  id="q9" required/>

    <Label for="psw" style={{float:'left'}}><b>The syllabus/course outline given at the beginning was covered </b></Label>
    <input type="number" placeholder="Please enter number between 1 to 5"  min="1" max="5" name="q10"onChange={ onChange } value={feedback.q10}  id="q10" required/>
    
    <button type="submit" className="registerbtn"  onClick={feedbackFunc} >Submit Feedback</button>
  </div>
  
 
</form>


      </div>
    </div>
) 
   
}  
   
export default FeedbackCourse