import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Logo,LogoutBtn } from "../index"
import { useSelector } from 'react-redux'
import {Container} from "../index"

function Header() {
  const authStatus = useSelector((state) => state.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ]
  return (
    <header className='py-2 shadow bg-gray-950'>
      <Container>
        <nav className='flex items-center'>

          <div className='mr-4'>
            <Link to='/'>
              <Logo width='100px'/>
            </Link>
          </div>

          <ul className='flex ml-auto'>
            {navItems.map((item)=>(
              item.active ? (
                <li key={item.name}>
                  <button
                  onClick={()=> navigate(item.slug)}
                  className='inline-block px-5 py-2 text-gray-300 duration-200 hover:bg-blue-100 rounded-full hover:text-gray-950'
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            ))}
          </ul>

          {authStatus && (
            <li>
              <LogoutBtn />
            </li>
          )}
        </nav>
      </Container>
    </header>
  )
}

export default Header