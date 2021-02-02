import { render } from '@redwoodjs/testing'

import DataPage from './DataPage'

describe('DataPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DataPage />)
    }).not.toThrow()
  })
})
