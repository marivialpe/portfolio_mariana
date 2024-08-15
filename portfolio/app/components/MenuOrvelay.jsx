import React from 'react'
import NavLink from './NavLink'

const MenuOrvelay = ({ links }) => {
  return (
    <ul className='flex flex-cal py-4 items-center'>
        {links.map((link, index) => (
            <li key={index}>
            <NavLink href={link.path} title={link.title}/>
            </li>

        )
      )
    }
    </ul>
  )
}

export default MenuOrvelay