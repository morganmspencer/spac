import { useState } from 'react'
import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import FavoriteCell from 'src/components/FavoriteToggleCell'
import { truncate, timeTag } from 'src/utils/forms'
import { RiStarLine } from 'react-icons/ri'

const Listing = (props) => {
  const spacs = props.spacs
  return (
    <>
      <div className="overflow-y-auto" style={{ maxHeight: '25vh' }}></div>
    </>
  )
}

const SpacListing = ({ spacs }) => {
  const { isAuthenticated } = useAuth()

  const [listingHeights, setListingHeights] = useState()

  // var allSpacs = spacs,
  //   currentSpacs = [],
  //   mergedSpacs = [],
  //   newSpacs = [],
  //   upcomingSpacs = []

  // spacs.forEach((spac) => {
  //   if (spac.symbol === spac.ipoSymbol) {
  //     currentSpacs.push(spac)
  //   } else {
  //     mergedSpacs.push(spac)
  //   }
  // })

  return (
    <div className="overflow-x-auto">
      <table className="listing-table w-full">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>IPO Date</th>
            {isAuthenticated && <th>Favorite</th>}
          </tr>
        </thead>
        <tbody>
          {spacs &&
            (spacs.length > 0 ? (
              spacs.map((spac) => (
                <tr key={spac.id}>
                  <td className="">
                    <Link
                      to={routes.data({ symbol: spac.symbol })}
                      className="flex items-center gap-1 p-2 -m-2"
                    >
                      <span className="font-bold">{spac.symbol}</span>
                      {spac.symbol !== spac.ipoSymbol && (
                        <span className="text-xs">
                          {'(' + spac.ipoSymbol + ')'}
                        </span>
                      )}
                    </Link>
                  </td>
                  <td>
                    <Link
                      to={routes.data({ symbol: spac.symbol })}
                      className="flex items-center gap-1 p-2 -m-2"
                    >
                      {truncate(spac.ipoDate)}
                    </Link>
                  </td>
                  {isAuthenticated && (
                    <td>
                      <FavoriteCell spacId={spac.id} />
                    </td>
                  )}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={isAuthenticated ? 3 : 2}>No SPACS found</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default SpacListing
