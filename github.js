//make request to github for this user
fetch('https://api.github.com/users/sschneeberg')
    .then((response) => {
        //wait for something to return from fetch call
        return response.json(); //json object
    }) //promises
    .then(githubData => { //now we have github data in an object
        console.log(githubData)
    })
    .catch(error => {
        console.log(error);
    })