

function handleSubmit(event) {
    event.preventDefault();
  }

  window.onload = function () {
    const submitBtn = document.querySelector('#submit-btn');
    submitBtn.addEventListener('click', handleSubmit);
 };

 const submitBtn = document.querySelector('#submit-btn');

function clearFields() {
  submitBtn.disabled = true;
}

window.onload = function () {
 const clearBtn = document.querySelector('#clear-btn');
 clearBtn.addEventListener('click', clearFields);
};