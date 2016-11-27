function Checkout() {
  var tie = {
      name: "Tie",
      id: "001",
      price: 9.25
  };

  var sweater = {
      name: "Sweater",
      id: "002",
      price: 45.00
  };

  var skirt = {
      name: "Skirt",
      id: "003",
      price: 19.95
  };

  this.items = [tie, sweater, skirt];
}

Checkout.prototype.scan = function(person, item) {
  person.basket.push(item);
};

Checkout.prototype.total = function(person) {
  var total = 0;
  var a = person.basket;
  a.forEach(function(entry) {
      total += (entry.price);
  });
  if (total >= 60){
    total = total * 0.9;
  }
  return total;
};
