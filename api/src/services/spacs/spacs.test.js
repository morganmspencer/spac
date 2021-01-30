import { spacs, spac, createSpac, updateSpac, deleteSpac } from './spacs'

describe('spacs', () => {
  scenario('returns all spacs', async (scenario) => {
    const result = await spacs()

    expect(result.length).toEqual(Object.keys(scenario.spac).length)
  })

  scenario('returns a single spac', async (scenario) => {
    const result = await spac({ id: scenario.spac.one.id })

    expect(result).toEqual(scenario.spac.one)
  })

  scenario('creates a spac', async (scenario) => {
    const result = await createSpac({
      input: {
        name: 'String',
        body: 'String',
        postId: scenario.spac.one.post.id,
      },
    })

    expect(result.name).toEqual('String')
    expect(result.body).toEqual('String')
  })

  scenario('updates a spac', async (scenario) => {
    const original = await spac({ id: scenario.spac.one.id })
    const result = await updateSpac({
      id: original.id,
      input: { name: 'String321078' },
    })

    expect(result.name).toEqual('String321078')
  })

  scenario('deletes a spac', async (scenario) => {
    const original = await deleteSpac({ id: scenario.spac.one.id })
    const result = await spac({ id: original.id })

    expect(result).toEqual(null)
  })
})
