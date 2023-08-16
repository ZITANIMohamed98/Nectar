import React from 'react'
import {}
const Navbar = () => {
  return (
    <div className='app__navbar'>
      <div className='app__navbar__container'>
        <div className='app__navbar__logo'>
          <p>Nectar</p>
        </div>
        <div className='app__navbar__links'>
          <a href='#'>Home</a>
          <a href='#'>About</a>
          <a href='#'>Contact</a>
        </div>
        <div className='app__navbar__search'>
          <input type='text' placeholder='Search...' />
              <img src='./search.svg' alt='search' />
          </div>
      </div>
    </div>

  )
}

export default Navbar