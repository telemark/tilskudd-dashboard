'use strict'

const axios = require('axios')

module.exports = async (url) => {
  const result = await axios(url)
  return result.data
}
