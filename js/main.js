
(function ($) {
    "use strict";

    new WOW().init();


})(jQuery);


document.getElementById('toggleReviewForm').addEventListener('click', function () {
    var reviewForm = document.getElementById('reviewForm');
    var button = document.getElementById('toggleReviewForm');

    if (reviewForm.style.display === 'none') {
        reviewForm.style.display = 'block'; // Show the form
        button.textContent = 'Cancel review'; // Change button text
    } else {
        reviewForm.style.display = 'none'; // Hide the form
        button.textContent = 'Write a review'; // Reset button text
    }
});