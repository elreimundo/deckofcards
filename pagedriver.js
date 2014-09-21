;(function () {
  var button = document.getElementsByTagName('button')[0],
      cardSpace = document.getElementsByClassName('card')[0],
      deck = new Deck; // Deck constructor from deckofcards.js

  function DeckController (deck, targetElt) {
    this.deck = deck;
    this.targetElt = targetElt;
  };

  DeckController.prototype = {
    bindEventListener: function (domElt, evtType, cb) {
      // the whole point of using a custom binder in this case is to
      // reference functions on the controller. We use bind to ensure
      // that the 'this' keyword always references the controller object
      domElt.addEventListener(evtType, cb.bind(this));
    },

    deal: function () {
      this.deck.drawCard().renderTo(this.targetElt);
    }
  }

  var controller = new DeckController(deck, cardSpace);
  controller.bindEventListener(button, 'click', controller.deal);
})()