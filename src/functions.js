var hr = new HttpRequest();
hr.open('GET', "https://ipinfo.io/json", true);
hr.send();
hr.addEventListener("readystatechange", processRequest, false);

var hr = new XMLHttpRequest();
hr.open('GET', "https://ipinfo.io/json", true);
hr.send();

hr.onreadystatechange = processRequest;

function processRequest(e) {
  if (hr.readyState == 4 && hr.status == 200) {
    var response = JSON.parse(hr.responseText);
    alert(response.ip);
  }
}
