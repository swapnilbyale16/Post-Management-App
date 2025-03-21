import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Bs() {
    let [post, upost] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/catpost/business").then((res) => {
            upost(res.data)
        })
    }, [])
    return (
        <div className='main-con'>
            <h1>All Business News are Here</h1>
            {post.map((ob) => {
                return (<div className='post-con'>
                    <h3>{ob.title}</h3>
                    <p>{ob.text}</p>
                    <h2>Category:- {ob.cat}</h2>
                    <div className='post-det'>
                        <p>Date:- {ob.date}</p>
                        <p>Posted By:- {ob.uname}</p>
                    </div>
                </div>)
            })}
            {post.length === 0 && <div>No posts available at the moment.</div>}
        </div>
    )
}

export default Bs