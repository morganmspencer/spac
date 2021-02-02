import { useState } from 'react'
import Modal from 'react-modal'
import { useAuth } from '@redwoodjs/auth'

Modal.setAppElement('#redwood-app')

const LoginButton = () => {
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
  return (
    <>
      <button onClick={openModal}>Login / Signup</button>
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
    </>

  )
}

export default LoginButton
