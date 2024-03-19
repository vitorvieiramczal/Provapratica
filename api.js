document.addEventListener("DOMContentLoaded", function() {
    fetch('https://thronesapi.com/api/v2/Characters')
    .then(response => response.json())
    .then(data => {
        const characterList = document.getElementById('character-list');
        data.forEach(character => {
            const characterDiv = document.createElement('div');
            characterDiv.classList.add('character');
            characterDiv.innerHTML = `
            <h2>${character.fullName}</h2>
            <p>Family: ${character.family}</p>
            <p>Title: ${character.title}</p>
            <img src="${character.imageUrl}" alt="${character.fullName}">
            `;
            characterList.appendChild(characterDiv); 
        })
    })
    .catch(error => console.error('Error fetching characters:'));
});
