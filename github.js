const container = document.querySelector('.container');

function createNewElement(tagName, text) {
    // create a new element with tagName
    const newElement = document.createElement(tagName);
    // set the textContent to the new element  
    newElement.textContent = text;
    // return the new element
    return newElement;
}

//make request to github for this user
fetch('https://api.github.com/users/sschneeberg')
    .then((response) => {
        //wait for something to return from fetch call
        return response.json(); //json object
    }) //promises
    .then(githubData => { //now we have github data in an object
        const userObj = {
            //access githubData like an object b/c it is
            bio: githubData.bio,
            username: githubData.login,
            name: githubData.name
        }

        console.log(userObj);

        const newElem = createNewElement('p', userObj.name);
        container.appendChild(newElem);

    })
    .catch(error => {
        console.log(error);
    })