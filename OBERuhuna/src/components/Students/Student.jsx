import React from 'react'
import Logo from './logo.jpg';
import { Route, BrowserRouter,Link,Switch} from 'react-router-dom';
import Courselist from './Courselist';
import Filter2 from './FilterResults';
import ViewLO from './AddasComponentLO';
import FeedbackCourse from '../Feedback/FeedbackCourse';
import { left, right } from '@popperjs/core';
import { Dropdown,DropdownButton} from 'react-bootstrap';


  function Student(props) {

  const onLogoutHandler = (e) => {
      e.preventDefault();
      localStorage.removeItem('myData');
     props.history.push('/')
    }

    var user =localStorage.getItem('username');
    console.log(user);

  return (
    <div>
<div class= "header">
          <img src={Logo} alt ='weblogo' />
         
          <h1>
              <Link className="header" to='/'  >
                  Faculty of Engineering University of Ruhuna
              </Link>

              
              <DropdownButton id="dropdown-basic-button" title={user} style ={{float:right}}>
  <Dropdown.Item href="/Student"> Dashboard</Dropdown.Item>
  <Dropdown.Item  onClick={onLogoutHandler}>Logout</Dropdown.Item>
</DropdownButton> 
          </h1>
                        
          <h2>Outcome Based Education System</h2>
          
        </div>
      <div className="container">
        <h3 className="center">Student</h3>
        <h4>Students registered on database</h4>


        <BrowserRouter>
        <div className="container">  
        <nav className="navbar navbar-expand-lg navheader" >  
          <div className="collapse navbar-collapse">  
            <ul className="navbar-nav mr-auto">   
              <li className="nav-item">  
                <Link to={'/Student/Course'} className="nav-link">Course List</Link>  
              </li>  
            </ul>  
          </div>  
        </nav> <br />  
        <Switch>  
          <Route path='/Student/Course' component={Courselist} /> 
         
          <Route path='/results/:moduleId' component={Filter2} />
          
          <Route path='/ViewLO/:moduleId' component={ViewLO} /> 
          <Route path='/FeedbackCourse/:moduleId' component={FeedbackCourse} />
        </Switch>  
      </div>  
      </BrowserRouter>
      </div>
    </div>
  )
}

export default Student