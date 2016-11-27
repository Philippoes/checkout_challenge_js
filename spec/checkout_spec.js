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

  it("calculate the total sum of the persons basket", function(){
    co = new Checkout();
    person = new Person();
    co.scan(person, co.items[0]);
    co.scan(person, co.items[0]);
    expect(co.total(person)).toEqual(18.5);
  });
});
});
