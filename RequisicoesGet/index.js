
function createCountryCard(country){
    const card = document.createElement('div')
    card.classList.add('country')

    const countryName = country.name.common // Pegando o nome do  pais
    const name = document.createElement('h2')
    name.textContent = countryName

    //bandeira do pais
    const flag = document.createElement('img')
    flag.src = country.flags.svg
    flag.alt = countryName

    //Adicionando dentro da div criada
card.append(name,flag)
document.querySelector('#countries').append(card)

}


async function getCountries(){

const response = await fetch('https://restcountries.com/v3.1/all')
const countries = await response.json()
//createCountryCard(countries[68]) // Bandeira do brasil
 countries.forEach(createCountryCard)
}

getCountries()