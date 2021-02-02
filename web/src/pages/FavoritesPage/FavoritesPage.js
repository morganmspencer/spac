import { Link, routes, Redirect } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import MainLayout from 'src/layouts/MainLayout'
import FavoritesCell from 'src/components/FavoritesCell'

const FavoritesPage = () => {
  const { isAuthenticated, currentUser } = useAuth()

  return (
    <MainLayout>
      <h1>FavoritesPage</h1>
      {!isAuthenticated ? (
        <Redirect to={routes.home()} />
      ) : (
        <>
          {console.log(currentUser.user.id)}
          <FavoritesCell id={currentUser.user.id} />
        </>
      )}
    </MainLayout>
  )
}

export default FavoritesPage
