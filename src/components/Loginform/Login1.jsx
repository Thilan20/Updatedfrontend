import React, { useState, useEffect } from 'react'   
import axios from 'axios';  
function Login1(props) {  
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
               var a= localStorage.setItem('myData', serializedState); 
             
              console.log("A:",a)  
                console.log(result.data.message);  
                if (result.data[0] == 'Lecturer')    
                    props.history.push('/lecturer')    
                else if(result.data[0] == 'User')   
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
        
        <div className="container">  
        <div className="row justify-content-center">  
          <div className="col-xl-10 col-lg-12 col-md-9">  
            <div className="card o-hidden border-0 shadow-lg my-5">  
              <div className="card-body p-0">  
                <div className="row">  
                  <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>  
                  <div className="col-lg-6">  
                    <div className="p-5">  
                      <div className="text-center">  
                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>  
                      </div>  
                      <form onSubmit={Login} className="user">  
                        <div className="form-group">  
                          <input type="email" className="form-control" value={employee.email} onChange={ onChange }  name="email" id="Email" aria-describedby="emailHelp" placeholder="Enter Email"/>  
                        </div>  
                        <div className="form-group">  
                          <input type="password" className="form-control" value={employee.password} onChange={ onChange }  name="password" id="DepPasswordartment" placeholder="Password"/>  
                        </div>  
                        {/* <div class="form-group">  
                          <div class="custom-control custom-checkbox small">  
                            <input type="checkbox" class="custom-control-input" id="customCheck"/>  
                            <label class="custom-control-label" for="customCheck">Remember Me</label>  
                          </div>  
                        </div> */}  
                        <button type="submit" className="btn btn-info mb-1" onClick={Login} ><span>Login</span></button>    
                        <hr/>  
                      </form>  
                      <hr/>  
                    </div>  
                  </div>  
                </div>  
              </div>  
            </div>  
           </div>  
          </div>  
        </div>  
    )  
}  
  
export default Login1