const btnVal = document.querySelector(".btn");
const textField = document.querySelector("#textarea")

btnVal.addEventListener("click",()=>{
    let otplength = 6;
    let genOTP = Math.floor(Math.random() * Math.pow (10,otplength));
    textField.innerHTML = genOTP;
})