function Person() {
  this.basket = [];
}

Person.prototype.add = function(item) {
  this.basket.push(item);
};
