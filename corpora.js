const corpora = require('corpora-project'),  // Find out more about Corpora at https://github.com/dariusk/corpora/
    _ = require('lodash'), // https://lodash.com/docs/4.17.4
    tarotDeck = corpora.getFile('divination', 'tarot_interpretations').tarot_interpretations; // https://github.com/dariusk/corpora/blob/master/data/divination/tarot_interpretations.json

function generateTarotReading() {
  const tarotCard = pickCard(),
        reading = doReading(tarotCard, 0.1);
  
  return `${reading.name},${reading.reversed ? ' reversed,' : ''} representing ${reading.keyword}. ${reading.meaning}.`
}

function pickCard() {
  // selects a random card from the deck, does not remove card from the deck
  return _.sample(tarotDeck);
}

function doReading(card, reversedChance = 0.5) {
  // Tarot cards can be reversed, implying a negative interpretation
  const reversed = Math.random() < reversedChance;
  
  // Munge the data for our reading.
  return {
    name: capitalizeCardName(card.name),
    meaning: findMeaning(card, reversed),
    keyword: _.sample(card.keywords),
    reversed: reversed,
  }
}

function capitalizeCardName(cardName) {
  // Corpora's tarot card names are all lower case, so capitalize all words except for 'of'
  // Eight of Cups, Queen of Swords, The Tower, Temperence
  return cardName.split(' ').map((word) => (word === 'of' ? word : word[0].toUpperCase() + word.slice(1))).join(' ');
}

// Return a dark meaning if the card is reversed, otherwise return a light meaning
function findMeaning(card, reversed) {
  if (reversed) {
    return _.sample(card.meanings.shadow);
  }
  else {
    return _.sample(card.meanings.light);
  }
}

// Make sure this file always exports a 'generateText' function for bot.js
module.exports.generateText = generateTarotReading;
