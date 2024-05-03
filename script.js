// Chuck Norris Joke API
const chuckNorrisAPI = 'https://api.chucknorris.io/jokes/random';

// Function to fetch Chuck Norris joke
function getChuckNorrisJoke() {
    fetch(chuckNorrisAPI)
        .then(response => response.json())
        .then(data => {
            document.getElementById('joke-text').textContent = data.value;
        })
        .catch(error => {
            console.error('Error fetching Chuck Norris joke:', error);
        });
}

// Initial call
getChuckNorrisJoke();
