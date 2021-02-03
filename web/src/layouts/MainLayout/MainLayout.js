import { useState } from 'react'
import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import LoginButton from 'src/components/LoginButton'
import { RiLogoutBoxRLine, RiStarLine } from 'react-icons/ri'

const MainLayout = ({children}) => {
  const { logOut, isAuthenticated } = useAuth()

  const confirmLogout = () => {
    if (confirm('Are you sure you want to log out?')) {
      logOut()
    }
  }
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center gap-6 px-wrap py-2">
        <h1 className="text-xl">
          <Link to={routes.home()}>Title</Link>
        </h1>
        <div className="flex-1 flex items-stretch gap-2">
          <input type="text" placeholder="Search..." className="flex-1 px-2 py-1 border-solid border border-gray-200 rounded-md" />
        </div>
        <nav>
          <ul className="flex gap-2 items-center text-sm">
            {!isAuthenticated ? (
              <>
                <li>
                  <LoginButton />
                </li>
                <li>
                  <LoginButton signup={true} />
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to={routes.favorites()} className="flex gap-1 items-center px-2 py-1">
                    <RiStarLine />
                    <span className="sr-only md:not-sr-only">Favorites</span>
                  </Link>
                </li>
                <li>
                  <button onClick={confirmLogout} className="flex gap-1 items-center px-2 py-1">
                    <RiLogoutBoxRLine />
                    <span className="sr-only md:not-sr-only">Log out</span>
                  </button>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
      <main className="py-12 px-wrap flex-1">{children}</main>
      <footer className="px-wrap py-2">
        <p className="text-xs text-center">&copy; {new Date().getFullYear()} <Link to={routes.home()}>SiteTitle</Link>, all rights reserved.</p>
      </footer>
    </div>
  )
}

export default MainLayout
