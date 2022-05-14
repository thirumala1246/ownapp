import React from 'react';
import './App.css';

// import {Message,Second} from './components/Message'
// import Message  from "./components/Message";
import {useState,useEffect} from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Contact from './components/Contact';

function App() {
    // var counter =0
    const [ counter,setCounter ] = useState(0);
    
    
    const increment = ()=>{
      // counter = counter+1
      setCounter(counter+1)
    } 
    console.log(counter)

    useEffect(() =>{
        document.title=`clicked ${counter} times`
    },[counter])

  return (
      <Router>
    <div className='App'>
      <nav>

        <Link to='/' className='text'>Home</Link>
        <Link to='/contact' className='text'>Contact</Link>
        <Link className='text'>About</Link>

        {/* <a href={Contact} className='text'>Home</a>
        <a className='text'>Contact</a>
        <a className='text'>About</a> */}
      </nav> 
      <Route path='/' render={() =>(
        <>
      <h2>hello</h2>

      <button onClick={increment}>click on me</button>
      <h1>{counter}</h1>
      {/* <Message text="thirumala"/> */}
      {/* <Second text="hruday"/> */}
        </>

      )}/>
      <Route path='/contact' component={Contact} />
      
    </div>
      </Router>

    
    
  );

  
}

export default App;
