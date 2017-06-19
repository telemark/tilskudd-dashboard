'use strict'

module.exports = data => {
  return [
    {name: 'Billedkunst', total: data.Billedkunst || 0},
    {name: 'Film', total: data.Film || 0},
    {name: 'Idrett', total: data.Idrett || 0},
    {name: 'Kulturarv', total: data.Kulturarv || 0},
    {name: 'Litteratur', total: data.Litteratur || 0},
    {name: 'Musikk', total: data.Musikk || 0},
    {name: 'Scenekunst', total: data.Scenekunst || 0},
    {name: 'Totalt kultur/idrett', total: data.antallKulturIdrett || 0},
    {name: 'Totalt folkehelse', total: data.antallFolkehelse || 0}
  ]
}
