;(function () {
  var button = document.getElementsByTagName('button')[0],
      cardSpace = document.getElementsByClassName('card')[0];

  function Card (rank, suit) {
    this.model = new Card.Model(rank, suit);
    this.view = new Card.View();
  };

  Card.prototype.renderTo = function (domElement) {
    this.view.renderTo(this.model, domElement);
  }

  Card.Model = function (rank, suit) {
    this.rank = rank;
    this.suit = suit;
  };

  Card.View = function () {};

  Card.View.prototype.generateUrlFrom = function (model) {
    return 'img/' + model.rank + '-of-' + model.suit + '.png';
  }

  Card.View.prototype.renderTo = function (model, domElement) {
    domElement.style.backgroundImage = 'url("' + this.generateUrlFrom(model) + '")';
  }

  Card.SUITS = ['spades', 'hearts', 'diamonds', 'clubs'];
  Card.RANKS = ['ace', 'king', 'queen', 'jack', 'ten', 'nine', 'eight', 'seven', 'six', 'five', 'four', 'three', 'two'];

  function Deck () {
    this.model = new Deck.Model();
  }

  Deck.Model = function () {
    this.cards = this.generateAFullDeck();
    this.shuffle();
  };

  Deck.Model.prototype.generateAFullDeck = function () {
    var allCards = [];
    for (var i = 0; i < Card.SUITS.length; i++)
      for (var j = 0; j < Card.RANKS.length; j++)
        allCards.push( new Card( Card.RANKS[j], Card.SUITS[i] ) );
    return allCards;
  };

  Deck.Model.prototype.shuffle = function () {
    this.cards.sort(function () { return 2 * Math.round(Math.random()) - 1 });
  };

  Deck.prototype.drawCard = function () {
    return this.model.drawCard();
  };

  Deck.Model.prototype.drawCard = function () {
    return this.cards.pop();
  }

  var deck = new Deck();

  button.addEventListener('click', function () {
    deck.drawCard().renderTo(cardSpace);
  });
})();