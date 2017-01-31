var firstNameInput = document.getElementById('fname')
var lastNameInput = document.getElementById('lname')
var bioInput = document.getElementById('bio')
var emailInput = document.getElementById('email')
var phoneInput = document.getElementById('phone')
var previewLib = document.getElementById('preview-lib')
var rawLib = document.getElementById('raw-lib')

var updateProfile = function () {
  var firstName = firstNameInput.value
  var lastName = lastNameInput.value
  var bio = bioInput.value
  var email = emailInput.value
  var phone = phoneInput.value

  previewLib.innerHTML = 
    '<h1>Hi, my name is ' + firstName + ' ' + lastName + '!</h1> ' +
    '<p>' + bio + '</p> ' +
    '<p>' +
      'If you\'re interested in a date, you can email me at ' +
      '<a href="mailto:' + email + '" target="_blank">' + email + '</a> ' +
      'or give me a call at ' +
      '<a href="tel:' + phone + '" target="_blank">' + phone + '</a>.' +
    '</p>'

  rawLib.textContent = 
    '<h1>Hi, my name is ' + firstName + ' ' + lastName + '!</h1> ' +
    '<p>' + bio + '</p> ' +
    '<p>' +
      'If you\'re interested in a date, you can email me at ' +
      '<a href="mailto:' + email + '" target="_blank">' + email + '</a> ' +
      'or give me a call at ' +
      '<a href="tel:' + phone + '" target="_blank">' + phone + '</a>.' +
    '</p>'
}

firstNameInput.addEventListener('input', updateProfile)
lastNameInput.addEventListener('input', updateProfile)
bioInput.addEventListener('input', updateProfile)
emailInput.addEventListener('input', updateProfile)
phoneInput.addEventListener('input', updateProfile)