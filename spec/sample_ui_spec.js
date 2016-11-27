describe('UI', function() {
  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = 'base/spec/fixtures';
    loadFixtures('sample_partial.html');
    $.holdReady(false);
  });

    it("It should display how much the total is", function(){
      expect($('#items').text()).toBe('0');
    });

    it("Tie button is clicked", function() {
      $('#Tie').trigger('click');
      expect($('#items').text()).toBe('1 Tie');
    });
  });
