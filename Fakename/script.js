document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const userInfoDiv = document.getElementById('user-info');

    generateBtn.addEventListener('click', generateUser);

    function generateUser() {
        fetch('https://randomuser.me/api/')
            .then(response => response.json())
            .then(data => {
                const user = data.results[0];
                userInfoDiv.innerHTML = `
                    <img src="${user.picture.large}" alt="User Picture">
                    <p><strong>Name:</strong> ${user.name.first} ${user.name.last}</p>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Location:</strong> ${user.location.city}, ${user.location.country}</p>
                `;
            })
            .catch(error => console.error('Error:', error));
    }
});
