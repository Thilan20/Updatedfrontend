import React from 'react'
import Logo from './logo.jpg'
import './Home.css'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Background1 from './back4.jpg'
import Background2 from './back1.jpg'
import Background3 from './back9.jpg'
import Background4 from './back3.jpg'
import Background6 from './back8.jpg'

import { Link} from 'react-router-dom'

 

const Home = () => {
  return (
    <div>
                 <div class= "header">

                 <img src={Logo} alt ='weblogo' />
                        <h1>Faculty of Engineering University of Ruhuna</h1>
                        <h2>Outcome Based Education System</h2>
                    </div>

      <div className="container">

      <div class="col-md-4 offset-md-8  "  align="right">
          <input type="text" placeholder="Search.." name="search"/>
          <button type="submit">Submit</button>
    
         </div>
     


        <h4 className="center">Home</h4>
        
            
        <AliceCarousel autoPlay autoPlayInterval="2000">
      <img src={Background6} className="sliderimg"/>
      <img src={Background1} className="sliderimg"/>
      <img src={Background2} className="sliderimg"/>
      <img src={Background3} className="sliderimg"/>
      <img src={Background4} className="sliderimg"/>
      
</AliceCarousel>





      </div>

        <div class="col-md-4 offset-md-4  ">
          <Link className="header" to='/login'  >
            <button>Login</button>
          </Link>
        </div>


    </div>
  )
}



export default Home