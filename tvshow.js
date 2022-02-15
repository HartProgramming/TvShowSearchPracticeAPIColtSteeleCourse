const form = document.querySelector("#form")
form.addEventListener("submit", async function(e){
    e.preventDefault();
    const userSearch = form.elements.search.value;
    console.log(userSearch)
    const config = { params: { q: userSearch}}
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    console.log(res.data[0].show.image.medium);
    makeImages(res.data);
    form.elements.search.value = "";
})

const makeImages = (shows) => {
    for (let result of shows){
        if(result.show.image){
            const img = document.createElement("IMG");
            img.src = result.show.image.medium;
            document.body.append(img);
        }
        
    }
}