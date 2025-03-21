import React, { useContext, useEffect, useState } from 'react'
import Ct from './Ct'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Edit() {
    let [post, upost] = useState({ "title": "", "cat": "", "text": "" })
    let navigate = useNavigate()
    let obj = useContext(Ct)

    let fun = (e) => {
        upost({ ...post, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        upost(obj.state.postdet)

    }, [])

    let add = () => {
        axios.put("http://localhost:5000/editpost", { ...post, "status": "pending","comm":""},{"headers":{"Authorization":obj.state.token}}).then((res) => {
            navigate("/")
        })
    }






    return (
        <div className='add-con'>
            <div className='add-box'>
                <h2>🚀 EDIT YOUR POST</h2>
                <p>Share your thoughts with the world! 🌍</p>
                <input type='text' placeholder='Title' name='title' onChange={fun} value={post.title} />
                <textarea placeholder='Details...' name='text' onChange={fun} value={post.text}></textarea>
                <select name='cat' onChange={fun} value={post.cat}>
                    <option selected disabled value="">Category</option>
                    <option value='sports'>Sports</option>
                    <option value='health'>Health</option>
                    <option value='politics'>Politics</option>
                    <option value='weather'>Weather</option>
                    <option value='education'>Education</option>
                    <option value='business'>Business</option>
                    <option value='others'>Others</option>
                </select>
                <button onClick={add}>🔥 EDIT POST</button>
            </div>
        </div>
    )
}

export default Edit