import { db } from 'src/lib/db'

export const spacs = () => {
  return db.spac.findMany()
}

export const spac = ({ id }) => {
  return db.spac.findUnique({
    where: { id },
  })
}

export const createSpac = ({ input }) => {
  return db.spac.create({
    data: input,
  })
}

export const updateSpac = ({ id, input }) => {
  return db.spac.update({
    data: input,
    where: { id },
  })
}

export const deleteSpac = ({ id }) => {
  return db.spac.delete({
    where: { id },
  })
}
