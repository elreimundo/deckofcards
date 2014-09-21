;(function () {
  // Card class
  function Card (rank, suit) {
    this.model = new Card.Model(rank, suit);
    this.view = new Card.View();
  };

  Card.SUITS = ['spades', 'hearts', 'diamonds', 'clubs'];
  Card.RANKS = ['ace', 'king', 'queen', 'jack', 'ten', 'nine', 'eight', 'seven', 'six', 'five', 'four', 'three', 'two'];

  Card.prototype.renderTo = function (domElement) {
    this.view.renderTo(this.model, domElement);
  }

  // Card.Model
  Card.Model = function (rank, suit) {
    this.rank = rank;
    this.suit = suit;
  };

  // Card.View
  Card.View = function () {};

  Card.View.prototype = {
    generateUrlFrom: function (model) {
      return 'img/' + model.rank + '-of-' + model.suit + '.png';
    },

    renderTo: function (model, domElement) {
      domElement.style.backgroundImage = 'url("' + this.generateUrlFrom(model) + '")';
    }
  };

  // Deck
  function Deck () {
    this.model = new Deck.Model();
  };

  Deck.prototype.drawCard = function () {
    return this.model.drawCard();
  };

  // Deck.Model
  Deck.Model = function () {
    this.cards = this.generateAFullDeck();
    this.shuffle();
  };

  Deck.Model.prototype = {
    drawCard: function () {
      return this.cards.pop();
    },

    generateAFullDeck: function () {
      var allCards = [];
      for (var i = 0; i < Card.SUITS.length; i++)
        for (var j = 0; j < Card.RANKS.length; j++)
          allCards.push( new Card( Card.RANKS[j], Card.SUITS[i] ) );
      return allCards;
    },

    shuffle: function () {
      // sort takes a function that compares two elements; the function should
      // return 1 if the first element should be to the right of the second element
      // return 0 if the two elements are equivalent
      // return -1 if the first element should be to the left of the second element
      // to 'shuffle', we generate a function that randomly returns either 1 or -1
      this.cards.sort(function () { return 2 * Math.round(Math.random()) - 1 });
    }
  };

  // make Deck available to any page that embeds this script
  window.Deck = Deck;
})();