console.log("app.js loaded...")

const formresp = document.getElementById('contact-response')
const em = document.getElementById('email')
const msg = document.getElementById('mst')
const btnsubmit = document.getElementById('formsubmit')
const formcontact = document.getElementById('formContact')

function getCookie(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'))
    if (match) return match[2]
}

function submitbutton(e) {
 
  console.log('submit button pressed...')  

  const csrftoken = getCookie("csrftoken")

  // url to match in django:
  var url = 'http://127.0.0.1:8000/contact'

  fetch(url, {
    method: 'POST', 
    headers: {
        'Content-type':'application/json',
        'X-CSRFToken':csrftoken
    },
    body:JSON.stringify({'email':em, 'msg':msg})
    }).then(function(r){
        // console.log(body.em, body.msg)
        console.log("Thanks!")
        formcontact.reset()
        // em.disabled = true
        // msg.disabled = true
        // btnsubmit.disabled = true
        // btnsubmit.classList.add("cursor-default")
        formresp.innerHTML = "Thanks! -- " + Date()
    }).catch(function(e) {
        console.log('error: ' + e)
    })

    // e.preventDefault() 
}

