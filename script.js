document.getElementById('emailForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission
  
    // Get the email input value
    var emailInput = document.getElementById('email').value;
  
    // Here, you can perform any necessary validation of the email address
  
    // Redirect to "done.html" after successful form submission
    window.location.href = 'done.html';
  });
  