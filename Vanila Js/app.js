 //const http = require('http')
import BASE_URL from './Config';

const url = "http://localhost:5000/";
function apicall(){
  console.log(BASE_URL);
fetch(url)      
  .then(response => response.json())
  .then(data => {
    debugger;
      var img = document.getElementById("img");
    img.src = data[0].img;


    var title = document.getElementById("message");
    title.innerHTML = data[0].title;
  });

}