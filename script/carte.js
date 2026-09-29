import { getAnimeByName,
         getAnimeById,
         getAnimeByRanking,
         getAnimeByGenre   } 
from './api.js';

import { pickProperties } from './filter.js';

// [
//   "_id",
//   "title",
//   "alternativeTitles",
//   "ranking",
//   "genres",
//   "episodes",
//   "hasEpisode",
//   "hasRanking",
//   "image",
//   "link",
//   "status",
//   "synopsis",
//   "thumb",
//   "type"
// ]

// pas encore fait
const lightPage = 1;
const buttonLightPage = document.getElementById("");



const dropDownMenuFilter = document.getElementById("searchType");

const formField = document.getElementById("searchParam");
//à compléter
const Boutonrequest = document.getElementById("submitBtn");

Boutonrequest.addEventListener( 'click', async (e) =>{
    e.preventDefault();

    if (dropDownMenuFilter.value === 'title'){
        await searchByName();
    } else if ( dropDownMenuFilter.value === 'id'){
        await searchById();
    } else if ( dropDownMenuFilter.value === 'ranking'){
        await searchByRanking();
    } else if ( dropDownMenuFilter.value === 'genre'){
        await searchByGenre();
    }
})

function getCarte( card){
    const divCard = document.createElement("div");


    const imageCard = document.createElement("img");
    imageCard.src = card.image;

    const titreCard = document.createElement("h2");
    titreCard.textContent = card.title;

    const synopsisCard = document.createElement("p");
    synopsisCard.textContent = card.synopsis;

    const statusCard = document.createElement("p");
    statusCard.textContent = card.status;
    

    const rankingCard = document.createElement("p");
    if (card.hasRanking ){
        rankingCard.textContent = card.ranking;
    }else{
        rankingCard.textContent = "N/A";
    }

    const epNumberCard = document.createElement("p");
    if(card.hasEpisode){
        epNumberCard.textContent = card.episodes;
    }else{
        epNumberCard.textContent = "N/A";
    }

    //divCard.classList.add("Card");
    //divCard.dataset.value = card;

    divCard.append(titreCard)
    divCard.append(imageCard);
    divCard.append(synopsisCard);
    divCard.append(statusCard);
    divCard.append(rankingCard);
    divCard.append(epNumberCard); 

    return divCard;
}

const section = document.getElementById("resultsContainer");

async function searchByName(){
    section.innerHTML = "";

    const animeJson = await getAnimeByName(formField.value);

    for(const c of animeJson.data){
        const carte = getCarte(c);
        section.append(carte);
    }
}

function searchById(){
    const animeJson = getAnimeById(formField.value);
}

function searchByRanking(){
    const animeJson = getAnimeByRanking(formField.value);


}

function searchByGenre(){
    const animeJson = getAnimeByGenre();
}



