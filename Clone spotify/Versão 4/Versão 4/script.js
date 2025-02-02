// Obtendo os elementos da página onde as informações de pesquisa e resultados serão exibidas
const searchInput = document.getElementById('search-input'); // Campo de entrada para a pesquisa
const resultArtist = document.getElementById("result-artist"); // Seção para exibir os resultados dos artistas
const resultPlaylist = document.getElementById('result-playlists'); // Seção para exibir as playlists

// Função para fazer a requisição à API para buscar artistas
function requestApi(searchTerm) {
    // Definindo a URL da API com o termo de busca inserido no campo de pesquisa
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    
    // Enviando a requisição GET à API e processando a resposta
    fetch(url)
        .then((response) => response.json()) // Convertendo a resposta para JSON
        .then((result) => displayResults(result)) // Passando os resultados para a função de exibição
}

// Função para exibir os resultados obtidos da API
function displayResults(result) {
    // Ocultando a seção de playlists
    resultPlaylist.classList.add("hidden");
    
    // Obtendo os elementos que vão exibir o nome e a imagem do artista
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    // Iterando pelos resultados da API (artistas encontrados)
    result.forEach(element => {
        artistName.innerText = element.name; // Definindo o nome do artista
        artistImage.src = element.urlImg; // Definindo a imagem do artista
    });

    // Exibindo a seção de resultados dos artistas
    resultArtist.classList.remove('hidden');
}

// Adicionando um ouvinte de evento para o campo de entrada de pesquisa
document.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase(); // Obtendo o valor da pesquisa em minúsculas
    
    // Se o campo de pesquisa estiver vazio, exibe a lista de playlists e esconde os resultados de artistas
    if (searchTerm === '') {
        resultPlaylist.classList.add('hidden');
        resultArtist.classList.remove('hidden');
        return
    }

    // Chama a função para fazer a requisição à API com o termo de busca
    requestApi(searchTerm);
})
