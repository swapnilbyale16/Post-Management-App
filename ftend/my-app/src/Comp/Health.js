import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Health() {
  let [post, upost] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/catpost/health").then((res) => {
      upost(res.data)
    })
  }, [])
  return (
    <div className='main-con'>
      <h1>All Health News are Here</h1>
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
      {post.length === 0 && <div>Oops no news was here</div>}
    </div>
  )
}

export default Health