import { db } from 'src/lib/db'
import { foreignKeyReplacement } from 'src/lib/utils'

export const users = () => {
  return db.user.findMany()
}

export const user = ({ id }) => {
  return db.user.findUnique({
    where: { id },
  })
}

export const createUser = ({ input }) => {
  return db.user.create({
    data: foreignKeyReplacement(input),
  })
}

export const updateUser = ({ id, input }) => {
  return db.user.update({
    data: foreignKeyReplacement(input),
    where: { id },
  })
}

export const favorites = async ({ id }) => {
  const user = await db.user.findUnique({
    where: { id },
    include: {
      favorites: true,
    },
  })

  if (!user || !user.favorites) {
    return null
  } else {
    return user.favorites
  }
}

export const addUserFavorite = ({ id, spacId }) => {
  return db.user.update({
    data: {
      favorites: {
        connect: {
          id: spacId,
        },
      },
    },
    where: { id },
  })
}

export const removeUserFavorite = ({ id, spacId }) => {
  return db.user.update({
    data: {
      favorites: {
        disconnect: {
          id: spacId,
        },
      },
    },
    where: { id },
  })
}

export const deleteUser = ({ id }) => {
  return db.user.delete({
    where: { id },
  })
}

export const User = {
  favorites: (_obj, { root }) =>
    db.user.findUnique({ where: { id: root.id } }).favorites(),
}
