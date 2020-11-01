//^ Form BLUR event listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName() {
  const name = document.getElementById('name');
  //! letters, a-z, Capital or lowercase, 2-10
  const re = /^[a-zA-Z]{2,10}$/;
  if (!re.test(name.value)) {
    name.classList.add('is-invalid');
  } else {
    name.classList.remove('is-invalid');
  }
};
function validateZip() {
  const zip = document.getElementById('zip');
  //todo zip codes for uk;
  //! 12345  or 12345-6789
  // const re = /^[0-9]{5}(-[0-9]{4})?$/; //US ZIP CODE
  const re = /^([a-zA-Z]{1,2}\d[a-zA-Z\d]? ?\d[a-zA-Z]{2}|GIR ?0A{2})$/; //UK POST CODES
  if (!re.test(zip.value)) {
    zip.classList.add('is-invalid');
  } else {
    zip.classList.remove('is-invalid');
  }
};
function validateEmail() {
  const email = document.getElementById('email');
  //! email@email.com
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  if (!re.test(email.value)) {
    email.classList.add('is-invalid');
  } else {
    email.classList.remove('is-invalid');
  }
};
function validatePhone() {
  const phone = document.getElementById('phone');
  //! 555 555 5555
  const re = /\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
  if (!re.test(phone.value)) {
    phone.classList.add('is-invalid');
  } else {
    phone.classList.remove('is-invalid');
  }
};
