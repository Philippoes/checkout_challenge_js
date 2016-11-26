function Checkout() {
  var tie = {
      name: "Tie",
      id: "001",
      price: 9.25
  };
  this.items = [tie];
}

Checkout.prototype.scan = function(person, item) {
  person.basket.push(item);
};
