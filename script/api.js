const apiKey = "";

const apiUrl = "https://anime-db.p.rapidapi.com";

const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": "anime-db.p.rapidapi.com"
    }
};

async function responseStatus(response) {
    if (response.ok) {
        return await response.json();
    }

    return null;
}

export async function getAnimeByName(name) {

    const response = await fetch(
        // encodeURIComponent() prevent spaces or weird character in the URL
        apiUrl + "/anime?page=1&size=10&search=" + encodeURIComponent(name), options
    );

    return responseStatus(response);
}

export async function getAnimeById(id) {

    const response = await fetch(
        apiUrl + "/anime/by-id/" + id, options
    );

    return responseStatus(response);
}

export async function getAnimeByRanking(ranking) {

    const response = await fetch(
        apiUrl + "/anime/by-ranking/" + ranking, options
    );

    return responseStatus(response);
}

export async function getAnimeByGenre(genre) {

    const response = await fetch(
        apiUrl + "/anime?page=1&size=10&genres=" + encodeURIComponent(genre), options
    );

    return responseStatus(response);
}

export async function getGenres() {

    const response = await fetch(
        apiUrl + "/genre", options
    );

    return responseStatus(response);
}