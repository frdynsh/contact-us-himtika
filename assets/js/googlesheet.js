const scriptURL = 'https://script.google.com/macros/s/AKfycbzplyRb4BPjDIbayHkMeo54BvePBJUw1u-sYk9AaTxiSZUWC3KpHFrxQNY-yCOcTwqQ/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {method: 'POST' , body: new FormData(form)})
    .then(response => alert( "Thank you! your form is submitted successfully." ))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message)) 
})