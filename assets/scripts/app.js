'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const events = require('./auth/events')
const listingEvents = require('./listing/events')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#change-password-user-form').hide()
  $('#sign-out-user-form').hide()
  // $('#listing-create-form').hide()
  // $('#listing-index-button').hide()
  // $('#listing-show-form').hide()
  // $('#listing-update-form').hide()
  // $('#listing-delete-form').hide()
  $('#sign-up-user-form').on('submit', events.onSignUp)
  $('#sign-in-user-form').on('submit', events.onSignIn)
  $('#change-password-user-form').on('submit', events.onChangePassword)
  $('#listing-create-form').on('submit', listingEvents.onCreateReview)
  $('#listing-index-button').on('click', listingEvents.onGetReviews)
  // $('#listing-show-form').on('submit', listingEvents.onShowReview)
  // $('#listing-update-form').on('submit', listingEvents.onUpdateReview)
  // $('#listing-delete-form').on('submit', listingEvents.onDeleteReview)
  $('#sign-out-user-form').on('submit', events.onSignOut)
})
