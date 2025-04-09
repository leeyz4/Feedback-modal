const feedbackButton = document.getElementById('feedbackButton');
const rateButtons = document.querySelectorAll('.rating-btn');
const submitBtn = document.querySelector('.submit-btn');
const cancelBtn = document.querySelector('.cancel-btn');
const closeBtn = document.querySelector('.close');
const overlay = document.querySelector('.overlay');
let selectedRating = null;

  //Show the modal when the feedback button is clicked
feedbackButton.onclick = function() {
  overlay.style.display = "flex";
}
  //It handles the Rating buttons when they are clicked
rateButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    rateButtons.forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    selectedRating = btn.textContent;
    submitBtn.disabled = false;
  });
});

  //handles the submit button when clicked
submitBtn.addEventListener('click', () => {
  alert('Your response has been recorded successfully');
  overlay.style.display = 'none'; //hides the modal
 });

  //handles the cancel button when clicked
cancelBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
});

  //handles the close button when clicked
closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
});

  //It closes the modal when you outside of it
overlay.addEventListener('click', (e) => {
  if (e.target.classList.contains('overlay')) {
    overlay.style.display = 'none';
  }
});
