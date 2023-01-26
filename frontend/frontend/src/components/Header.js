import React, {useState, useEffect} from 'react'
import { Link, Routes, Route} from 'react-router-dom'
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import LogoutPage from './LogoutPage';

export default function Header() {
    const [isAuth, setIsAuth] = useState(false);
    useEffect(() => {
        if (localStorage.getItem('access') !== null) {
        setIsAuth(true)
        } else {
          setIsAuth(false);
        }
      }, [isAuth]);
  return (
    <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <ul className="navbar-nav mr-auto">
            {isAuth ? 
            <>
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/logout'} className="nav-link"> Logout </Link></li>
            </>
            : 
            <>
            <li><Link to={'/login'} className="nav-link">Login</Link></li>
            <li><Link to={'/register'} className="nav-link">Register</Link></li>
            </>
            }
          </ul>
          </nav>
          <Routes>
              <Route exact path='/' element={<HomePage/>} />
              <Route path='/login' element={<LoginPage/>} />
              <Route path='/register' element={<RegisterPage/>} />
              <Route path='/logout' element={<LogoutPage/>} />
          </Routes>
        </div>
  )
}
