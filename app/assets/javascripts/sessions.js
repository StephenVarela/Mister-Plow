document.addEventListener('DOMContentLoaded', () => {
  let modalBG = document.querySelector('#sign-in-modal');
  let modalX = document.querySelector('.x-close-button');
  modalBG.addEventListener('click', () => {hideIt();})
  modalX.addEventListener('click', () => {hideIt();})

  let welcomebutton = document.querySelector('#welcome-button');
  let modalMain = document.querySelector('.modal-main');
  welcomebutton.addEventListener('click', (e) => {e.stopPropagation(); showIt();})
  modalMain.addEventListener('click', (e) => {e.stopPropagation();})
  
  let newUser = document.querySelector('.new-account');
  newUser.addEventListener('click', () => {switchFormUser()})
  
  let newLogin = document.querySelector('.new-login');
  newLogin.addEventListener('click', () => {switchFormLogin()})


  
  function showIt() {
    let display = document.querySelector('#sign-in-modal')
    display.classList.remove('display-none');
    display.classList.add('display-block');
  }
  function hideIt() {
    let display = document.querySelector('#sign-in-modal')
    display.classList.remove('display-block');
    display.classList.add('display-none');
  }
  function switchFormUser() {
    let loginForm = document.querySelector('.login-form');
    loginForm.classList.remove('display-block');
    loginForm.classList.add('display-none');

    let userForm = document.querySelector('.user-form');
    userForm.classList.remove('display-none');
    userForm.classList.add('display-block');
  }
  function switchFormLogin() {
    let loginForm = document.querySelector('.login-form');
    loginForm.classList.remove('display-none');
    loginForm.classList.add('display-block');

    let userForm = document.querySelector('.user-form');
    userForm.classList.remove('display-block');
    userForm.classList.add('display-none');
  }
})