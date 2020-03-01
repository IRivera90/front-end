'use strict'

const store = require('./../store')
const signUpSuccess = function (response) {
  $('#message').show('')
  $('#message').text('Successfully signed up!')
  $('input[type=email]').val('')
  $('input[type=password]').val('')
  $('#sign-up').hide()
  $('#sign-in').show()
  // $('#message').text('Successfully signed up!')
  $('#message').delay(1500).hide('Successfully signed up!')
  // console.log(response)
}

const signInSuccess = function (response) {
  $('#message').show('')
  $('#message').text('Successfully signed in!')
  store.user = response.user
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#menu-toggle').show()
  // $('#change-password').show()
  $('#sign-out').show()
  $('#surveybox').show()
  $('input[type=email]').val('')
  $('input[type=password]').val('')
  $('.signup').hide()
  $('.signin').hide()
  $('.changePassNav').show()
  $('.createSurvey').show()
  $('.surveyIndex').show()
  // potatoes
  $('.createPotato').show()
  $('#potatoIndex').hide()
  $('#message').delay(1500).hide('Successfully signed up!')
  // $('input[type=email]').val('')
  // console.log(response)
  // $('#surveybox').append($('#createSurvey'))
}

const changeSuccess = function (response) {
  $('#message').show('')
  $('input[type=password]').val('')
  $('#change-password').hide()
  $('#message').text('Password changed successfully!')
  $('#message').delay(1500).hide('Password changed successfully!')
  // console.log(response)
}

const signOutSuccess = function (response) {
  $('#message').show()
  $('#message').text('Sign out complete!')
  $('.signup').show()
  $('.signin').show()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('.createSurvey').hide()
  $('.surveyIndex').hide()
  $('#createSurvey').hide()
  $('#updateSurvey').hide()
  $('.surveyList').hide()
  $('#oneSurvey').hide()
  $('#answerStats').hide()
  // potatoes
  $('#createPotato').hide()
  $('.createPotato').hide()
  $('#updatePotato').hide()
  $('#onePotato').hide()
  $('.potatoList').hide()
  // $('#sign-up').hide()
  // $('#sign-in').hide()
  $('.changePassNav').hide()
  $('#message').delay(1500).hide('Sign out complete!')
  $('#menu-toggle').hide()
  $('#wrapper').toggleClass('toggled', true)
}

const signUpFailure = function () {
  $('#message').show('')
  $('input[type=email]').val('')
  $('input[type=password]').val('')
  $('#message').text('Sign up failed!')
  $('#message').delay(1500).hide('Sign up failed!')
  // console.log(error)
}

const signInFailure = function () {
  $('#message').show('')
  $('input[type=email]').val('')
  $('input[type=password]').val('')
  $('#message').text('Sign in failed!')
  $('#message').delay(1500).hide('Sign in failed!')
  // console.log(error)
}

const changeFailure = function () {
  $('#message').show('')
  $('input[type=password]').val('')
  $('#message').text('Failed to change password.')
  $('#message').delay(1500).hide('Failed to change password.')
  // console.log(error)
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  changeSuccess,
  signOutSuccess,
  signUpFailure,
  signInFailure,
  changeFailure
}
