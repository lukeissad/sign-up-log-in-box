$(document).ready(function() {
  const signupForm = $('.signup-form');
  const loginForm = $('.login-form');
  const signupButton = $('.signup');
  const loginButton= $('.login');

  signupButton.on('click', function() {
    loginButton.removeClass('active');
    signupButton.addClass('active');
    signupForm.removeClass('hide');
    loginForm.addClass('hide');
  });

  loginButton.on('click', function() {
    signupButton.removeClass('active');
    loginButton.addClass('active');
    loginForm.removeClass('hide');
    signupForm.addClass('hide');
  });
});
