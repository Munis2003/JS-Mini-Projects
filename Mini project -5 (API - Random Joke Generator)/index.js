const jokeContainer = document.querySelector("#joke");
const btnVal = document.querySelector("#btn");
const FinalUrl = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";


let getvalue = () =>{
    jokeContainer.classList.remove("fade")
    fetch(FinalUrl)
    .then(res=>res.json())
    .then(data=>jokeContainer.innerHTML=`${data.joke}`);
    jokeContainer.classList.add("fade")
}
btnVal.addEventListener("click",getvalue)