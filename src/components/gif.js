import {useState, useEffect} from 'react'
import axios from 'axios'
const List=({gifs,select})=>{
    if(gifs===null||gifs===undefined){
        return(
            <div>loading..</div>
)
    }
    else{
        return(
            <div>
                {gifs.map(gif=>{
                    return(
                        <div className='gif' key={gif.id} >
                            <img onClick={()=>select(gif.images.fixed_height.url)} width='150' src={gif.images.fixed_height.url} alt='gif'/>
                        </div>)
                })}
        
            </div>)
    }
}

const Gif= ({select,closegs})=>{
    const apiKey='i3yBvdWJqdihkpbsCsb6BADf0RsElKPA'
    const [search , setSearch] =useState('trending')
    const [gifs, setGifs] = useState([])
   
    useEffect(()=>{
        update()
    },[])
    
const update= ()=>{
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${search}&limit=10`)
        .then(res=>setGifs(res.data.data))
        .catch(err=>console.log(err))
}
const handleChange=e=>{
    e.preventDefault()
    setSearch(e.target.value)
    
    update()
}

return(
    <div className='gif_container'>
        <div className='gif_input'>
        <input onChange={e=>handleChange(e)} placeholder='search gifs'/>
        <span onClick={()=>closegs()}>x</span>
        </div>
        <div className='gif_box'>
           <List gifs={gifs} select={select}/>
        </div>
    </div>)
}
export default Gif;