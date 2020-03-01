const store = require('./../store')
const potatoesTemplate = require('./../templates/potatoes.handlebars')
const showOnePotato = require('../templates/onePotato.handlebars')
const api = require('./../potato/api')

const onGetAllPotatoesSuccess = function (response) {
  const onGetAllPotatoesHtml = potatoesTemplate({potatos: response.potatos})
  $('.sendSurvey').show()
  $('#surveybox').show()
  $('.allSurveyList').html(onGetAllPotatoesHtml)
}

const onGetAllPotatoesFailure = (response) => {
  $('#message').show('')
  $('#message').text('Something went wrong!')
  $('#message').delay(2000).hide('Something went wrong!')
}

const onGetOnePotatoSuccess = (response) => {
  console.log(response)
  const showThisPotato = showOnePotato({ potato: response.potato })
  $('#updateSurvey').hide()
  $('#createSurvey').hide()
  $('#surveybox').html(showThisPotato)
  $('#onePotato').show()
  store.potato = response.potato
  api.onShowOnePotato(response.potato._id)
    .then(showThisPotato)
    .catch()
}

const onCreatePotatoSuccess = function (response) {
  $('#message').show('')
  $('#message').text('Created!')
  $('#message').delay(2000).hide('Created!')
  $('#createPotato').hide()
  $('#createPotato').trigger('reset')
}

const onCreatePotatoFailure = function () {
  $('#message').show('')
  $('#message').text('Something went wrong!')
  $('#message').delay(2000).hide('Something went wrong!')
}

const onUpdatePotatoSuccess = function (response) {
  $('#message').show('')
  $('#message').text('Updated!')
  $('#message').delay(2000).hide('Updated!')
  $('#updatePotato')[0].reset()
  $('#updatePotato').hide()
}
const onDeletePotatoFailure = () => {
  $('#message').show('')
  $('#message').text('Something went wrong!')
  $('#message').delay(2000).hide('Something went wrong!')
}
const onDeletePotatoSuccess = () => {
  $('#answerStats').hide()
  $('#message').show('')
  $('#message').text('Potato deleted.')
  $('#message').delay(2000).hide('Potato deleted.')
}
module.exports = {
  onGetAllPotatoesSuccess,
  onGetAllPotatoesFailure,
  onCreatePotatoSuccess,
  onCreatePotatoFailure,
  onUpdatePotatoSuccess,
  onDeletePotatoFailure,
  onDeletePotatoSuccess,
  onGetOnePotatoSuccess
}
