module.exports = data => {
  return data.reduce((accumulator, current) => {
    const { total } = current
    const name = /folkehelse/.test(current._id) ? 'Folkehelse' : 'Kultur'
    accumulator.push({ name, total })
    return accumulator
  }, [])
}
