import { Link, routes, Redirect } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import { Helmet } from 'react-helmet'
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
          <Helmet>
            <title>Favorites</title>
          </Helmet>
          <FavoritesCell id={currentUser.user.id} />
        </>
      )}
    </MainLayout>
  )
}

export default FavoritesPage
