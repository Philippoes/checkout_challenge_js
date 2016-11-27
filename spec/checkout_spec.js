describe("Checkout", function() {
  var co;
  var person;

  beforeEach(function() {
    co = new Checkout();
    person = new Person();
  });

  it("Should have items available", function(){
    expect(co.items).toEqual([ Object({ name: 'Tie', id: '001', price: 9.25 }), Object({ name: 'Sweater', id: '002', price: 45 }), Object({ name: 'Skirt', id: '003', price: 19.95 }) ]);
  });

  it("should be able to scan an item", function() {
    co.scan(person, co.items[0]);
    expect(person.basket).toEqual([ Object({ name: 'Tie', id: '001', price: 9.25 }) ]);
  });

describe("Should be able to", function(){

  beforeEach(function() {
    co = new Checkout();
    person = new Person();
  });

  it("calculate the total sum of the persons basket", function(){
    co.scan(person, co.items[0]);
    co.scan(person, co.items[1]);
    expect(co.total(person)).toEqual(54.25);
  });

  it("drop the price 10% if the sum of the basket is above $60", function(){
    co.scan(person, co.items[1]);
    co.scan(person, co.items[1]);
    expect(co.total(person)).toEqual(81);
  });

  it("reduces the price 8.50 if there is more than 2 ties in the basket", function(){
    co.scan(person, co.items[0]);
    co.scan(person, co.items[0]);
    co.scan(person, co.items[1]);
    expect(co.total(person)).toEqual(55.8);
  });
});
});
