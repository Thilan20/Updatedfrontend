
import React, { useEffect, useState ,Component} from 'react';
import { Route, BrowserRouter} from 'react-router-dom'
import Home from './components/Home/Home'
import Lecturer from './components/Lecturer/lecturer'
import Student from './components/Students/Student'

import CreateCourse from'./components/CreateCourse/CreateCourse'
import Admin from './components/Admin/Admin'
import ModuleList from './components/Feedback/ModuleList'
import FeedbackCourse from './components/Feedback/FeedbackCourse'
import LoadingComponent from './components/LoadingComponent';
import FeedbackChart from './components/Feedback/FeedbackChart'
import loginform from './components/Loginform/Login1'
import Login2 from './components/Login/Login2'
import LO from './components/LO/AddLO'
import LOlist from './components/LO/LOlist'
import DynamicTable from './components/LO/DynamicTable'
import AddPO from './components/PO/AddPO';
import POlist from './components/PO/POlsit'
import AsComponentList from './components/AssignmentComponents/AsComponentList';
import AddAsComponent from './components/AssignmentComponents/AddAsComponent';




// const [loading, setLoading] = useState(true);
// setLoading(false);
// if (loading) return <LoadingComponent content='Loading app' />

class App extends Component {
  render() {
  return (
      <BrowserRouter>
      <div>
        <div className="App">
          <Route exact path='/' component={Home}/>
          <Route path='/lecturer' component={Lecturer} />
          <Route path='/student' component={Student} />
          <Route path='/admin' component={Admin} />
          <Route path='/login' component={Login2} />
          <Route path='/createcourse' component={CreateCourse} />
          <Route path='/EnrolledModules' component ={ModuleList} />
          <Route path='/feedback' component ={FeedbackCourse} />
          <Route path='/feedbackChart' component ={FeedbackChart} />
          <Route path ='/AddLO/:value' component = {LO}/>
          <Route path = '/LOlist/:value' component ={LOlist} />
          <Route path ='/DynamicTable' component={ DynamicTable}/>
          <Route path = '/AddPO/:value' component={AddPO}/>
          <Route path='/POlist/:value' component={POlist}/>
          <Route path='/Ascomponent/:value' component={AsComponentList}/>
          <Route path= '/AddAsComponent/:value1' component={AddAsComponent} />

        </div>        
      </div>
      </BrowserRouter>
    );
  
}
}

export default App;
