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
const buttonLightPage = Document.getElementById("");

const dropDownMenuFilter = Document.getElementById("searchType");

const formField = Document.getElementById("formulaire");
//à compléter
const Boutonrequest = Document.getElementById("submitBtn");

Boutonrequest.addListener( 'click', () =>{
    if (dropDownMenuFilter === 'Name'){
        searchByName();
    } else if ( dropDownMenuFilter === 'Id'){
        searchById();
    } else if ( dropDownMenuFilter === 'Ranking'){
        searchByRanking
    } else if ( dropDownMenuFilter === 'Genre'){
        searchByGenre();
    }
})


function searchByName(){
    const animeJson = getAnimeByName(formField);


}

function searchById(){
    const animeJson = getAnimeById(formField);
}

function searchByRanking(){
    const animeJson = getAnimeByRanking(formField);


}

function searchByGenre(){
    const animeJson = getAnimeByGenre();
}



