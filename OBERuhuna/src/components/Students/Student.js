import React from 'react'
import Logo from './logo.jpg';
import { Route, BrowserRouter,Link,Switch} from 'react-router-dom';
import Courselist from '../Students/Courselist';
import Filter2 from '../Students/FilterResults';
import ViewLO from '../Students/AddasComponentLO';
const Student = () => {

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
        </Switch>  
      </div>  
      </BrowserRouter>
      </div>
    </div>
  )
}

export default Student