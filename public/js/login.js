const loginFormHandler = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();
    // Gather the data from the form elements on the page
    const username = document.querySelector('#typeEmailX').value.trim();
    const password = document.querySelector('#typePasswordX').value.trim();
    console.log('user',username);
    console.log('passwor',password);
  
    if (username && password) {
      console.log(username);
      console.log(password);
      // Send the username and password to the server
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in');
      }
    }
  };

    document
  .querySelector('#loginForm')
  .addEventListener('submit', loginFormHandler);

