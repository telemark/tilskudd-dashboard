module.exports = data => {
  return data.reduce((a, b) => {
    a.push({ name: b._id === null ? 'Folkehelse' : b._id, total: b.total })
    return a
  }, [])
}
