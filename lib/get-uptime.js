'use strict'

const axios = require('axios')

function parseStatus (data) {
  return data.items.map(item => {
    return {
      server: item.title.split(' ')[0],
      status: /UP/.test(item.title) ? 'UP' : 'DOWN',
      title: item.title,
      link: item.link,
      updated: item.pubDate
    }
  })
}

module.exports = async feed => {
  const results = await axios(feed)
  return parseStatus(results.data)
}
