import { useState } from 'react'
import Modal from 'react-modal'
import { useAuth } from '@redwoodjs/auth'

Modal.setAppElement('#redwood-app')

const LoginButton = (props) => {
  const initialForm = props.signup

  const { logIn, logOut, signUp, isAuthenticated } = useAuth()
  const [modalIsOpen, setIsOpen] = useState(false)
  const [signupForm, setSignupForm] = useState(props.signup)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setSignupForm(initialForm)
    setIsOpen(false)
  }

  const resetForm = () => {
    setEmail('')
    setPassword('')
  }
  return (
    <>
      <button onClick={openModal}>
        {!initialForm ? 'Log in' : 'Sign up'}
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel={!signupForm ? 'Log in' : 'Sign up'}
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

        {!signupForm ? (
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
              }
            }}
          >
            Log in
          </button>
        ) : (
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
            Sign up
          </button>
        )}
        <hr />
        <button
          onClick={() => setSignupForm(current => !current)}
        >
          {!signupForm ? 'Sign up' : 'Log in'}
        </button>
      </Modal>
    </>

  )
}

export default LoginButton
