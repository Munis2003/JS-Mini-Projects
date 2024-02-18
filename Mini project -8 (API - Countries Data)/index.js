const countrySearch = document.querySelector("#underline");
const searchBtn = document.querySelector("#btn");
const seachResult = document.querySelector("#result-val");
const flagVal = document.querySelector("#flag");
const nameVal = document.querySelector("#name");
const capitalVal = document.querySelector("#capital");
const continentVal = document.querySelector("#continent");
const populationVal = document.querySelector("#population");
const currencyVal = document.querySelector("#currency");
const shortFrmCur = document.querySelector("#currencyShort");
const commonLang = document.querySelector("#comLang");

searchBtn.addEventListener('click',()=>{
    let countryName = countrySearch.value;
    let finalApi=`https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(finalApi)
    fetch(finalApi)
    .then((response) => response.json())
    .then((data)=>{
        seachResult.style.display = 'block';

        countrysrr = data[0]
        console.log(countrysrr)
        flagVal.src = countrysrr.flags.svg;
        nameVal.innerHTML = countrysrr.name.common;
        capitalVal.innerHTML=countrysrr.capital;
        continentVal.innerHTML = countrysrr.continents;
        populationVal.innerHTML = countrysrr.population;
        shortFrmCur.innerHTML = Object.keys(countrysrr.currencies)[0];
        currencyVal.innerHTML = countrysrr.currencies[Object.keys(countrysrr.currencies)].name;
        commonLang.innerHTML = Object.values(countrysrr.languages).toString().split(' , ').join(' , ')

        
    })
    .catch(()=>{
        if(countryName.length === 0)
        {
            seachResult.innerHTML = `<h4>The input field cannot be empty</h4>`
        }
        else
        {
            seachResult.innerHTML = `<h4>Please enter a valid country name</h4>`
        }
    })

})