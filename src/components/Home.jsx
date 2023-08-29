import React from 'react'
import { MusicNoteBeamed } from 'react-bootstrap-icons'

export default function Home() {
  return (
    <div className='my-dynamic-box'>

      <div className="home-head">
        <MusicNoteBeamed style={{color:"orangered",fontSize:"75px"}}/>TuneTracker
      </div>

      {/* <hr /> */}
      <div className="text-box">
      <p className='my-text upper-text'>"Explore, find, and save your favorite songs </p>
      <p className='my-text'>with just a few clicks!"</p>
      </div>
      
      {/* <hr /> */}
    </div>
  )
}
