const form = document.querySelector('form')
form.addEventListener('Submit', event => {
  // prevent the form submit from refreshing the page
  event.preventDefault()
 
  const { name, email, subject, message } = event.target
  console.log('Name: ', name.value)
  console.log('email: ', email.value)
  console.log('subject: ', subject.value)
  console.log('message: ', message.value)
  
})