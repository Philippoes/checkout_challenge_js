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

  if (promotional_rules === "Autumn promtoion"){

  }

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

promotional_rules(total, a);

  total = parseFloat(total.toFixed(2));
  return total;
};


function promotional_rules(total, a){
var totalties = [];
a.forEach(function(entry) {
 if(entry.id === "001") {
   totalties.push(entry);
}

});

if (totalties.length >= 2){
  total =  total - (0.75* totalties.length);
}
  console.log("Inside promotional_rules this total" + total);

if (total >= 60){
  total = total * 0.9;
}
}
