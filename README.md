# Deck Of Cards

This library was constructed over the course of two hours during a live introduction to JavaScript at Dev Bootcamp. It was refactored that evening to provide a single file (deckofcards.js) that other developers could easily integrate (along with, optionally, the img folder for the purposes of card rendering) into other code bases.

To watch the deck in action, open deckofcards.html in your browser and click the button.

If you want to use the deck in your own code, embed the deckofcards.js script in the head of your web page:

    <script src='path/to/deckofcards.js'></script>

A global `Deck` variable will be exported. Generate a new deck of cards with

    var deck = new Deck

The Deck API exposes three public methods beyond instantiation.

* `deck.generateAFullDeck` returns a sorted array of `Card` objects representing a full deck of cards

* `deck.shuffle` shuffles any remaining cards in the deck

* `deck.drawCard` returns the 'top' `Card` object from the deck; the card is removed from the deck and will not be dealt again.

Card objects contain state (rank and suit) in the `model` attribute, i.e.

    var topCard = deck.drawCard();
    topCard.model // Card.Model object
    topCard.model.suit // a string representing the suit
    topCard.model.rank // a string representing the rank

Card objects also expose a single view-based method, `renderTo`, which will set the background image of a DOM element to the corresponding card image.

    topCard.renderTo(document.getElementById('card'));

To make sure the card renders nicely, make sure the DOM element has a width that is 75% of its height and that the background size and position are set properly, e.g.:

    .your-card-element {
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
    }
