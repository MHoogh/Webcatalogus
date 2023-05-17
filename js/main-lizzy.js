//urls
const bowieUrl = 'https://mbo-sd.nl/period3-fetch/music-artist-david-bowie';
const sheeranUrl = 'https://mbo-sd.nl/period3-fetch/music-artist-ed-sheeran';
const emersonUrl = 'https://mbo-sd.nl/period3-fetch/music-artist-emerson-lake-palmer';

//queryselectors 
const blockPart = document.querySelector('.block-part'); 
const bowiePage = document.querySelector('.bowie-page');
const sheeranPage = document.querySelector('.sheeran-page');
const emersonPage = document.querySelector('.emerson-page');

//let
let useUrl = bowieUrl;

//switch to correct page
if (sheeranPage){
    useUrl = sheeranUrl
}else if(emersonPage){
    useUrl = emersonUrl;
}

//fetch, correct info to html page

if (useUrl && (bowiePage || sheeranPage || emersonPage)) {
    fetch(useUrl)
    .then(myData => myData.json())
    .then(textData => createCards(textData));
}

function createCards(data) {
    // console.log(textData);
    data.forEach(function (info) { //uses all data after eachother
        const newDiv = document.createElement('div'); //created new div element

        newDiv.innerHTML = ` 
        <div class="row pt-5">
        <div class="m-4 col-4 mx-auto d-block border border-dark white">
            <h1 class="text-center">${info.title}</h1>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <img class="w-75 rounded m-2 img-fluid" src="${info.imageUrl}" alt="stock image">
        </div>
        <div class="col white border border-dark m-2">
            <p class="fs-4 ">${info.description}</p>
        </div>
        <div class="col white border border-dark m-2">
            <ul>
                <li class="mt-3">Release year: ${info.releaseYear}</li>
                <li class="mt-3">Album name: ${info.albumName}</li>
                <li class="mt-3">Video duration: ${info.duration}</li>
            </ul>
            <video class="mt-5" controls src="${info.videoUrl}"></video>
        </div>
        </div>
        `; //added html to new div with innerHTML

        // console.log(blockPart);
       blockPart.append(newDiv); //adds the newdiv element to the blockpart element
    });
}
