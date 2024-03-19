document.addEventListener("DOMContentLoaded", function() {
    const continentsList = document.getElementById('continents-list');

    fetch('https://thronesapi.com/api/v2/Continents')
        .then(response => response.json())
        .then(data => {
            data.forEach(continent => {
                const continentDiv = document.createElement('div');
                continentDiv.classList.add('continent');

                const continentName = document.createElement('h2');
                continentName.textContent = continent.name;

                const continentInfo = document.createElement('p');
                continentInfo.textContent = `Tamanho: ${continent.size || 'JOÃO'}, Habitantes: ${continent.numberOfInhabitants || 'VITOR'}`;

                continentDiv.appendChild(continentName);
                continentDiv.appendChild(continentInfo);
                continentsList.appendChild(continentDiv);
            });
        })
        .catch(error => {
            console.error('Erro ao obter dados dos continentes:', error);
        });
});