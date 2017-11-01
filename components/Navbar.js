'use strict'

import React from 'react'
import Link from 'next/link'

export default class Navbar extends React.Component {
  render () {
    return (
      <nav>
        <ul className={'left'}>
          <li>{this.props.title}</li>
        </ul>
        <ul className={'right'}>
          <li><Link href='/' prefetch><a>Dashboard</a></Link></li>
          <li><Link href='/stats' prefetch><a>Statistikk</a></Link></li>
        </ul>
        <style jsx>{`
          nav {
            display: flex;
            justify-content: space-between;
            background-color: #FFD520;
            margin-bottom: 20px;
          }
          ul {
            margin: 0;
            padding: 0;
            list-style-type: none;
            display: flex;
            align-items: center;
          }
          ul.left {
            justify-content: flex-start;
          }
          ul.right {
            justify-content: flex-end;
          }
          li {
            font-size: large;
            margin: 10px;
          }
          a {
            text-transform: uppercase;
            text-decoration: none;
            color: black;
          }
          a:hover {
            color: #6AC4AE;
            text-decoration: underline;
          }
        `}
        </style>
      </nav>
    )
  }
}
