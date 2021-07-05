const Home =({openp})=>{
return(
  <div>
      <div className='flex center header'>
          <div className='header_icon_active'>
          <i class="fas fa-home"></i>
          </div>
          <div className='header_icon'>
          <i class="fas fa-play-circle"></i>
          </div>
          <div className='header_icon'>
          <i class="fas fa-store"></i>
          </div>
          <div className='header_icon'>
          <i class="fas fa-users"></i>
          </div>
          <div className='header_icon'>
          <i class="fas fa-headset"></i>
          </div>
      </div>
      <div className='flex center post'>
          <div className='post_content'>
              <div className='flex one'> 
                <div className='avatar'>
                    <img  width='40' src='https://res.cloudinary.com/dh0xesm3q/image/upload/v1625246881/my/nahid_b68mwk.jpg'></img>
                </div>
                <div onClick={()=>openp()} className='post_link'>
                    What's on your mind ?
                </div>
              </div>
               <div className='flex two space_between'>
                  <div className='link_box flex center'>
                      Live demo
                  </div>
                  <div className='link_box flex center' >
                         Photo/Video
                  </div>
                  <div className='link_box flex center'>
                      Feeling/Activity
                  </div>
              </div>
          </div>
      </div>
  </div>)
}
export default Home