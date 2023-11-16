import './App.css';
import React, {} from 'react';

function App() {
const landaAPI = () => {

  fetch('https://restcountries.com/v3.1/all')
  .then(res => res.json())
  .then(data => synaLand(data))

}

const synaLand = land =>{
  console.log(land)

  const landHTML = land.map(country => getCountry(country))

  const container = document.getElementById('countries');

  container.innerHTML = landHTML.join('')
}

const getCountry = (country) => {
  console.log(country)
  return `
  <div class="box" >
  <h2>${country.name.common}</h2>
  <img src=${country.flags.png}>
  <h3><strong>Capital: </strong>${country.capital}</h3>
  <h3><strong>Population:</strong> ${country.population}</h3>
  <h3><strong>Language: </strong> ${getLanguages(country.languages)}</h3>
  <h3><strong>Currency: </strong>${ getCurrency(country.currencies)}</h3>
  <h3><strong>Continent: </strong>${country.continents}</h3>
  <h3><strong>Coat of arms:</strong></h3>
  <img src=${country.coatOfArms.svg}>
  </div>
  
  `
}

function getLanguages(languages) {
  
  if (languages) {

    const languageCodes = Object.keys(languages);
    return languageCodes.join(', ');
  } else {
    return 'No language information';
  }
}

function getCurrency(currencies){
  if(currencies) {
    const currenciesCode = Object.keys(currencies);
    return currenciesCode.join(', ')
  }
  else {
    return 'No currencies information'
  }

}



landaAPI()

  return (
  <body>
    <div className='titill'>
    <h1>Countries</h1>
    </div>
    
    <div className='countries' id='countries'>

    </div>

  </body>
  );
}

export default App;
