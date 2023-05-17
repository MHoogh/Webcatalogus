console.log('Main JS loaded');

const block013 = document.querySelector(".block-013");
//called div to javascript

fetch('https://mbo-sd.nl/period3-fetch/music-event-013')
    //fetched the url link to js    
    .then(eventData => eventData.json())
    //changed the data to json objects    
    .then(textEvent => createCards(textEvent));

function createCards(dataEvent) {
    console.log(dataEvent);
    dataEvent.forEach(function (infoEvent) { //uses all data after eachother        
        const divEvent = document.createElement('div'); //created new div element    

        divEvent.innerHTML = `
        <div class="container-fluid">
        <div class="row mt-3">
        <div class="col white text-center fs-4 fst-italic text-decoration-underline">${infoEvent.title}</div>
        </div><div class="row mt-3"><div class="col-5 white shadow p-3 bg-body-tertiary rounded">${infoEvent.description}</div>
        <div class="col-4 white shadow p-3 bg-body-tertiary rounded"><ul>
        <li>${infoEvent.date}</li>
        <li>${infoEvent.time}</li>
        <li>${infoEvent.place}</li>
      </ul></div>
        <div class="col-3 white"><img class="w-75" src="${infoEvent.imageUrl}"></div>
        </div>
        
         `;
        //added html to new div with innerHTML       
        block013.append(divEvent);
        //adds the newdiv element  
    });
}

const blockAfas = document.querySelector(".block-Afas");
//called div to javascript

fetch('https://mbo-sd.nl/period3-fetch/music-event-afas-live')
    //fetched the url link to js    
    .then(afasData => afasData.json())
    //changed the data to json objects    
    .then(textAfas => createCards2(textAfas));

function createCards2(dataAfas) {
    // console.log(textData);    
    dataAfas.forEach(function (infoAfas) { //uses all data after eachother        
        const divAfas = document.createElement('div'); //created new div    

        divAfas.innerHTML = `
        <div class="container-fluid">
        <div class="row mt-3">
        <div class="col white text-center fs-4 fst-italic text-decoration-underline">${infoAfas.title}</div>
        </div><div class="row mt-3"><div class="col-5 white shadow p-3 bg-body-tertiary rounded">${infoAfas.description}</div>
        <div class="col-4 white shadow p-3 bg-body-tertiary rounded"><ul>
        <li>${infoAfas.date}</li>
        <li>${infoAfas.time}</li>
        <li>${infoAfas.place}</li>
      </ul></div>
        <div class="col-3 white"><img class="w-75" src="${infoAfas.imageUrl}"></div>
        </div>
        
         `;
        //added html to new div with innerHTML       
        blockAfas.append(divAfas);
        //adds the newdiv element   
    });
}

blockZiggo = document.querySelector(".block-Ziggo");
//called div to javascript

fetch('https://mbo-sd.nl/period3-fetch/music-event-ziggo-dome')
    //fetched the url link to js    
    .then(ziggoData => ziggoData.json())
    //changed the data to json objects    
    .then(textZiggo => createCards3(textZiggo));

function createCards3(dataZiggo) {
    // console.log(textData);    
    dataZiggo.forEach(function (infoZiggo) { //uses all data after eachother        
        const divZiggo = document.createElement('div'); //created new div 

        divZiggo.innerHTML = `
        <div class="container-fluid">
        <div class="row mt-3">
        <div class="col-12 white text-center fs-4 fst-italic text-decoration-underline">${infoZiggo.title}</div>
        </div>
        <div class="row mt-3">
        <div class="col-5 white shadow p-3 bg-body-tertiary rounded">${infoZiggo.description}</div>
        <div class="col-4 white shadow p-3 bg-body-tertiary rounded"><ul>
        <li>${infoZiggo.date}</li>
        <li>${infoZiggo.time}</li>
        <li>${infoZiggo.place}</li>
      </ul>
      </div>
        <div class="col-3 white"><img class="w-75 img-fluid" src="${infoZiggo.imageUrl}"></div>
        </div>
        
         `;
        //added html to new div with innerHTML       
        blockZiggo.append(divZiggo);
        //adds the newdiv element   
    });
}