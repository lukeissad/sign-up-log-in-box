$(document).ready(function() {
  const signupForm = $('#signup-form');
  const loginForm = $('#login-form');
  const signupButton = $('.signup');
  const loginButton= $('.login');

  signupForm.hide();

  signupButton.on('click', function() {
    loginButton.removeClass('active');
    signupButton.addClass('active');
    signupForm.show();
    loginForm.hide();
  });

  loginButton.on('click', function() {
    signupButton.removeClass('active');
    loginButton.addClass('active');
    loginForm.show();
    signupForm.hide();
  });
});
