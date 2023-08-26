// axios.get("https://swapi.dev/api/people/1/")
//     .then((res) => {
//         console.log(res.data)
//     })
//     .catch((err) => {
//         console.log(err);
//     });


const getSWPerson = async () => {
    try {
        const res1 = await axios.get("https://swapi.dev/api/people/1/");
        console.log(res1.data);

        const res2 = await axios.get("https://swapi.dev/api/people/2/");
        console.log(res2.data);
    } catch (err) {
        console.log(err);
    }
}

getSWPerson();