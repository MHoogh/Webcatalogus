

const cards = document.querySelector('.content-block');

fetch('https://mbo-sd.nl/period3-fetch/music-genre-pop')
    .then(function (pop) {
        return pop.json();

    })
    .then(function (popmusic) {
        alterData(popmusic);
    })

function alterData(info) {

    for (let i = 0; i < info.length; i++) {
        let showinfo = info[i]
        console.log(showinfo)

        const newDiv = document.createElement('div'); //in de row wordt een div aangemaakt
        newDiv.classList.add('col-md-4') 
 

        //hier onder wordt de data van de fetch link gezet.
        newDiv.innerHTML = `
        <div class="card "> 

        <div class="card ">
        <img class="img-fluid card-img-top" src="${info[i].imageUrl}">
        <div class="card-body">
            <h4 class="card-title">${info[i].title}</h4>
            <p class="card-text">${info[i].description}</p> 
            <p class="card-text">Landen: ${info[i].countryOfOrigin}</p> 
            <p class="card-text">Artiesten: ${info[i].artists}</p>
            <p class="card-text">Jaar: ${info[i].year}</p>
        </div>
        </div>
`;

        cards.append(newDiv); //hij maakt elke keer een card automatisch aan 
    }

}



const cards1 = document.querySelector('.content-block1');

fetch('https://mbo-sd.nl/period3-fetch/music-genre-hiphop')
    .then(function (hiphop) {
        return hiphop.json();

    })
    .then(function (hiphopmusic) {
        alterData1(hiphopmusic);
    })

function alterData1(info1) {

    for (let i = 0; i < info1.length; i++) {    
        let showinfo1 = info1[i]
        console.log(showinfo1)

        const newDiv1 = document.createElement('div');
        newDiv1.classList.add('col-md-4') //zet het in een col-md-4, zorgt ervoor dat het ook responsive is.

        newDiv1.innerHTML = `
        <div class="card ">
        <img class="img-fluid card-img-top" src="${info1[i].imageUrl}">
        <div class="card-body">
            <h4 class="card-title">${info1[i].title}</h4>
            <p class="card-text">${info1[i].description}</p> 
            <p class="card-text">Landen: ${info1[i].countryOfOrigin}</p>
            <p class="card-text">Artiesten: ${info1[i].artists}</p>
            <p class="card-text">Jaar: ${info1[i].year}</p>
        </div>
        </div>
`;

        cards1.append(newDiv1);
    }

}


const cards2 = document.querySelector('.content-block2');

fetch('https://mbo-sd.nl/period3-fetch/music-genre-rock') //hier pakt hij de link
    .then(function (rock) {
        return rock.json();

    })
    .then(function (rockmusic) {
        alterData2(rockmusic);
    })

function alterData2(info2) {

    for (let i = 0; i < info2.length; i++) {    
        let showinfo2 = info2[i]
        console.log(showinfo2)

        const newDiv2 = document.createElement('div');
        newDiv2.classList.add('col-md-4')

        newDiv2.innerHTML = `
        <div class="card ">
        <img class="img-fluid card-img-top" src="${info2[i].imageUrl}">
        <div class="card-body">
            <h4 class="card-title">${info2[i].title}</h4>
            <p class="card-text">${info2[i].description}</p> 
            <p class="card-text">Landen: ${info2[i].countryOfOrigin}</p>
            <p class="card-text">Artiesten: ${info2[i].artists}</p>
            <p class="card-text">Jaar: ${info2[i].year}</p>
        </div>
        </div>
`;

        cards2.append(newDiv2);
    }

}