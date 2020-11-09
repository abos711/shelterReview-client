const store = require('./../store')

const createReviewSuccess = (response) => {
  store.listing = response.listing
  $('#message').text('Success! You have created a review!')
  // trigger reset form
  // $('form').trigger('reset')
  $('#listing-create-form')
}

const createReviewFailure = () => {
  $('#message').text('Unsuccessful listing review, try again')
}

const getReviewsSuccess = (response) => {
  store.reviews = response.reviews
  // set variable
  $('review-display').html('')
  $('#message').text('Reviews: ')

  console.log(store.reviews)
  // undefined

//   store.reviews.forEach((currentReview) => {
//     if (store.user._id !== currentReview.owner) {
//       const responseHTML = (`
//         <h3>Address: ${currentReview.address}</h3>;
//         <p>Review: ${currentReview.review}</p>
//        <p> id number needs to be present to copy and paste for show
//       `)
//     }
// })
}

const getReviewsFailure = () => {
  $('#message').text('Unsuccessful review search, try again')
}

// const showReviewSuccess = (response) => {
//   store.review = response.review
//   // set variable
//   $('review-display').html('')
//   $('#message').text('Reviews: ')
//
// // not sure if this is correct (store.review)
//   console.log(store.review)
//   // undefined
//
// //   store.review((currentReview) => {
// //     if (store.user._id !== currentReview.owner) {
// //       const responseHTML = (`
// //         <h3>Address: ${currentReview.address}</h3>;
// //         <p>Review: ${currentReview.review}</p>
// //        <p> id number needs to be present to copy and paste for show
// //       `)
// //     }
// // })
// }
//
// const showReviewFailure = () => {
//   $('#message').text('Unsuccessful review search, try again')
// }
//
// const updateReviewSuccess = (response) => {
//   $('#message').text('Success, Review updated')
// }
//
// const updateReviewFailure = () => {
//   $('#message').text('Unable to update review, try again')
// }
//
// const deleteReviewSuccess = (response) => {
//   $('#message').text('Success, Review deleted')
// }
//
// const deleteReviewFailure = () => {
//   $('#message').text('Unable to update review, try again')
// }

module.exports = {
  createReviewSuccess,
  createReviewFailure,
  getReviewsSuccess,
  getReviewsFailure
  // showReviewSuccess,
  // showReviewFailure,
  // updateReviewSuccess,
  // updateReviewFailure,
  // deleteReviewSuccess,
  // deleteReviewFailure
}
