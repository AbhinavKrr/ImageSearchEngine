const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMore = document.getElementById("show-more-btn");
const btn = document.getElementById("search");

let keyword = "";
let page = 1;

const clientId = "ZDNDIve7yav3FKT1AL2T-yndv1WAwgXZDLiGMx6tJ7Q"

async function searchImages(){
    keyword = searchBox.value;
    let url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${clientId}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    if(page === 1){
        searchResult.innerHTML = "";
    }

    const results = data.results;
    
    results.map((result)=>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imgLink = document.createElement("a");
        imgLink.href = result.links.html;
        imgLink.target = "_blank";

        imgLink.appendChild(image);
        searchResult.appendChild(imgLink);
    })

    showMore.style.display = "block"; 

}

searchForm.addEventListener("submit", function(event){
    event.preventDefault();
    page = 1;
    searchImages();

})

btn.addEventListener("click", function(event){
    event.preventDefault();
    page = 1;
    searchImages();
})

showMore.addEventListener("click", function(event){
    event.preventDefault();
    page++;
    searchImages();
})