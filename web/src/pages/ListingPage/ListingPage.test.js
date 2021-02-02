import { render } from '@redwoodjs/testing'

import ListingPage from './ListingPage'

describe('ListingPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ListingPage />)
    }).not.toThrow()
  })
})
