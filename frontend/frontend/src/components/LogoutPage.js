import React from 'react'

export default function LogoutPage() {
    function cancelLogout() {
        window.location.replace('http://localhost:3000/')
    }
    function Logout() {
        localStorage.clear()
        window.location.replace('http://localhost:3000/login')
    }
  return (
    <div className='container mt-5'>
        <h3>
        Are you sure you want to logout?
        </h3>
        <div className='btn btn-primary m-3' onClick={cancelLogout}>Cancel</div>
        <div className='btn btn-danger' onClick={Logout}>Logout</div>
        </div>
  )
}
