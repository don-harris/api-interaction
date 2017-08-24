//var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest

function getProverb() {

  var xhr = new XMLHttpRequest()

  xhr.open("GET", "https://eda-te-reo.herokuapp.com/api/proverbs", false)
  xhr.setRequestHeader('Content-Type', 'text/xml')
  xhr.send()

  // console.log(xhr.status);
  // console.log(xhr.statusText);
  // console.log(xhr.responseText);

  var response = JSON.parse(xhr.responseText)
  var sourceTxt = response.source
  var translationTxt = response.translation

  $('.sourceTxt').text(response.source);
  $('.translationTxt').text(response.translation);
  // return (sourceTxt, translationTxt)

}

getProverb()
