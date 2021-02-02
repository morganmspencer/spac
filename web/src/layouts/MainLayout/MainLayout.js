import { useState } from 'react'
import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import LoginButton from 'src/components/LoginButton'

const MainLayout = ({ children }) => {
  const { logOut, isAuthenticated } = useAuth()

  const confirmLogout = () => {
    if (confirm('Are you sure you want to log out?')) {
      logOut()
    }
  }
  return (
    <>
      <header className="flex items-center justify-between px-4 py-2">
        <h1 className="text-xl">
          <Link to={routes.home()}>Title</Link>
        </h1>
        <nav>
          <ul className="flex gap-4 items-center text-sm">
            {!isAuthenticated ? (
              <li>
                <LoginButton />
              </li>
            ) : (
              <>
                <li>
                  <Link to={routes.favorites()}>Favorites</Link>
                </li>
                <li>
                  <button onClick={confirmLogout}>Log out</button>
                </li>
              </>
            )}
            <li></li>
          </ul>
        </nav>
      </header>
      <main className="py-12 px-4 max-w-6xl mx-auto">{children}</main>
      <footer></footer>
    </>
  )
}

export default MainLayout
