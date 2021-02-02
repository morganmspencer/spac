import { db } from 'src/lib/db'
import { foreignKeyReplacement } from 'src/lib/utils'

export const spacs = () => {
  return db.spac.findMany()
}

export const spac = async ({ id, symbol }) => {
  if (id) {
    return db.spac.findUnique({
      where: { id },
    })
  } else {
    const symbolQuery = await db.spac.findUnique({
      where: { symbol },
    })

    if (symbolQuery) {
      return symbolQuery
    } else {
      return db.spac.findUnique({
        where: { ipoSymbol: symbol },
      })
    }
  }
}

export const createSpac = ({ input }) => {
  return db.spac.create({
    data: foreignKeyReplacement(input),
  })
}

export const updateSpac = ({ id, input }) => {
  return db.spac.update({
    data: foreignKeyReplacement(input),
    where: { id },
  })
}

export const deleteSpac = ({ id }) => {
  return db.spac.delete({
    where: { id },
  })
}

export const Spac = {
  users: (_obj, { root }) =>
    db.spac.findUnique({ where: { id: root.id } }).users(),
}
