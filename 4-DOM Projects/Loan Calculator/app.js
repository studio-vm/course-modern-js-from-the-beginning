//^ Event listeners

//Listen for submit
document.getElementById('loan-form').addEventListener('submit', function (e) {
   //Hide results
   document.querySelector('.results').style.display = 'none';

   //Show loader  
   document.querySelector('#loading').style.display = 'block';

   setTimeout(calculateResults, 1000);

   e.preventDefault();
});

// Calculate Results
function calculateResults() {

   //UI Variables
   const amountEl = document.getElementById('amount');
   const interestEl = document.getElementById('interest');
   const yearsEl = document.getElementById('years');
   const monthlyPaymentEl = document.getElementById('monthly-payment');
   const totalPaymentEl = document.getElementById('total-payment');
   const totalInterestEl = document.getElementById('interest-payment');

   const principal = parseFloat(amountEl.value);
   const calculatedInterest = parseFloat(interestEl.value) / 100 / 12;
   const calculatedPayments = parseFloat(yearsEl.value) * 12;

   //Compute montlhy payment
   const x = Math.pow(1 + calculatedInterest, calculatedPayments);
   const monthly = (principal * x * calculatedInterest) / (x - 1);

   if (isFinite(monthly)) {
      monthlyPaymentEl.value = monthly.toFixed(2);
      totalPaymentEl.value = (monthly * calculatedPayments).toFixed(2);
      totalInterestEl.value =
         ((monthly * calculatedPayments) - principal)
            .toFixed(2);
      //show results
      document.querySelector('.results').style.display = 'block';
      //hide loader
      document.querySelector('#loading').style.display = 'none';
   } else {
      showError('Please Check Your Numbers')
   }
}

function showError(err) {
   //hide results
   document.querySelector('.results').style.display = 'none';
   //hide loader
   document.querySelector('#loading').style.display = 'none';

   //create a DIV
   const errorDiv = document.createElement('div');

   //get elements
   const card = document.querySelector('.card');
   const errorEl = document.querySelector('.error')
   const heading = document.querySelector('.heading');
   const results = document.querySelector('.results');

   // add Class
   errorDiv.className = 'alert alert-danger';

   //create text node and append to div
   errorDiv.appendChild(document.createTextNode(err));

   //insert error above heading;
   // card.insertBefore(errorDiv, results);
   errorEl.appendChild(errorDiv);

   //todo add this to loader div

   //clear Error after 3 seconds;

   setTimeout(function clearError() {
      document.querySelector('.alert').remove();
   }, 3000);
}

