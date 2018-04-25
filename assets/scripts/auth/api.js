'use strict'

const config = require('../config')
const store = require('../store')

const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    headers: {
      contentType: 'application/json'
    },
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    headers: {
      contentType: 'application/json'
    },
    data
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password/',
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out/',
    method: 'DELETE',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const addGame = function (data) {
  console.log('add game data is', data)
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: `Token token=${store.user.token}`
    },
    data
  })
}

const getGames = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const deleteGame = (gameId) => {
  return $.ajax({
    url: config.apiUrl + '/games/' + gameId,
    method: 'DELETE',
    headers: {
      // contentType: 'application/json',
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const updateGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games/' + data.game.id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: `Token token=${store.user.token}`
    },
    data: {
      game: {
        title: data.game.title
      }
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  addGame,
  getGames,
  deleteGame,
  updateGame
}
