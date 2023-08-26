const form = document.querySelector("#searchForm");

form.addEventListener('submit', async (e) => {
    try {
        e.preventDefault();
        const title = form.elements.query.value;
        const config = { params: { q: title } };
        const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
        getImages(res.data);
    } catch (e) {
        console.log("Error in event listener: ", e);
    }
})

const getImages = async (shows) => {
    try {
        for (let response of shows) {
            if (response.show.image.medium) {
                const poster = document.createElement('img');
                poster.src = response.show.image.medium;
                poster.style.margin = "10px"
                document.body.append(poster);
                form.elements.query.value = '';
            }
        }
    } catch (e) {
        console.log("Error in getImages: ", e);
    }
}