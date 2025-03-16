console.log("hitesh")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
const customAlert = document.getElementById('custom-alert');

function showAlert(message, color) {
  customAlert.textContent = message;
  customAlert.style.backgroundColor = color;
  customAlert.style.display = 'block';
  setTimeout(() => {
    customAlert.style.display = 'none';
  }, 2000); // Hide the alert after 2 seconds
}

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    const color = e.target.id;
    body.style.backgroundColor = color;
    showAlert(`You have selected ${color} color`, color);
  });
});

