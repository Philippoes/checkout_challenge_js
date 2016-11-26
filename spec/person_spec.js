describe("Person", function() {
  var subject;

  beforeEach(function() {
    subject = new Person();
  });

  it("It should have an empty basket", function() {
    expect(subject.basket).toEqual(NaN);
  });
});
