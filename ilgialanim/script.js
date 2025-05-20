document.addEventListener("DOMContentLoaded", function () {
    let currentPage = 1;
    const container = document.getElementById("movieContainer");

    function renderMovieCards(data) {
        container.innerHTML = "";

        data.results.forEach(movie => {
            const card = document.createElement("div");
            card.classList.add("movie-card");

            const poster = document.createElement("img");
            poster.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
            poster.alt = movie.title;
            poster.classList.add("movie-poster");
            card.appendChild(poster);

            const title = document.createElement("div");
            title.textContent = movie.title;
            title.classList.add("movie-title");
            card.appendChild(title);

            const description = document.createElement("div");
            description.textContent = movie.overview;
            description.classList.add("movie-description");
            card.appendChild(description);

            container.appendChild(card);
        });
    }

    function fetchMovies(page) {
        fetch(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}`, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDBmZGM2NmZmZTk0OGU3MTg2MGNhYjAwNDc4YjUzNSIsInN1YiI6IjY2NDhmOTRlYWJlNzU2M2IxNTkyNGQ2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jeocerFNdTggsHxjYZ5sUX5REJoMYiteNrkmotCnIXQ',
                'Accept': 'application/json'
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                renderMovieCards(data);
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    }

    fetchMovies(currentPage);

    window.nextPage = function () {
        currentPage++;
        fetchMovies(currentPage);
    }

    window.previousPage = function () {
        if (currentPage > 1) {
            currentPage--;
            fetchMovies(currentPage);
        }
    }
});