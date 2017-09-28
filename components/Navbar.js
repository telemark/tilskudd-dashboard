'use strict'

import React from 'react'
import Link from 'next/link'
import Appbar from 'muicss/lib/react/appbar'

export default class Navbar extends React.Component {
  render () {
    return (
      <Appbar>
        <table width='100%'>
          <tbody>
            <tr className='in-the-middle'>
              <td className='mui--appbar-height'><h1 className='mui--text-title'>Tilskudd Dashboard</h1></td>
              <td className='mui--appbar-height right-side'><Link href='/' prefetch><a>Dashboard</a></Link> | <Link href='/stats' prefetch><a>Statistikk</a></Link></td>
            </tr>
          </tbody>
        </table>
        <style>{`
          .mui-appbar {
            background-color: white;
            color: black;
          }
          .right-side {
            text-align: 'right';
          }
          .in-the-middle {
            vertical-align: 'middle';
          }
        `}
        </style>
      </Appbar>
    )
  }
}
