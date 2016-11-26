function Checkout() {
  // this.basket = yaml.safeLoad(fs.readFileSync('assets/yml/basket.yml', 'utf8'));
}

Checkout.prototype.scan = function(person, item) {
  person.basket.push(item);
};
