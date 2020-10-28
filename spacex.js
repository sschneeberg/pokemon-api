fetch('https://api.spacexdata.com/v3/capsules')
    .then(response => {
        return response.json();
    })
    .then(spacexData => {
        return spacexData;
    })
    .catch(error => {
        console.log(error);
    })
fetch('https://api.spacexdata.com/v3/dragons')
    .then(response => {
        return response.json();
    })
    .then(spacexData => {
        return spacexData;
    })
    .catch(error => {
        console.log(error);
    })
fetch('https://api.spacexdata.com/v3/ships')
    .then(response => {
        return response.json();
    })
    .then(spacexData => {
        return spacexData;
    })
    .catch(error => {
        console.log(error);
    })
fetch('https://api.spacexdata.com/v3/landpads/LZ-4')
    .then(response => {
        return response.json();
    })
    .then(spacexData => {
        return spacexData;
    })
    .catch(error => {
        console.log(error);
    })