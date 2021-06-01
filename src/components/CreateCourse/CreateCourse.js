import React from 'react'
import Logo from './logo.jpg';
import { Link} from 'react-router-dom'

const CreateCourse = () => {
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
       
       
<form action="/action_page.php">
  <div class="container">
    <h1>Create Course</h1>
    <p>Please fill in this form to create a course.</p>
    
    <label for="email"><b>Module Code</b></label>
    <input type="text" placeholder="Enter Module Code" name="Modulecode" id="Modulecode" required />

    <label for="psw"><b>Module Name</b></label>
    <input type="text" placeholder="Enter Module Name"  required/>
	
    <label for="psw"><b>Department</b></label>
    <input type="text" placeholder="Enter Department"  required/>
        
     <label for="psw"><b>Number of Credits</b></label>
     <input type="text" placeholder="Enter Number of Credits"  required/>

    <label for="psw-repeat"><b>Lecturer 1</b></label>
    <input type="text" placeholder="Enter Lecturer 1"  required/>
    
    <label for="psw-repeat"><b>Lecturer 2</b></label>
    <input type="text" placeholder="Enter Lecturer 2"  />

    <label for="psw-repeat"><b>Lecturer 3</b></label>
    <input type="text" placeholder="Enter Lecturer 3"  />
    
    

    <button type="submit" class="registerbtn">Create Course</button>
  </div>
  
 
</form>


      </div>
    </div>
  )
}

export default CreateCourse