// Create 4 variables and assign them to their respective elements: setupDiv, punchlinDiv, punchlineBtn, newJokeBtn

const setupDiv = document.getElementById("setup");
const punchlineDiv = document.getElementById("punchline");
const punchlineBtn = document.getElementById("punchlineBtn");
const newJokeBtn = document.getElementById("newJokeBtn");
let punchline;

// Event Listener for punchline button

punchlineBtn.addEventListener('click', getPunchline);

// Event Listener for get joe button
newJokeBtn.addEventListener('click', getJoke);

function getPunchline() {
    punchlineDiv.innerHTML = punchline;
    punchlineDiv.classList.add('bubble');
    punchlineBtn.classList.toggle('hidden');
    newJokeBtn.classList.toggle('hidden');
}




// Setup an async function called getJoke
async function getJoke() {
    // Create a variable called jokePromise that fetches a joke from https://official-joke-api.appspot.com/jokes/programming/random
    const jokePromise = await fetch('https://official-joke-api.appspot.com/jokes/programming/random');
    // create a variable called joke that consumes the json data
    const joke = await jokePromise.json();
    
    // Get the setup from the joke and insert it into the setupDiv element
    setupDiv.innerHTML = joke[0].setup;
    
    // Create a global variable called punchline which will store the current punchline and will be updated with each new joke
    // Assign the current jokes punchline to the punchline variable.
    punchline = joke[0].punchline;
    
    //Empty punchlineDiv with empty string
    punchlineDiv.innerHTML = "";
    //Make bubble disapear when click
    punchlineDiv.classList.remove('bubble');
    //Hide punchline and JokeBtn
    punchlineBtn.classList.toggle('hidden');
    newJokeBtn.classList.toggle('hidden');
}

getJoke();