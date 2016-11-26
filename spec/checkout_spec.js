describe("Checkout", function() {
  var co;
  var person;

  beforeEach(function() {
    co = new Checkout();
    person = new Person();
  });

  it("Should have items available", function(){
    expect(co.items).toEqual([ Object({name: "Tie", id: '001', price: 9.25 }) ])
  });

  it("should be able to scan an item", function() {
    co.scan(person, "001");
    expect(person.basket).toEqual(["001"]);
  });
});
