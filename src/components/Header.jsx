import React from 'react'

export default function Header() {
  return (
    <div>
      <img className="my-img" src={process.env.PUBLIC_URL + '/Images/musicWp.png'}  alt="" />
    </div>
  )
}