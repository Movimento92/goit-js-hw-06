const formEl = document.querySelector('.login-form')
const inputEmail = document.querySelector('input[name="email"]')
const inputPassword = document.querySelector('input[name="password"]')
const inputButton = document.querySelector('button')

formEl.addEventListener('submit', (event) => {
  event.preventDefault()
  if (inputEmail.value === '' || inputPassword.value === '') {
    alert('Заполните, пожалуйста, поля: Email и Password!')
    return
  } else {
    const {
      elements: { email, password },
    } = event.currentTarget
    console.log(email.value, password.value)
    formEl.reset()
  }
})

console.log(formEl, inputEmail, inputPassword, inputButton)