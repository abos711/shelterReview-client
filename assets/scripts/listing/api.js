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

// const showReview = function (review) {
//   return $.ajax({
//     // add listing id here
//     url: config.apiUrl + '/listings/:id',
//     method: 'GET',
//     headers: {
//       Authorization: 'Bearer ' + store.user.token
//     },
//     data: review
//   })
// }
//
// const updateReview = function (review) {
//   return $.ajax({
//     // add listing id here - might run into an error here
//     url: config.apiUrl + '/listings/:id',
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Bearer ' + store.user.token
//     },
//     data: review
//   })
// }
//
// const deleteReview = function (review) {
//   return $.ajax({
//     // add listing id here
//     url: config.apiUrl + '/listings/:id',
//     method: 'DELETE',
//     headers: {
//       Authorization: 'Bearer ' + store.user.token
//     },
//     data: review
//   })
// }

module.exports = {
  createReview,
  getReviews
  // showReview,
  // updateReview,
  // deleteReview
}
