import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Ct from './Ct'
import Cookies from 'js-cookie'
function Addpost() {
    let [data, udata] = useState({ "title": "", "cat": "", "text": "" })
    let [msg, umsg] = useState("")
    let obj = useContext(Ct)


    useEffect(() => {
        let x = Cookies.get("auth")
        if (x !== undefined) {
            obj.updstate(JSON.parse(x))
        }
    }, [])


    let fun = (e) => {
        udata({ ...data, [e.target.name]: e.target.value })
    }

    let add = () => {
        if (data.title !== "" && data.text !== "" && data.cat !== "") {
            axios.post("http://localhost:5000/addpost", { ...data, "uname": obj.state.name, "uid": obj.state._id, "date": new Date().toLocaleDateString() },{"headers":{"Authorization":obj.state.token}}).then((res) => {
                umsg(res.data.msg)
                udata({"title": "", "cat": "", "text": ""})
            })
        } else {
            umsg("Please fill all the details")
        }
    }


    
    return (
        <div className='add-con'>
            <div className='add-box'>
                <h2>🚀 CREATE YOUR POST</h2>
                <p>Share your thoughts with the world! 🌍</p>
                <h4 className='msg'>{msg}</h4>
                <input type='text' placeholder='Title' name='title' onChange={fun} value={data.title} />
                <textarea placeholder='Details...' name='text' onChange={fun} value={data.text}></textarea>
                <select name='cat' onChange={fun} value={data.cat}>
                    <option selected disabled value="">Category</option>
                    <option value='sports'>Sports</option>
                    <option value='health'>Health</option>
                    <option value='politics'>Politics</option>
                    <option value='weather'>Weather</option>
                    <option value='education'>Education</option>
                    <option value='business'>Business</option>
                    <option value='others'>Others</option>
                </select>
                <button onClick={add}>🔥 ADD POST</button>
            </div>
        </div>
    )
}

export default Addpost