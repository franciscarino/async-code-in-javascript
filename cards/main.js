"use strict";
const BASE_URL = "http://deckofcardsapi.com/api/deck";
let deck_id;
getNewDeck();

//**  Creates a new deck and sets the deck_id variable */
async function getNewDeck() {

  const response = await axios({
    url: `${BASE_URL}/new/shuffle/`,
    method: "GET",
  });

  deck_id = response.data.deck_id;

}


// /** get a single card, if no args are passed the card sill
//  *  be fro =m a newly shuffled deck */
async function getSingleCard(deckId = "new") {

  const response = await axios({
    url: `${BASE_URL}/${deckId}/draw/?count=1`,
    method: "GET",
  });


  return response;

}

/** appends card to dom */
function paintCard(card) {
  $('div').append(`<img src="${card.data.cards[0].image}" />`);
  if (card.data.remaining === 0)
    alert(' Dats It!!!!!');
}





async function clickHandler(evt) {

  const card = await getSingleCard(deck_id);
  console.log(card.data);
  paintCard(card);

}

$('button').on('click', clickHandler);


