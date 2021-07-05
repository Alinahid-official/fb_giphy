import { useState } from 'react';
import Gif from './gif'
const Post =({close, closep})=>{
    const [selected, setSelected]= useState()
    const [gs ,setGs] = useState(false)
  
    const select =url=>{
        setSelected(url)
     }
   const closegs =()=>{
       setGs(false)
   }
   const className =`upload ${closep?'show':'hide'}`
    return(
      <div className={className}>
        <div className='upload_content'>
        <div  className='one flex center'>
            <i class="fas fa-pen"></i> Compose Post<span onClick={()=>close()}>x</span>
        </div>
        <div  className='two flex center column'>
            <div className='input'>
            <i class="fas fa-user-circle"></i>
            <input placeholder='Write something here....'/>
            </div>
            <div className='gif_show'>
            {selected?<div><img src={selected} height='150' width='200' alt='img'/><span onClick={()=>setSelected(null)}>x</span></div>:null}
            </div>
        </div>
        <div  className='three row'>
            <div className='flex row space_around'>
            <div onClick={()=>setGs(true)} className='g_btn flex '>
               <img src='.\icons\iconfinder_315415_gif_file_icon.svg' /> gifs
            </div>
           
            {gs?<Gif select={select} closegs={closegs}/>:null}
           
           
                
            
            <div className='g_btn flex '>
               <img  width='30' src='.\icons\iconfinder_3057640_location_navigation_pin_pointer_icon.svg' /> Check In
            </div>
            </div>
            
            
        </div>
        <div className='four'>
            <button className='btn_white'><i class="fas fa-lock"></i>
             Only Me 
             <i class="far fa-caret-square-down"></i></button>
            <button className='btn_blue'>Post</button>
        </div>
        </div>
        
      </div>)
    }
    export default Post;
