function createNewElement(tagName, text) {
    // create a new element with tagName
    const newElement = document.createElement(tagName);
    // set the textContent to the new element  
    newElement.textContent = text;
    // return the new element
    return newElement;
}

/* BOOTSTRAP CARD:
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        */

function createPokemonCard(obj) {

    //make card div
    const card = createNewElement('div');
    card.classList.add('card');
    card.style.width = '18rem';
    card.style.background = obj.color;
    document.body.appendChild(card);
    //add img
    const cardImg = createNewElement('img');
    cardImg.setAttribute('src', obj.image);
    cardImg.classList.add('card-img-top');
    cardImg.style.background = 'white';
    cardImg.style.width = '90%'
    cardImg.style.margin = '0.5rem auto'
    cardImg.style.border = `5px solid ${obj.accent_color}`;
    card.appendChild(cardImg);
    //make card body div
    const cardBody = createNewElement('div');
    let cardBodyContents = [];
    cardBody.classList.add('card-body');
    card.appendChild(cardBody);
    //make title
    const cardTitle = createNewElement('h5', obj.name.toUpperCase());
    cardTitle.classList.add('cardTitle');
    cardTitle.style.background = obj.accent_color;
    const hp = createNewElement('span', obj.health);
    hp.style.float = 'right';
    cardTitle.appendChild(hp);
    cardBodyContents.push(cardTitle);
    //add text
    const cardText = createNewElement('div');
    cardText.classList.add('card-text');
    cardBodyContents.push(cardText);
    const moveOne = createNewElement('h6', obj.move1);
    const moveTwo = createNewElement('h6', obj.move2);
    const heightWeightNum = createNewElement('p', `Ht: ${obj.height}", Wt: ${obj.weight} lbs., No. ${obj.number}`);
    cardText.appendChild(moveOne);
    cardText.appendChild(moveTwo);
    cardText.appendChild(heightWeightNum);
    //append card contents to body
    for (elem of cardBodyContents) {
        cardBody.appendChild(elem);
    }
}

fetch('https://pokeapi.co/api/v2/pokemon/chikorita')
    .then(response => {
        if (response.ok) { //make sure the thing is ok, log the response to see what it is returning before writing this
            return response.json();
        }
    })
    .then(chikoritaData => {
        const chikoritaObj = {
            name: chikoritaData.forms[0].name,
            image: chikoritaData.sprites.other.dream_world.front_default,
            number: chikoritaData.game_indices[0].game_index,
            height: chikoritaData.height,
            weight: chikoritaData.weight,
            health: chikoritaData.stats[0].base_stat,
            move1: chikoritaData.moves[7].move.name,
            move2: chikoritaData.moves[10].move.name,
            type: chikoritaData.types[0].type.name,
            color: 'yellowgreen',
            accent_color: 'gold'
        }

        createPokemonCard(chikoritaObj);


    })
    .catch(error => {
        console.log(error);
    })