import React, { Component } from 'react';
import Logo from '../../photos/logo.jpg';
import { Route, BrowserRouter,Link,Switch} from 'react-router-dom'
import Addcourse from '../Course/Addcourse'  
import EditCourse from '../Course/EditCourse'
import Courselist from '../Course/Courselist'


const Admin = () => {
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

      <div className="container">
        <h3 className="center">Administrator</h3>
        
        <BrowserRouter>
        <div className="container">  
        <nav className="navbar navbar-expand-lg navheader" >  
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