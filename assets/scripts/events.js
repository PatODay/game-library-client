'use strict'

const api = require('./auth/api')
const getFormFields = require('../../lib/get-form-fields')
const ui = require('./auth/ui')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onAddGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.addGame(data)
    .then(ui.addGameSuccess)
    .catch(ui.addGameFailure)
}

const onUpdateGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateGame(data)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)
}

const onGetGames = (event) => {
  event.preventDefault()
  api.getGames()
    .then(ui.getGamesSuccess)
    .catch(ui.failure)
}

const onClearGames = (event) => {
  event.preventDefault()
  ui.clearGames()
}

const onDeleteGame = (event) => {
  event.preventDefault()
  const gameId = $(event.target).closest('ul').attr('data-id')
  api.deleteGame(gameId)
    .then(ui.removeGameSuccess)
    .catch(ui.removeGameFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#add-game').on('submit', onAddGame)
  $('#update-game').on('submit', onUpdateGame)
  $('#getGamesButton').on('click', onGetGames)
  $('#clearGamesButton').on('click', onClearGames)
  $('.content').on('click', 'button', onDeleteGame)
  $('#sign-out').on('click', onSignOut)
}

module.exports = {
  addHandlers
}
