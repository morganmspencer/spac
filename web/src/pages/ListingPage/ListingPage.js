import { Link, routes } from '@redwoodjs/router'

const ListingPage = () => {
  return (
    <>
      <h1>ListingPage</h1>
      <p>
        Find me in <code>./web/src/pages/ListingPage/ListingPage.js</code>
      </p>
      <p>
        My default route is named <code>listing</code>, link to me with `
        <Link to={routes.listing()}>Listing</Link>`
      </p>
    </>
  )
}

export default ListingPage
