describe("Checkout", function() {
  var co;
  var person;

  beforeEach(function() {
    co = new Checkout();
    person = new Person();
  });

  it("should be able to scan an item", function() {
    co.scan(person, "001");
    expect(person.basket).toEqual(["001"]);
  });
});
