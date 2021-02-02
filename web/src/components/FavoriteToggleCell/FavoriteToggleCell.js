import { useState } from 'react'
import { useAuth } from '@redwoodjs/auth'
import { useMutation } from '@redwoodjs/web'
import { RiStarLine, RiStarFill } from 'react-icons/ri'

const ADD_USER_FAVORITE = gql`
  mutation AddUserFavoriteMutation($id: String!, $spacId: String!) {
    addUserFavorite(id: $id, spacId: $spacId) {
      id
      favorites {
        id
      }
    }
  }
`
const REMOVE_USER_FAVORITE = gql`
  mutation RemoveUserFavoriteMutation($id: String!, $spacId: String!) {
    removeUserFavorite(id: $id, spacId: $spacId) {
      id
      favorites {
        id
      }
    }
  }
`

export const FavoriteCell = ({ spacId }) => {
  const { currentUser } = useAuth()

  const userFavorites = currentUser.user.favorites

  const [favorite, setFavorite] = useState(
    userFavorites.some((favorite) => favorite.id === spacId)
  )

  const [addFavorite, { addLoading, addError }] = useMutation(
    ADD_USER_FAVORITE,
    {
      onCompleted: () => {
        setFavorite(true)
      },
    }
  )
  const [removeFavorite, { removeLoading, removeError }] = useMutation(
    REMOVE_USER_FAVORITE,
    {
      onCompleted: () => {
        setFavorite(false)
      },
    }
  )

  const onAddFavorite = () => {
    addFavorite({ variables: { id: currentUser.user.id, spacId } })
  }

  const onRemoveFavorite = () => {
    removeFavorite({ variables: { id: currentUser.user.id, spacId } })
  }

  return (
    <>
      {!favorite ? (
        <button onClick={onAddFavorite} title="Add favorite">
          <RiStarLine />
        </button>
      ) : (
        <button onClick={onRemoveFavorite} title="Remove favorite">
          <RiStarFill />
        </button>
      )}
      {addError && console.log(addError)}
      {removeError && console.log(removeError)}
    </>
  )
}

export default FavoriteCell
