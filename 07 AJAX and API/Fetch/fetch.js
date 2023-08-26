// fetch("https://swapi.dev/api/people/1/")
//     .then((res) => {
//         console.log("Resolved with response: ", res);
//         return res.json();
//     })
//     .then((data) => {
//         console.log('Actual data: ', data)
//     })
//     .catch((err) => {
//         console.log("Failed with error: ", err)
//     });


const loadStarWars = async () => {
    try {
        const res1 = await fetch("https://swapi.dev/api/people/1/");
        const data1 = await res1.json()
        console.log(data1);

        const res2 = await fetch("https://swapi.dev/api/people/2/");
        const data2 = await res2.json()
        console.log(data2);
    } catch (e) {
        console.log("An error occured: ", e);
    }
}

loadStarWars();