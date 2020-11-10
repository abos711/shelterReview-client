'use strict'

const config = require('../config')
const store = require('../store')

const createReview = function (review) {
  return $.ajax({
    url: config.apiUrl + '/listings',
    method: 'POST',
    headers: {
      // header "Content-Type: application/json" \
      Authorization: 'Bearer ' + store.user.token
    },
    data: review
  })
}

const getReviews = function () {
  return $.ajax({
    url: config.apiUrl + '/listings',
    method: 'GET',
    headers: {
      // header "Content-Type: application/json" \
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const showReview = function (id) {
  return $.ajax({
    // add listing id here
    url: config.apiUrl + '/listings/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const updateReview = function (data) {
  // const review = data.event
  return $.ajax({
    url: config.apiUrl + '/listings/' + data.listing.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

const deleteReview = function (id) {
  return $.ajax({
    url: config.apiUrl + '/listings/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  createReview,
  getReviews,
  showReview,
  updateReview,
  deleteReview
}
