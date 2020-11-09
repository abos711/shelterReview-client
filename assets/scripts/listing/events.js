'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

// const newUserButton = ....
// const returningUserButton = ....

const onCreateReview = (event) => {
  event.preventDefault()
  console.log('review created')
  const form = event.target
  console.log(event)
  const review = getFormFields(form)

  api.createReview(review)
    .then(ui.createReviewSuccess)
    .catch(ui.createReviewFailure)
}

const onGetReviews = (event) => {
  event.preventDefault()
  console.log(event)

  api.getReviews()
    .then(ui.getReviewsSuccess)
    .then(ui.getReviewsFailure)
}

// const onShowReview = function (event) {
//   event.preventDefault()
//
//   console.log('show a review')
//
//   // const form = event.target
//   //
//   // const data = getFormFields(form)
//   //
//   // api.showReview(data)
//   //   .then(ui.showReviewSuccess)
//   //   .catch(ui.showReviewFailure)
// }
//
// const onUpdateReview = function (event) {
//   event.preventDefault()
//
//   console.log('update a review')
//
//   // const form = event.target
//   //
//   // const data = getFormFields(form)
//   //
//   // api.updateReview(data)
//   //   .then(ui.updateReviewSuccess)
//   //   .catch(ui.updateReviewFailure)
// }
//
// const onDeleteReview = function (event) {
//   event.preventDefault()
//
//   console.log('delete a review')
//
//   // const form = event.target
//   //
//   // const data = getFormFields(form)
//   //
//   // api.deleteReview(data)
//   //   .then(ui.deleteReviewSuccess)
//   //   .catch(ui.deleteReviewFailure)
// }

module.exports = {
  onCreateReview,
  onGetReviews
  // onShowReview,
  // onUpdateReview,
  // onDeleteReview
}
