describe("Person", function() {
  var subject;
  var co;

  beforeEach(function() {
    subject = new Person();
    co = new Checkout();
  });

  afterEach(function() {
    subject.basket = [];
  });

  it("It should have an empty basket", function() {
    expect(subject.basket).toEqual([ ]);
  });
});
