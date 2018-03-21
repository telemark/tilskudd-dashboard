const axios = require('axios')

export default async url => {
  const result = await axios(url)
  return result.data
}
