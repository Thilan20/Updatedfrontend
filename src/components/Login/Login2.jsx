import React, { useState, useEffect } from 'react'   
import axios from 'axios';  
import Logo from './logo.jpg';
import Avatar from './img_avatar.png';
import Gate from './gate.jpg';
import jwt_decode from "jwt-decode";


import { Container, Col, Form,FormGroup, Label, Input, Button } from 'reactstrap';  
import { Dropdown,DropdownButton} from 'react-bootstrap';




function Login2(props) {  
    const [employee, setemployee] = useState({ email: '', password: ''});  
    const apiUrl = "https://localhost:5001/api/Accounts/login";    
    const Login = (e) => {    
            e.preventDefault();    
            debugger;   
            const data = { email:employee.email, 
              password: employee.password };    
            axios.post(apiUrl, data)    
            .then((result) => {    
                debugger;  
               // result.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");

                console.log(result.data);   
                const serializedState = JSON.stringify(result.data[1]);  
                console.log(serializedState);
                var decoded = jwt_decode(serializedState);
                 console.log(decoded);
               var a= localStorage.setItem('myData', serializedState); 
               localStorage.setItem('username',result.data[2])
             
              console.log("A:",a)  
                console.log(result.data.message);  
                if (result.data[0] == 'Lecturer')    
                    props.history.push('/lecturer')    
                else if(result.data[0] == 'Student')   
                {
                  props.history.push('/student')
                }
                else if (result.data[0] == 'Administrator') 
                {
                  props.history.push('/admin')

                }
                else
                {
                  alert('Invalid User');  

                }
                 
            })        
          };    
          
          const onChange = (e) => {    
                e.persist();    
                debugger;    
                setemployee({...employee, [e.target.name]: e.target.value});    
              }    
    return (  

   
        <div>
        <div className= "header">

                         <img src={Logo}    alt ='weblogo' />
                        <h1>Faculty of Engineering University of Ruhuna</h1>
                        <h2>Outcome Based Education System</h2>
                    </div>
                    <div class="dropdown">
                    <div class="dropdown">
 
</div>
</div>

        <div className ="title">
            <h2>Login Page</h2>
            <div className="row">
                <div className="column ">
                   

                        <form >
                                <div className="imgcontainer">
                                    <img src={Avatar} alt="Avatar" className="avatar"/>
                                </div>

                                <div className="container">
                                    <Label for="uname"><b>Email</b></Label>
                                    <Input type="email" value={employee.email} onChange={ onChange }  name="email" id="Email" aria-describedby="emailHelp" placeholder="Enter Email" required/>

                                    <Label for="psw"><b>Password</b></Label>
                                    <Input type="password" value={employee.password} onChange={ onChange }  name="password" id="DepPasswordartment" placeholder="Password"  required/>
                                        
                                    <Button type="submit" onClick={Login}>Login  </Button>
                                   
                                </div>

                                <div className="container" >
                                    <Button type="button"  className="cancelbtn">Cancel</Button>
                                    
                                </div>
                            </form>


                </div>
                <div className="column "  >
                    <img src={Gate}  className ="image"  height="340" width=" 650"alt ='gatelogo' />
                </div>
            </div>    
        </div>



    </div>
    )  
}  
  
export default Login2