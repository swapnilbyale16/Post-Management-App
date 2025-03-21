import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import Ct from './Ct'
import { useNavigate } from 'react-router-dom'

function Pdm() {
  let [post, upost] = useState([])
  let [f, Setf] = useState(true)
  let navigate = useNavigate()
  let obj = useContext(Ct)
  let x = Cookies.get("auth")
  x = JSON.parse(x)


  useEffect(() => {
    axios.get(`http://localhost:5000/postbyme/${x._id}`,{"headers":{"Authorization":obj.state.token}}).then((res) => {
      upost(res.data)
    })
  }, [f])

  let del = (id) => {
    let ff = window.confirm("Are you sure you want to delete this post?")
    if (ff) {
        axios.delete(`http://localhost:5000/postdel/${id}`,{"headers":{"Authorization":obj.state.token}}).then(() => {
            Setf(!f)
        })
    }
}

  let edit = (pobj) => {
    obj.updstate({ "postdet": pobj })
    navigate("/edit")
    console.log(pobj)
  }



  return (
    <div className='main-con'>
      {post.length > 0 && <h1>Things posted by {obj.state.name}</h1>}
      {post.map((pobj) => {
        return (<div className='post-con'>
          <h3>{pobj.title}</h3>
          <p>{pobj.text}</p>
          <h2>Category:- {pobj.cat}</h2>

          <div className='post-det'>
            <p>Status:- {pobj.status}</p>
            {pobj.status === "review" && <p>Comments:- {pobj.comm}</p>}
          </div>

          <div className='like'>
            <button><i class="fa-solid fa-thumbs-up"></i> {pobj.likes.length}</button>
            <button><i class="fa-solid fa-thumbs-down"></i> {pobj.dlikes.length}</button>
          </div>

          <div style={{ display: 'flex', gap: '2px' }}>
            {obj.state.token !==""  &&<button className='del' onClick={() => del(pobj._id)}>Delete</button>}
            {pobj.status === "review" &&<button className='edit' onClick={() => edit(pobj)}>Edit</button>}
          </div>
          
          <div className='post-det'>
            <p>Date:- {pobj.date}</p>
            <p>Posted By:- {pobj.uname}</p>
          </div>
        </div>)
      })}
      {post.length === 0 && <div>You don't post anything yet</div>}
    </div>
  )
}

export default Pdm