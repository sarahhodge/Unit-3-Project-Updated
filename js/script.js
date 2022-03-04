//job role option
const focusText = document.getElementById('name').focus();
const jobInput= document.getElementById('other-job-role');
const jobTitle= document.getElementById('title');

//hiding the input initially
jobInput.style.display= 'none';

//if they select other then the input will appear
jobTitle.addEventListener('change', (e) => {
  if (e.target.value === 'other') {
       jobInput.style.display = 'block';
   }else{
       jobInput.style.display = 'none';
   }
});


//tshirt info section
//choose a design, then a color (color wont appear until a design is selected)
const design = document.getElementById('design');
const color = document.getElementById('color');
const shirtColor = color.children;
shirtColor.textContent = 'Please select a T-shirt color';
color.disabled = true;

design.addEventListener('change', (e) => {
  color.disabled = false;
  for(let i = 0; i < shirtColor.length; i++){
    const theEvent = e.target.value;
    const attribute = shirtColor[i].getAttribute('data-theme');
    if (attribute === theEvent) {
        shirtColor[i].setAttribute = true;
        shirtColor[i].hidden = false;
    } else {
        shirtColor[i].setAttribute = false;
        shirtColor[i].hidden = true;
    }
}
});


//Register for activities section
//when selecting an activity, the totals section will add all the events selected
//variables for activities
const activities = document.getElementById('activities');
const activityCost = document.getElementById('activities-cost');
const checked = document.querySelectorAll('[type=“checkbox”]');
const activityBox = document.getElementById('activities-box');
let totalCost = 0;


//Created and event to listener for the total cost of selected activities
activities.addEventListener('change', e => {
  let eventCost = parseInt(event.target.getAttribute('data-cost'))
    if (event.target.checked){
        totalCost += eventCost;
      }
    else {
      totalCost -= eventCost;
    }
  activityCost.textContent= `Total: $${totalCost}`
});



//Payment info section
//when you select a payment method it should hide the other options
const payment = document.getElementById('payment');
const creditCard = document.getElementById('credit-card');
const paypal = document.getElementById('paypal');
const bitcoin = document.getElementById('bitcoin');
const selectedPayment = payment.firstElementChild.nextElementSibling;
//console.log(payment);
//console.log(creditCard);
//console.log(paypal);
//console.log(bitcoin);

paypal.style.display = 'none';
bitcoin.style.display = 'none';
selectedPayment.selected = true;
//console.log(selectedPayment);

//the payment method selected will show and the others will be hidden
payment.addEventListener('change', (e) => {
  if (e.target.value === 'paypal') {
    paypal.style.display = 'block';
    bitcoin.style.display = 'none';
    creditCard.style.display = 'none';
  }
  else if (e.target.value === 'bitcoin') {
    bitcoin.style.display = 'block';
    paypal.style.display = 'none';
    creditCard.style.display = 'none';
  }
  else {
    paypal.style.display = 'none';
    bitcoin.style.display = 'none';
    creditCard.style.display = 'block';
  }
});


//form validation section
const name = document.getElementById('name');
const email = document.getElementById('email');
const ccNumber = document.getElementById('cc-num');
const zipcode = document.getElementById('zip');
const cvv = document.getElementById('cvv');
const form = document.querySelector('form');

//passing an element through the function to see if it passes or fails
function passedValidation(element) {
  const formField = element.parentElement;
  formField.classList.add('valid');
  formField.classList.remove('not-valid');
  formField.lastElementChild.style.display = 'none';
}

function failedValidation(element) {
  const formField = element.parentElement;
  formField.classList.add('not-valid');
  formField.classList.remove('valid');
  formField.lastElementChild.style.display = 'block';
  event.preventDefault()
}


// “Name”
function validName() {
const nameValue = name.value;
const attendeeName = /^[A-Za-z]+$/.test(nameValue);
 if (attendeeName) {
     passedValidation(name);
 } else {
     failedValidation(name);
 };
 return attendeeName;
}

// “Email Address”
function validEmail() {
const emailValue = email.value;
const attendeeEmail = /^[^@]+@[^@]+\.[a-z]+$/i.test(emailValue);
  if (attendeeEmail) {
    passedValidation(email);
  } else {
    failedValidation(email);
  };
return attendeeEmail;
}

//“Activities”
function validActivity() {
  const validActivities = totalCost > 0;
    if (validActivities){
      passedValidation(activityBox);
    } else {
      failedValidation(activityBox);
};
return validActivities;
}

// “Credit Card”
function validCreditCardValid(){
const creditCardValue = ccNumber.value;
const attendeePayment = /\d{13,16}/.test(creditCardValue);
  if (attendeePayment) {
    passedValidation(ccNumber);
  } else {
    failedValidation(ccNumber);
  };
return attendeePayment;
}

// “Zip code”
function validZipCode(){
const zipCodeValue = zipcode.value;
const attendeeZipCode = /\d{5}/.test(zipCodeValue);
  if (attendeeZipCode) {
    passedValidation(zipcode);
  } else {
    failedValidation(zipcode);
  };
  return attendeeZipCode;
}

// “Cvv”
function validCvv(){
const cvvValue = cvv.value;
const attendeeCvv = /\d{3}/.test(cvvValue);
  if (attendeeCvv) {
    passedValidation(cvv);
  } else {
    failedValidation(cvv);
  };
return attendeeCvv;
}

//Use the “form” variable to listen for the submit event
form.addEventListener( 'submit', e => {
validName();
validEmail();
validActivity();
validCreditCardValid();
validZipCode();
validCvv();
});
