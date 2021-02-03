import { useState } from 'react'
import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import FavoriteCell from 'src/components/FavoriteToggleCell'
import { truncate, timeTag } from 'src/utils/forms'
import useSortableData from 'src/utils/useSortableData'
import { RiStarLine } from 'react-icons/ri'

const SpacListing = (props) => {
  const { spacs } = props
  const { isAuthenticated } = useAuth()
  console.log(spacs)
  const { items, requestSort } = useSortableData(spacs)

  return (
    <div className="overflow-x-auto h-full" style={{maxHeight: '55vh'}}>
      <table className="listing-table w-full">
        <thead>
          <tr>
            {isAuthenticated && <th style={{width: '30px'}}><span className="sr-only">Favorite</span></th>}
            <th>
              <button onClick={() => requestSort('symbol')}>Symbol</button>
            </th>
            <th>
              <button onClick={() => requestSort('ipoDate')}>IPO Date</button>
            </th>
          </tr>
        </thead>
        <tbody>
          {items &&
            (items.length > 0 ? (
              items.map((spac) => (
                <tr key={spac.id}>
                  {isAuthenticated && (
                    <td style={{width: '30px'}}>
                      <FavoriteCell spacId={spac.id} />
                    </td>
                  )}
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
                      {timeTag(spac.ipoDate, true)}
                    </Link>
                  </td>
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
