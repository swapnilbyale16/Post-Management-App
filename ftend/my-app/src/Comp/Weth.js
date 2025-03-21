import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Weth() {
  let [post, upost] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/catpost/weather").then((res) => {
      upost(res.data)
    })
  }, [])
  return (
    <div className='main-con'>
      <h1>All the Weather News You Need at Your Fingertips!</h1>
      {post.map((obj) => {
        return (<div className='post-con'>
          <h3>{obj.title}</h3>
          <p>{obj.text}</p>
          <h2>Category:- {obj.cat}</h2>
          <div className='post-det'>
            <p>Date:- {obj.date}</p>
            <p>Posted By:- {obj.uname}</p>
          </div>
        </div>)
      })}
      {post.length === 0 && <div>Oops, no content found! Why not create your thoughts on the weather?</div>}
    </div>
  )
}

export default Weth