import React from 'react'
import { Route, BrowserRouter,Link,Switch} from 'react-router-dom'
import Logo from '../../photos/logo.jpg';
import Courselist from './Courselist'
import Coursedetails from './CourseDetails'
import LOlist from '../LO/LOlist'
import LO from '../LO/AddLO'
import Filter2 from './FilterResults'
import FeedbackChart from '../Feedback/FeedbackChart';
import { Dropdown,DropdownButton} from 'react-bootstrap';


function Lecturer (props) {

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
  <Dropdown.Item href="/lecturer"> Dashboard</Dropdown.Item>
  <Dropdown.Item  onClick={onLogoutHandler}>Logout</Dropdown.Item>
</DropdownButton> 
          </h1>
                            
          <h2>Outcome Based Education System</h2>

        </div>

        <div class ="title">
            <h2> Department of Electrical and Information Engineering</h2>
            <h3>Cousrse assigned by Head of the Department</h3>
        </div>



      <div >
        <h3 className="center">Lecturer</h3>



        <BrowserRouter>
        <div >  
        <nav className="navbar navbar-expand-lg navheader" >  
          <div className="collapse navbar-collapse">  
            <ul className="navbar-nav mr-auto">   
              <li className="nav-item">  
                <Link to={'/Courselist'} className="nav-link">Course List</Link>  
              </li> 
               
              <li>
              <Link to= {'/POlist'}  target ="_blank" className="nav-link"> PO List</Link>
              </li> 
              <li>
              <Link to= {'/Summary'}  target ="_blank" className="nav-link"> Core</Link>
              </li>
              <li>
              <Link to= {'/Summary2'}  target ="_blank" className="nav-link"> Core+GE</Link>
              </li>
              <li>
              <Link to= {'/Summary3'}  target ="_blank" className="nav-link"> Core+GE+TE</Link>
              </li>
               
            </ul>  
          </div>  
        </nav> <br />  
        <Switch>  
        <Route path='/Courselist' component={Courselist} /> 
          <Route path='/Couredetails' component={Coursedetails} /> 
          <Route path ='/AddLO/:value' component = {LO}/>
          <Route path = '/LOlist/:value' component ={LOlist} />
          <Route path='/results/:moduleId' component={Filter2} />
          <Route path='/feedbackChart/:moduleId' component={FeedbackChart}/>


        </Switch>  
      </div>  
      </BrowserRouter>


      </div>
    </div>
  )
}

export default Lecturer