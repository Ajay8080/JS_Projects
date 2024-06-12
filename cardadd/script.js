document.getElementById('bikeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    addBikeCard();
});

function addBikeCard() {
    const bikeUrl = document.getElementById('bikeUrl').value;
    const bikeTitle = document.getElementById('bikeTitle').value;
    const bikeDescription = document.getElementById('bikeDescription').value;
    const bikeCardsContainer = document.getElementById('bikeCardsContainer');


    const bikeCard = document.createElement('div');
    bikeCard.classList.add('bike-card');

    
    const bikeImage = document.createElement('img');
    bikeImage.src = bikeUrl;
    bikeImage.alt = bikeTitle;

    const bikeInfo = document.createElement('div');
    bikeInfo.classList.add('bike-info');

    
    const bikeTitleElement = document.createElement('h3');
    bikeTitleElement.textContent = bikeTitle;

    
    const bikeDescriptionElement = document.createElement('p');
    bikeDescriptionElement.textContent = bikeDescription;

    
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.textContent = 'X';
    deleteButton.addEventListener('click', function() {
        bikeCard.remove();
    });

    
    bikeInfo.appendChild(bikeTitleElement);
    bikeInfo.appendChild(bikeDescriptionElement);
    bikeCard.appendChild(bikeImage);
    bikeCard.appendChild(bikeInfo);
    bikeCard.appendChild(deleteButton);

    
    bikeCardsContainer.appendChild(bikeCard);

    document.getElementById('bikeForm').reset();
}
