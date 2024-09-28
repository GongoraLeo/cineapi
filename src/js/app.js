//Conexión con API y muestra de resultados

const form = document.querySelector('form');
const input = document.querySelector('input');



async function fetchData() {
    let page = 1;
    const year = input.value;
    const API_KEY = '9f34e35370607c52c29907707625da2d';
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&primary_release_year=${year}&page=${page}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;

}


form.addEventListener( 'submit', async (e) => {
  event.preventDefault();
  
  const resultado = await fetchData();

if (resultado) {
    const output = document.querySelector('#output');
    output.innerHTML = '';
  

    for (let i = 0; i < resultado.results.length; i++) {
        const title = resultado.results[i].title;
        const date = resultado.results[i].release_date;
        const img = resultado.results[i].poster_path;
        
        output.innerHTML += `
        <div class="card">
            <a href="" class=""><img src="https://image.tmdb.org/t/p/original/${img}" alt="${title}"></a>
            <h2 class="">${title}</h2>
            <p class="">${date}</p>
        </div>
        `;
    }
    // const page = resultado.results.page;
    // const pagina = document.querySelector('#pagina');
    // pagina.innerHTML = '';
    // pagina.innerHTML += `<p>Página actual: ${page}</p>
    // <a href="https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&primary_release_year=${year}&page=${page}">Página siguiente</a>`;
    
}
})



