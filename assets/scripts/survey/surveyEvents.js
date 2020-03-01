const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('./../../../lib/get-form-fields')
const store = require('./../store')

const onCreateSurvey = (event) => {
  event.preventDefault()
  $('#updatePotato').hide()
  const form = event.target
  const data = getFormFields(form)
  // console.log(data)
  store.surveyQuestion = data.survey.question
  store.possibleAnswersArray = []
  store.possibleAnswersArray.push(data.answer1)
  store.possibleAnswersArray.push(data.answer2)
  store.possibleAnswersArray.push(data.answer3)
  store.possibleAnswersArray.push(data.answer4)

  api.createSurvey()
    .then(ui.onCreateSuccess)
    .then(() => onShowSurveys(event))
    .catch(ui.onCreateFailure)
}

const onShowSurveys = (event) => {
  event.preventDefault()
  $('#answerStats').hide()

  api.showAllSurveys()
    .then(ui.onGetAllSurveysSuccess)
    .catch(ui.onGetAllSurveysFailure)
}

const onShowOneSurvey = (event) => {
  const id = $(event.target).closest('section').data('id')
  $('#updatePotato').hide()
  $('#onePotato').hide()
  $('#createPotato').hide()
  api.onShowOneSurvey(id)
    .then(ui.onGetOneSurveySuccess)
    .catch(ui.onGetOneSurveyFailure)
}

const onSendSurvey = (event) => {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  store.currentAnswer = data.answer.answer
  store.currentSurveyId = $(event.target).closest('section').data('id')
  // console.log(data)
  api.onSendAnswers(data)
    .then(ui.sendSurveySuccess)
    .then($('#oneSurvey').hide())
    .catch(ui.sendSurveyFailure)
}

const onUpdateSurvey = (event) => {
  event.preventDefault()
  const id = $(event.target).closest('section').data('id')
  event.stopPropagation()
  store.SurveyId = id // saving id of the element in the list (survey) that was clicked
  $('#oneSurvey').hide()
  $('#answerStats').hide()
  $('#updateSurvey').show()
  $('#createSurvey').hide()
  $('#updatePotato').hide()
  $('#createPotato').hide()
  $('#onePotato').hide()
}

const onEditSurvey = (event) => {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  store.surveyQuestion = data.survey.question
  store.possibleAnswersArray = []
  store.possibleAnswersArray.push(data.answer1)
  store.possibleAnswersArray.push(data.answer2)
  store.possibleAnswersArray.push(data.answer3)
  store.possibleAnswersArray.push(data.answer4)

  api.onUpdateSurvey()
    .then(ui.onUpdateSurveySuccess)
    .then(() => onShowSurveys(event))
    .catch(ui.onUpdateSurveyFailure)
}

const onDeleteSurvey = (event) => {
  event.preventDefault()
  $('#answerStats').hide()
  $('#oneSurvey').hide()
  $('#onePotato').hide()
  const id = $(event.target).closest('section').data('id')
  // console.log(id)
  event.stopPropagation()
  api.onDeleteSurvey(id)
    .then(ui.onDeleteSurveySuccess)
    .then(() => onShowSurveys(event))
    .catch(ui.onDeleteSurveyFailure)
}
const showCreateSurveyForm = (event) => {
  $('#answerStats').hide()
  $('#oneSurvey').hide()
  $('#updateSurvey').hide()
  $('#surveybox').show()
  $('#createSurvey').show()
  $('#createPotato').hide()
  $('#onePotato').hide()
  $('#updatePotato').hide()
}

const addHandlers = function () {
  $('#createSurvey').on('submit', onCreateSurvey)
  $('.surveyIndex').on('click', onShowSurveys)
  $('.createSurvey').on('click', showCreateSurveyForm)
  $('.allSurveyList').on('click', '.surveyList', onShowOneSurvey)
  $('.allSurveyList').on('click', '.destroySurvey', onDeleteSurvey)
  $('.allSurveyList').on('click', '.updateSurvey', onUpdateSurvey)
  $('#updateSurvey').on('submit', onEditSurvey)
  $('#surveybox').on('submit', '.sendSurvey', onSendSurvey)
}

module.exports = {
  addHandlers
}
