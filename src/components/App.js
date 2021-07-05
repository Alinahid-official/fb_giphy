import { useState } from 'react';
import './App.css';
import Home from './home'
import Post from './post'

function App() {
  const [closep, setPost] =useState(false);
  return (
    <div >
      {closep?<Post close={()=>setPost(false)} closep={closep}/>:null}
       
       <Home openp={()=>setPost(true)} closep={closep}/>
 
     
    
      
 
    </div>
  );
}

export default App;
