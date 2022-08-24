import './App.css';
import TypeWriterEffect from 'react-typewriter-effect';
import Sdata from './components/carddata';



function App() {
  return (
   
 
    <>
    
      <div className='navbar'>
      <a  href='#home'> <h3 className='btn'> Home</h3> </a>
      <a href='#about' > <h3 className='btn'>About</h3> </a> 
      <a href='#services'> <h3 className='btn'>Services</h3></a>  
      </div>

      <div className='wrapper' id='home'>
         
          <div className='dynamic-txt'>Welcome to <span className='h2'> <TypeWriterEffect
            textStyle={{ fontFamily: 'Red Hat Display' }}
            startDelay={100}
            cursorColor="rgb(250, 85, 85)"
            text="LEADFLIX"
            typeSpeed={200}
          /></span>
          </div>
      
          <div className='info'>
          Explore the leading movies and TV series across the globe,  according to millions of viewers all across the world !!!!</div>
          </div>

      <div className='cards'>
       <Sdata/>
       </div>
       
      <div className='heading'>About Developer</div>
      <div id='about' className='discription'>
      I'm a self taught web developer , web designer and programmer . This is one of my React Project using API's and React fundamentals.
      </div>
      <div className='heading'>Services</div>
      <div id='services' className='discription'> Since this is project the data is self-updated by the developer itself , data will be updated twice a month.This site is under development more services will be available soon....  </div>

  </>
  );
}

export default App;
