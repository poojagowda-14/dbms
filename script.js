// Function to show the booking form with selected movie details
function showBookingForm(movieTitle) {
    // Set movie name to the form input
    document.getElementById('movie').value = movieTitle;

    // Display the booking form
    document.getElementById('booking-form').style.display = 'block';
}
