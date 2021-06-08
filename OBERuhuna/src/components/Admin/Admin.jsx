import React, { Component } from 'react';
import Logo from '../logo.jpg';
import { Route, BrowserRouter,Link,Switch} from 'react-router-dom'
import Addcourse from '../Course/Addcourse'  
import Courselist from '../Course/Courselist'
import { Dropdown,DropdownButton} from 'react-bootstrap';



function Admin(props){
//logout function
  const onLogoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem('myData');
    localStorage.removeItem('username');
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
              <DropdownButton id="dropdown-basic-button" title={user} style ={{float:'right'}}>
                <Dropdown.Item href="/admin"> Dashboard</Dropdown.Item>
                <Dropdown.Item  onClick={onLogoutHandler}>Logout</Dropdown.Item>
              </DropdownButton> 
  
          </h1>
                            
          <h2><strong>OBE Curriculum Plannig Tool</strong></h2>

        </div>

      <div>
        <h3 className="center">Administrator</h3>
        
        <BrowserRouter>
        <div >  
        <nav className="navbar-expand-sm navheader" >  
          <div className="collapse navbar-collapse">  
            <ul className="navbar-nav mr-auto">  
              <li className="nav-item">  
                <Link to={'/Addcourse'} className="nav-link">Addcourse</Link>  
              </li>  
              <li className="nav-item">  
                <Link to={'/Courselist'} className="nav-link">Course List</Link>  
              </li>  
            </ul>  
          </div>  
        </nav> <br />  
        <Switch>  
          <Route exact path='/Addcourse' component={Addcourse} />    
          <Route path='/Courselist' component={Courselist} />  
        </Switch>  
      </div>  
      </BrowserRouter>

      </div>
    </div>
  )
}

export default Admin
