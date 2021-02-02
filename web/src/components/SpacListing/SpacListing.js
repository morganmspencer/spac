import { useState } from 'react'
import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import FavoriteCell from 'src/components/FavoriteToggleCell'
import { truncate, timeTag } from 'src/utils/forms'
import { RiStarLine } from 'react-icons/ri'

const SpacListing = ({ spacs }) => {
  const { isAuthenticated } = useAuth()

  var allSpacs = spacs,
    currentSpacs = [],
    mergedSpacs = [],
    newSpacs = [],
    upcomingSpacs = []

  spacs.forEach((spac) => {
    if (spac.symbol === spac.ipoSymbol) {
      currentSpacs.push(spac)
    } else {
      mergedSpacs.push(spac)
    }
  })

  const options = [
    { label: 'Current', value: 'current', listing: currentSpacs },
    { label: 'Upcoming Mergers', value: 'upcoming', listing: upcomingSpacs },
    { label: 'New', value: 'new', listing: newSpacs },
    { label: 'Merged', value: 'merged', listing: mergedSpacs },
    { label: 'Current & Merged', value: 'all', listing: allSpacs },
  ]

  const [listings, setListing] = useState(options[0].listing)

  function handleChange(e) {
    var result = options.filter((obj) => {
      return obj.value === e.target.value
    })
    setListing(result[0].listing)
  }

  return (
    <>
      <div className="flex justify-end">
        <select
          onChange={(e) => handleChange(e)}
          className="w-auto text-sm mb-1 cursor-pointer"
          style={{ textAlignLast: 'right' }}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <table className="aside-listing-table">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Today</th>
            {isAuthenticated && (
              <th>
                <span className="sr-only">Favorite</span>
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {listings &&
            (listings.length > 0 ? (
              listings.map((spac) => (
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
                      {truncate(spac.ipoSymbol)}
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
                <td colSpan="2">No SPACS found</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  )
}

export default SpacListing
