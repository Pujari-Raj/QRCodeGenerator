//Gathering elements
const generatebtn = document.querySelector(".submit");
let qr_code_img = document.querySelector(".qrimg");
let userinput = document.querySelector(".data");

// EventListener on button-click
generatebtn.addEventListener('click', () => {
    console.log('button clicked');
    if(userinput.value !== ""){
        generate(userinput);
    }
    else{
        alert("Provide a valid input");
    }
})

// function to generate QR-Code after taking user's input
function generate(user_input){
    console.log("generate called!!!");
    qr_code_img.style = "";

    //Using the Object of QRCODE from qrcode library
    var qr_code = new QRCode(qr_code_img,{
        text : `${user_input.value}`,
        width: 150, //128
        height: 150,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
}

generate(userinput);