'use strict'

const store = require('../store')

const signUpSuccess = function () {
  $('#sign-message').removeClass()
  $('#sign-message').text('Successfully signed up')
  $('input[type=text]').val('')
  $('input[type=password]').val('')
  setTimeout(() => {
    $('#sign-message').html('')
    $('#sign-message').addClass('hidden')
  }, 3000
  )
}

const signUpFailure = function () {
  $('#sign-message').removeClass()
  $('#signUpModal').modal('hide')
  $('#sign-message').text('Failed to sign up')
  $('input[type=text]').val('')
  $('input[type=password]').val('')
  setTimeout(() => {
    $('#sign-message').html('')
    $('#sign-message').addClass('hidden')
  }, 3000
  )
}

const signInSuccess = function (data) {
  $('#sign-message').removeClass()
  $('#sign-message').text('Successfully signed in')
  $('#signForms').addClass('hidden')
  $('#sign-up').addClass('hidden')
  $('#sign-in').addClass('hidden')
  $('#pwAndSignOut').removeClass()
  $('#sign-out').removeClass()
  $('input[type=text]').val('')
  $('input[type=password]').val('')
  setTimeout(() => {
    $('#sign-message').html('')
    $('#sign-message').addClass('hidden')
  }, 3000
  )
  console.log('store is', store)
  store.user = data.user
}

const signInFailure = function () {
  $('#sign-message').removeClass()
  $('#sign-message').text('Failed to sign in')
  $('input[type=text]').val('')
  $('input[type=password]').val('')
  setTimeout(() => {
    $('#sign-message').addClass('hidden')
    $('#sign-message').text('')
  }, 3000
  )
}

const changePasswordSuccess = function () {
  $('#sign-message').removeClass()
  $('#sign-message').text('Successfully changed password')
  $('input[type=text]').val('')
  $('input[type=password]').val('')
  setTimeout(() => {
    $('#sign-message').addClass('hidden')
    $('#sign-message').text('')
  }, 3000
  )
}

const changePasswordFailure = function () {
  $('#sign-message').removeClass()
  $('#sign-message').text('Failed to change password')
  $('input[type=text]').val('')
  $('input[type=password]').val('')
  setTimeout(() => {
    $('#sign-message').addClass('hidden')
    $('#sign-message').text('')
  }, 3000
  )
}

const signOutSuccess = function () {
  $('#sign-message').removeClass()
  $('#sign-message').text('Successfully signed out')
  $('#sign-up').removeClass()
  $('#sign-in').removeClass()
  $('#pwAndSignOut').addClass('hidden')
  store.user = null
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess
}
