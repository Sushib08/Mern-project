import React from 'react'
import {NavLink} from 'react-router-dom';

export const LeftNav = () => {
  return (
    <div className='left-nav-container'>
        <div className='icons'>
            <div className='icons-bis'>
                <NavLink to='/' exact activeClassName='active-left-nav'>
                    <img src='./img/icons/home.svg' alt='home'/>
                </NavLink>
                <br/>
                <NavLink to='/trending' exact activeClassName='active-left-nav'>
                    <img src='./img/icons/rocket.svg' alt='trending'/>
                </NavLink>
                <NavLink to='/profil' exact activeClassName='active-left-nav'>
                    <img src='./img/icons/user.svg' alt='profil'/>
                </NavLink>
                <br/>
                <br/>
            </div>
        </div>
    </div>
  )
}
