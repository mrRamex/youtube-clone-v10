import React from 'react'
import './Channel.scss'
import Banner from '../../images/thumbnail/thumbnail2.jpg'

const Channel = () => {
  return (
    <div className='channel'>
      <div className='channel-header'>
        <img className='channel-banner' src={Banner} alt='Channel Banner'/>
        <div className='channel-credentials'>
          <div className='channel-icon'></div>
          <div className='credentials'>
            <h1>Username</h1>
            <div className='stats'>
              <p>Usertag</p> -
              <p>Subscriber amount</p> -
              <p>Videos amount</p> 
            </div>
            <p>More about this channel</p>
            <div className='options'>
              <button>Customize channel</button>
              <button>Manage videos</button>
            </div>
          </div>
        </div>
      </div>

      <div className='channel-menu'>
        <button>Home</button>
        <button>Videos</button>
        <button>Shorts</button>
        <button>Playlists</button>
        <button>Community</button>
      </div>

      <div className='line'></div>

      <div className='channel-content'>
        <div className='for-you'>
          <h1>For You</h1>
        </div>
      </div>
    </div>
  )
}

export default Channel