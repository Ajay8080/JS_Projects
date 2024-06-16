document.addEventListener('DOMContentLoaded', () => {
    const countryListContainer = document.getElementById('country-list');
    const darkModeToggle = document.getElementById('darkModeToggle');

    darkModeToggle.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');
    });

    fetch('https://api.sampleapis.com/countries/countries')
        .then(response => response.json())
        .then(data => {
            data.forEach(country => {
                const countryElement = document.createElement('div');
                countryElement.classList.add('country');

                if (country.flag) {
                    const countryFlag = document.createElement('img');
                    countryFlag.src = country.flag;
                    countryFlag.alt = `${country.name} flag`;
                    countryElement.appendChild(countryFlag);
                }

                const countryName = document.createElement('h2');
                countryName.textContent = country.name;
                countryElement.appendChild(countryName);

                if (country.capital) {
                    const countryCapital = document.createElement('p');
                    countryCapital.textContent = `Capital: ${country.capital}`;
                    countryElement.appendChild(countryCapital);
                }

                if (country.region) {
                    const countryRegion = document.createElement('p');
                    countryRegion.textContent = `Region: ${country.region}`;
                    countryElement.appendChild(countryRegion);
                }

                if (country.population) {
                    const countryPopulation = document.createElement('p');
                    countryPopulation.textContent = `Population: ${country.population}`;
                    countryElement.appendChild(countryPopulation);
                }

                countryListContainer.appendChild(countryElement);
            });
        })
        .catch(error => {
            console.error('Error fetching country data:', error);
        });
});
