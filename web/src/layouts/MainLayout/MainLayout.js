import { useState } from 'react'
import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import Modal from 'react-modal'

Modal.setAppElement('#redwood-app')

const MainLayout = ({ children }) => {
  const { logIn, logOut, signUp, isAuthenticated } = useAuth()
  const [modalIsOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  const resetForm = () => {
    setEmail('')
    setPassword('')
  }
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
                <button onClick={openModal}>Login / Signup</button>
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
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Login / Signup"
        className="p-6"
        overlayClassName="w-full h-full bg-white bg-opacity-90 flex items-center justify-center absolute top-0 left-0"
      >
        <form>
          <input
            type="email"
            placeholder="email address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <br />
        <button
          disabled={(!email.length || !password.length) && !isAuthenticated}
          onClick={async () => {
            if (!isAuthenticated && email.length) {
              try {
                await logIn({ email, password })
                closeModal()
              } catch (e) {
                console.log(e)
                const supabaseError = JSON.parse(e.message)
                alert(supabaseError.error_description)
              }
            } else {
              await logOut()
            }
          }}
        >
          {isAuthenticated ? 'Log Out' : 'Log In'}
        </button>
        {!isAuthenticated && (
          <button
            disabled={(!email.length || !password.length) && !isAuthenticated}
            onClick={async () => {
              if (!isAuthenticated && email.length && password.length) {
                try {
                  await signUp({ email, password })

                  resetForm()
                } catch (e) {
                  const supabaseError = JSON.parse(e.message)
                  alert(supabaseError.msg)
                  console.log(e)
                }
              }
            }}
          >
            Sign Up
          </button>
        )}
        <br />
      </Modal>
      <main className="py-12 px-4 max-w-6xl mx-auto">{children}</main>
      <footer></footer>
    </>
  )
}

export default MainLayout
