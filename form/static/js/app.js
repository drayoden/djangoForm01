function getCookie(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'))
    if (match) return match[2]
}

function submitContact() {
  console.log('submit button pressed...')  

  const csrftoken = getCookie("csrftoken")

  // url to match in django:
  var url = 'http://127.0.0.1:8000/contact'

  // get the values from the form:
  var email = document.getElementById('email').value
  var msg = document.getElementById('msg').value

  fetch(url, {
      method: 'POST', 
      headers: {
          'Content-type':'application/json',
          'X-CSRFToken':csrftoken
      },
      body:JSON.stringify({'email':email, 'msg':msg})
  }).then(function(r){
      // console.log(body.email, body.msg)
      document.getElementById('contact-response').innerHTML = "Thanks!"
  }).catch(function(e) {
      console.log('error: ' + e)
  })
}