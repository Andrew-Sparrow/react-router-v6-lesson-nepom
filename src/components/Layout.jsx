import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'
import CustomLink from './CustomLink'

const setActive = ({isActive}) => isActive ? 'active-link' : ''

const Layout = () => {
  return (
    <>
      <header>
        <NavLink to="/" className={setActive}>Home</NavLink>
        <NavLink to="/posts" style={({isActive}) => ({color: isActive ? 'var(--color-active)' : ''})}>Blog</NavLink>
        <CustomLink to="/about">About</CustomLink>
      </header>
      <main className='container'>
        <Outlet />
      </main>
      <footer className='container'>2022</footer>
    </>
  )
}

export {Layout};