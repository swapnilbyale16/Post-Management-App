import React, { useContext, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Ct from './Ct'
import Cookies from 'js-cookie'
function Home() {
  let obj = useContext(Ct)
  useEffect(() => {
    let x = Cookies.get("auth")
    if (x !== undefined) {
      obj.updstate(JSON.parse(x))
    }
  }, [])
  return (
    <div className='home-con'>
      <div className='left-con'>
        <Link to='/'><i class="fa-solid fa-person-dots-from-line"></i> All</Link>
        <Link to='/sport'><i class="fa-solid fa-medal"></i> Sports</Link>
        <Link to='/business'><i class="fa-solid fa-business-time"></i> Business</Link>
        <Link to='/weather'><i class="fa-solid fa-cloud-bolt"></i> Weather</Link>
        <Link to='/health'><i class="fa-solid fa-staff-snake"></i> Health</Link>
        <Link to='/politics'><i class="fa-solid fa-landmark"></i> Politics</Link>
        <Link to='/education'><i class="fa-solid fa-user-graduate"></i> Education</Link>
        {obj.state.token !== "" && <Link to='/post-by-me'><i class="fa-brands fa-meetup"></i> Post By me</Link>}
      </div>
      <div className='right-con'>
        <Outlet />
      </div>
    </div>
  )
}

export default Home