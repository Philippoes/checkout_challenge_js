function Person() {
  // this.basket = yaml.safeLoad(fs.readFileSync('assets/yml/basket.yml', 'utf8'));
  this.basket = [];
}

Person.prototype.add = function(item) {
  this.basket.push(item);
};
