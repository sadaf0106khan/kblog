import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Service from './Service';
import Contact from './Contact';
import About from './About';
import Home from './Home';
import {Switch,Route,Redirect} from 'react-router-dom';
import Navbar from './Navbar';


const App =()  =>{
  return (
    <>
    {/* code for navbar... */}
      <Navbar/>
    <div className="navbar">
          <Switch>
            <Route exact path="/" component ={Home}/>
            <Route exact path="/about" component ={About}/>
            <Route exact path="/contact" component ={Contact}/>
            <Route exact path="/service" component ={Service}/>
            <Redirect to='/'/>
          </Switch>
    </div>
          {/* code  for the image at top..... */}
          <div className="main_header__div d-flex align-self-start justify-content-center pt-5 flex-column shadow">
             <p> khan is </p>
             <h2 className="animateWord" >
             <span> She is </span>
             <div>
               <ul className="flip">
                 <li> Web Developer  </li>
                 <li> Coder </li>
                 <li> Freelancer  </li>
                 <li> Yuupp...  </li>
               </ul>
             </div>
             </h2>
             <button className="text-uppercase"> subscribe</button>
          </div>
          {/* two sided div start ... */}
          <div className="container-fluid">
          <div className="row">
          {/* to get right and left side div space */}
          <div className="col-xl-10 col-lg-10 col-md-11 col-11 mx-auto my-5">
            <div className="row gx-5 mx-sm-auto">
            {/* to get the leftside div space */}
            <div className="col-lg-8 col-md-11 col-11 mx-auto">
            
                <div>

                </div>
            </div>
            </div>
          </div> 
          </div>
          </div>

        
        </>
  );
};

export default App;
