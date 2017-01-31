var fnameInput = document.getElementById('fname')
var lnameInput = document.getElementById('lname')
var bioInput = document.getElementById('bio')
var emailInput = document.getElementById('email')
var phoneInput = document.getElementById('phone')
var previewlib = document.getElementById('preview-lib')
var rawlib = document.getElementById('raw-lib')

var updateProfile = function () {
  var fname = fnameInput.value
  var lname = lnameInput.value
  var bio = bioInput.value
  var email = emailInput.value
  var phone = phoneInput.value

  previewlib.innerHTML = 
  '<h1>Hi, my name is ' + fname + ' ' + lname + '!</h1> ' +
  '<p>' + bio + '</p> ' +
  '<p>' +
    'If you\'re interested in a date, you can email me at ' +
    '<a href="mailto:' + email + '" target="_blank">' + email + '</a> ' +
    'or give me a call at ' +
    '<a href="tel:' + phone + '" target="_blank">' + phone + '</a>.' +
  '</p>'

  rawlib.textContent = 
  '<h1>Hi, my name is ' + fname + ' ' + lname + '!</h1> ' +
  '<p>' + bio + '</p> ' +
  '<p>' +
    'If you\'re interested in a date, you can email me at ' +
    '<a href="mailto:' + email + '" target="_blank">' + email + '</a> ' +
    'or give me a call at ' +
    '<a href="tel:' + phone + '" target="_blank">' + phone + '</a>.' +
  '</p>'
}

fnameInput.addEventListener('input', updateProfile)
lnameInput.addEventListener('input', updateProfile)
bioInput.addEventListener('input', updateProfile)
emailInput.addEventListener('input', updateProfile)
phoneInput.addEventListener('input', updateProfile)