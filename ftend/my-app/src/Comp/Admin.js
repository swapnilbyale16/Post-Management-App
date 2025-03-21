import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import Ct from './Ct'

function Admin() {
    let [post, upost] = useState([])
    let [f, setF] = useState(true)
    let [msg, umsg] = useState("")
    let obj = useContext(Ct)

    useEffect(() => {
        let x = Cookies.get("auth")
        if (x !== undefined) {
            obj.updstate(JSON.parse(x))
            axios.get("http://localhost:5000/allpost").then((res) => {
                upost(res.data)
            })
        }
    }, [f])

    let fun = (e) => {
        umsg(e.target.value)
    }



    let upd = (str, id) => {
        axios.put("http://localhost:5000/updpost", { "status": str, "_id": id, "comm": msg },{"headers":{"Authorization":obj.state.token,"uid":obj.state._id}})
        setF(!f)
    }




    return (
        <div className='main-con'>
            <h1 style={{ color: '#ff9933' }}>Post that are pending</h1>
            {post.map((pobj) => {
                return (<>{pobj.status === "pending" && <div className='post-con'>
                    <h3>{pobj.title}</h3>
                    <p>{pobj.text}</p>
                    <h2>Category:- {pobj.cat}</h2>
                    <div className='post-det'>
                        <p>Date:- {pobj.date}</p>
                        <p>Posted By:- {pobj.uname}</p>
                    </div>
                    <div className='process'>
                        <button onClick={() => upd("accepted", pobj._id)}>Accepted</button>
                        <button onClick={() => upd("rejected", pobj._id)}>Reject</button>
                    </div>
                    <div className='review'>
                        <input type='text' placeholder='Enter comments' onChange={fun} />
                        <button onClick={() => upd("review", pobj._id)}>Review</button>
                    </div>
                </div>}</>)
            })}


            <div style={{ height: '100px' }}></div>


            <h1 style={{ color: '#cc33ff' }}>Post that are in review</h1>
            {post.map((pobj) => {
                return (<>{pobj.status === "review" && <div className='post-con'>
                    <h3>{pobj.title}</h3>
                    <p>{pobj.text}</p>
                    <h2>Category:- {pobj.cat}</h2>
                    <div className='post-det'>
                        <p>Date:- {pobj.date}</p>
                        <p>Status:- {pobj.status}</p>
                        <p>Comments:- {pobj.comm}</p>
                        <p>Posted By:- {pobj.uname}</p>
                    </div>
                    <div className='process'>
                        <button onClick={() => upd("accepted", pobj._id)}>Accepted</button>
                        <button onClick={() => upd("rejected", pobj._id)}>Reject</button>
                    </div>
                </div>}</>)
            })}





            <div style={{ height: '7rem' }}></div>


            <h1 style={{ color: '#3399ff' }}>Post that are accepted</h1>
            {post.map((pobj) => {
                return (<>{pobj.status === "accepted" && <div className='post-con'>
                    <h3>{pobj.title}</h3>
                    <p>{pobj.text}</p>
                    <h2>Category:- {pobj.cat}</h2>
                    <div className='post-det'>
                        <p>Date:- {pobj.date}</p>
                        <p>Status:- {pobj.status}</p>
                        <p>Posted By:- {pobj.uname}</p>
                    </div>
                </div>}</>)
            })}




        </div>
    )
}

export default Admin