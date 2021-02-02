import { render } from '@redwoodjs/testing'

import NewsList from './NewsList'

describe('NewsList', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewsList />)
    }).not.toThrow()
  })
})
