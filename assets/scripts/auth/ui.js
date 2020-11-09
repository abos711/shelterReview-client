'use strict'

const store = require('./../store')

const signUpSuccess = (response) => {
  $('#message').text('You are all signed up ' + response.user.email)
  $('#sign-up-user-form').trigger('reset')
  $('#sign-in-user-form').trigger('reset')
  $('#sign-up-user-form').hide()
  $('#change-password-user-form').hide()
  $('#sign-out-user-form').hide()
}

const signUpFailure = () => {
  $('#message').text('Unsuccessful sign up, try again')
}

const signInSuccess = (response) => {
  store.user = response.user
  $('#message').text('Signed In!! ')
  $('#sign-in-user-form').trigger('reset')
  $('#sign-up-user-form').trigger('reset')
  $('#change-password-user-form').show()
  $('#listing-create-form').show()
  $('#listing-index-button').show()
  $('#listing-show-form').show()
  $('#sign-up-user-form').hide()
  $('#sign-in-user-form').hide()
  $('#sign-out-user-form').show()
}
const signInFailure = () => {
  $('#message').text('Unsuccessful sign in, try again')
  $('#sign-in-user-form').trigger('reset')
}

const changePasswordSuccess = (response) => {
  $('#message').text('Success! Password was changed')
  $('#sign-in-user-form').show()
  $('#change-password-user-form').trigger('reset')
  $('#change-password-user-form').show()
}
const changePasswordFailure = () => {
  $('#message').text('Unsuccessful password change, try again')
}
const signOutSuccess = () => {
  // // console.log('youre signed out')
  $('#message').text('Success! Come back soon! ' + store.user.email)
  $('#sign-up-user-form').show()
  $('#sign-in-user-form').show()
  $('#change-password-user-form').hide()
  $('#sign-out-user-form').hide()

  store.user = null
}
const signOutFailure = () => {
  $('#message').text('Unsuccessful sign out, try again')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
