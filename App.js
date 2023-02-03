//Gathering elements
const generatebtn = document.getElementById("Submit");
let qr_code_img = document.getElementById("img");
let userinput = document.getElementById("input");

const apiUrl ="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=";

generatebtn.addEventListener("click",generateqrcode);

function generateqrcode  () {
    console.log('button clicked');
    let url = apiUrl+encodeURIComponent(userinput.value);
    fetch(url).then((response) => response).then((data) => {
        qr_code_img.style.display = "block";
        qr_code_img.src = data.url;
      });
}