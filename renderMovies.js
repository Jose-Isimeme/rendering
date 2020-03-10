function renderMovies(movies) {

    var renderMoviesHTML = movies.map(renderMovie);

    var movieHTML = 
    `
        <div class="movie">
            ${renderMoviesHTML.join("")}
        </div>
    `;
    return movieHTML;
};


function renderMovie(movie) {
    return `
        <div class="card color-black bg-dark py-3 px-3" style="width: 600px">
            <div class="row justify-content-center">
                <div class="col-6 rounded">
                    <img class="card-img" src="${movie.poster}">
                </div>
                <div class="col-6 bg-secondary rounded">
                    <div class="card-body-right">
                        <h1>${movie.title}</h1>
                        <p>${movie.year}</p>
                        <h3>IMDB:</h3>
                        <h3>${movie.imdbRating}/10</h3>
                        <br>
                        <h3>Rotten Tomatoes</h3>
                        <h3>${movie.rottenTomatoesRating}</h3>
                    </div>
                </div>
            </div>
       </div>
       `;
}

function movies() {
    var content = document.getElementById('content');

    var moviesAbstraction = [
        {
            title: "The Dark Knight",
            year: 2008,
            imdbID: "tt0468569",
            poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.94
        },
        {
            title: "The Dark Knight Rises",
            year: 2012,
            imdbID: "tt1345836",
            poster: "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg",
            imdbRating: 8,
            rottenTomatoesRating: 0.82
        },
        {
            title: "The Incredibles",
            year: 2004,
            imdbID: "tt0317705",
            poster: "https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.91
        }
    ]

    content.innerHTML = renderMovies(moviesAbstraction);

}