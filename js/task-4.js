const loginFormElem = document.querySelector('.login-form');

// console.log(loginFormElem);

loginFormElem.addEventListener('submit', event => {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;
  // console.log(email);
  // console.log(password);
  // console.log(email.value);
  // console.log(password.value);
  // console.log(email.value.trim().length);
  // console.log(password.value.trim().length);

  if (password.value.trim() === '' || email.value.trim() === '') {
    alert('All form fields must be filled in');
  }

  const userLoginInformation = {
    email: email.value.trim(),
    password: password.value.trim(),
  };

  console.log(userLoginInformation);

  event.currentTarget.reset();
});
