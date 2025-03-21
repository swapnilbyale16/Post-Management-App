import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import Ct from './Ct'

function All() {
    let [post, upost] = useState([])
    let [f, Setf] = useState(true)
    let obj = useContext(Ct)

    useEffect(() => {
        axios.get("http://localhost:5000/getpost").then((res) => {
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

    let like = (pid) => {
        if (obj.state.token !== "") {
            axios.post("http://localhost:5000/addlike", { "_id": pid, "uid": obj.state._id },{"headers":{"Authorization":obj.state.token}}).then((res) => {
                Setf(!f)
            })
        }
    }

    let dlike = (pid) => {
        if (obj.state.token !== "") {
            axios.post("http://localhost:5000/dlike", { "_id": pid, "uid": obj.state._id },{"headers":{"Authorization":obj.state.token}}).then((res) => {
                Setf(!f)
            })
        }
    }



    return (
        <div className='main-con'>
            <h1>All News Here</h1>
            {post.map((pobj) => {
                return (<div className='post-con'>
                    <h3>{pobj.title}</h3>
                    <p>{pobj.text}</p>
                    <h2>Category:- {pobj.cat}</h2>
                    <div className='like'>
                        <button onClick={() => like(pobj._id)}><i class="fa-solid fa-thumbs-up"></i> {pobj.likes.length}</button>
                        <button onClick={() => dlike(pobj._id)}><i class="fa-solid fa-thumbs-down"></i> {pobj.dlikes.length}</button>
                    </div>
                    {obj.state.token !== "" && obj.state.role === "admin" && <button className='del' onClick={() => del(pobj._id)}> Delete</button>}
                    <div className='post-det'>
                        <p>Date:- {pobj.date}</p>
                        <p>Posted By:- {pobj.uname}</p>
                    </div>
                </div>)
            })}
        </div>
    )
}

export default All