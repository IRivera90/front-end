const config = require('./../config')
const store = require('./../store.js')

const getThisSurveyPotatos = (id) => {
  return $.ajax({
    url: config.apiUrl + '/potatos',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'potato': {
        'surveyRef': store.survey._id
      }
    }
  })
}

module.exports = {
  getThisSurveyPotatos
}
