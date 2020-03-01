const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('./../../../lib/get-form-fields')
const store = require('./../store')

const showPotatoes = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.showPotatoes(data)
    .then(ui.onGetAllPotatoesSuccess)
    .catch(ui.onGetAllPotatoesFailure)
}

const onShowOnePotato = (event) => {
  const id = $(event.target).closest('section').data('id')
  $('#updatePotato').hide()
  $('#answerStats').hide()
  $('#onePotato').hide()
  $('#createPotato').hide()
  api.onShowOnePotato(id)
    .then(ui.onGetOnePotatoSuccess)
    .catch()
}

const createPotato = function (event) {
  event.preventDefault()
  $('#onePotato').hide()
  const form = event.target
  const data = getFormFields(form)
  api.createPotato(data)
    .then(ui.onCreatePotatoSuccess)
    .then(() => showPotatoes(event))
    .catch(ui.onCreatePotatoFailure)
}

const onUpdatePotato = (event) => {
  event.preventDefault()
  event.stopPropagation()
  const id = $(event.target).closest('section').data('id')
  store.potatoId = id // saving id of the element in the list (survey) that was clicked
  $('#createPotato').hide()
  $('#updatePotato').show()
  $('#createSurvey').hide()
  $('#oneSurvey').hide()
  $('#answerStats').hide()
  $('#updateSurvey').hide()
  $('#onePotato').hide()
}

const updatePotato = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.onUpdatePotato(data)
    .then(ui.onUpdatePotatoSuccess)
    .then(() => showPotatoes(event))
    .catch(ui.onUpdatePotatoFailure)
}

const onDeletePotato = (event) => {
  event.preventDefault()
  $('#answerStats').hide()
  $('#oneSurvey').hide()
  $('#onePotato').hide()
  const id = $(event.target).closest('section').data('id')
  // console.log(id)
  event.stopPropagation()
  api.onDeletePotato(id)
    .then(ui.onDeletePotatoSuccess)
    .then(() => showPotatoes(event))
    .catch(ui.onDeletePotatoFailure)
}

const showCreatePotatoForm = (event) => {
  $('#answerStats').hide()
  $('#oneSurvey').hide()
  $('#updateSurvey').hide()
  $('#createPotato').show()
  $('#createSurvey').hide()
  $('#onePotato').hide()
  $('#updatePotato').hide()
}

const addHandlers = () => {
  $('.potatoIndex').on('click', showPotatoes)
  $('#createPotato').on('submit', createPotato)
  $('#updatePotato').on('submit', updatePotato)
  $('.allSurveyList').on('click', '.updatePotato', onUpdatePotato)
  $('.allSurveyList').on('click', '.destroyPotato', onDeletePotato)
  $('.createPotato').on('click', showCreatePotatoForm)
  $('.allSurveyList').on('click', '.potatoList', onShowOnePotato)
}
module.exports = {
  addHandlers
}
