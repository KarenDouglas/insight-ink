
console.log("it worked")

const signUp = async (event) => {
    console.log('button clicked')
    event.preventDefault();
  
    const username = document.querySelector('#typeEmailX').value;
    const password = document.querySelector('#typePasswordX').value;
    console.log(username)
    console.log(password)
  
    if (username && password) {
      try {
        const response = await fetch('/api/users/register', {
          method: 'POST',
          body: JSON.stringify({ username, password }),
          headers: { 'Content-Type': 'application/json' },
        });
  
        if (response.ok) {
          document.location.replace('/');
        } else {
          alert('Failed to sign up');
        }
      } catch (error) {
        console.error('Error during fetch:', error);
        alert('Failed to sign up. Please check your internet connection.');
      }
    }
};

document
  .querySelector('.signup').addEventListener('click', signUp);
