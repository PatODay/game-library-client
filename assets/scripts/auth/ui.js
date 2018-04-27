'use strict'

const store = require('../store')
const showGamesTemplate = require('../templates/game-listing.handlebars')

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
  $('#show-games').removeClass()
  $('input[type=text]').val('')
  $('input[type=password]').val('')
  setTimeout(() => {
    $('#sign-message').html('')
    $('#sign-message').addClass('hidden')
  }, 3000
  )
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
  $('#show-games').addClass('hidden')
  $('.content').empty()
  document.getElementById('update-game').reset()
  store.user = null
}

const addGameSuccess = function () {
  $('#sign-message').removeClass()
  $('#sign-message').text('Successfully added game')
  $('.content').empty()
  $('input[type=text]').val('')
  $('input[type=password]').val('')
  setTimeout(() => {
    $('#sign-message').addClass('hidden')
    $('#sign-message').text('')
  }, 3000
  )
}

const addGameFailure = function () {
  $('#sign-message').removeClass()
  $('#sign-message').text('Failed to add game')
  $('input[type=text]').val('')
  $('input[type=password]').val('')
  setTimeout(() => {
    $('#sign-message').addClass('hidden')
    $('#sign-message').text('')
  }, 3000
  )
}

const updateGameSuccess = function () {
  $('#sign-message').removeClass()
  $('#sign-message').text('Successfully updated game')
  $('.content').empty()
  $('input[type=text]').val('')
  $('input[type=password]').val('')
  $('input[type=number]').val('')
  setTimeout(() => {
    $('#sign-message').addClass('hidden')
    $('#sign-message').text('')
  }, 3000
  )
}

const updateGameFailure = function () {
  $('#sign-message').removeClass()
  $('#sign-message').text('Failed to update game')
  $('input[type=text]').val('')
  $('input[type=password]').val('')
  setTimeout(() => {
    $('#sign-message').addClass('hidden')
    $('#sign-message').text('')
  }, 3000
  )
}

const getGamesSuccess = (data) => {
  const showGamesHtml = showGamesTemplate({ games: data.games })
  $('.content').html(showGamesHtml)
  if (data.games.length === 0) {
    $('.content').html('You dont seem to have any games, you should add some')
  }
}

const clearGames = () => {
  $('.content').empty()
}

const removeGameSuccess = () => {
  $('#sign-message').removeClass()
  $('#sign-message').text('Game Removed')
  $('.content').empty()
  setTimeout(() => {
    $('#sign-message').addClass('hidden')
    $('#sign-message').text('')
  }, 3000
  )
}

const removeGameFailure = () => {
  $('#sign-message').text('Failed to remove game')
  setTimeout(() => {
    $('#sign-message').addClass('hidden')
    $('#sign-message').text('')
  }, 3000
  )
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  addGameSuccess,
  addGameFailure,
  getGamesSuccess,
  clearGames,
  removeGameFailure,
  removeGameSuccess,
  updateGameSuccess,
  updateGameFailure
}
