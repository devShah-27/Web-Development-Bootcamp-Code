const div = document.querySelector("#joke");

const getDadJoke = async () => {
    const config = { headers: { Accept: 'application/json' } };
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    const joke = res.data.joke;
    const jokeDiv = document.createElement('div');
    jokeDiv.append(joke);
    div.append(jokeDiv);
}

const btn = document.querySelector("#getJoke");
btn.addEventListener('click', getDadJoke);