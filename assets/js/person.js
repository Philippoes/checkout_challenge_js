function Person() {
  this.basket = yaml.safeLoad(fs.readFileSync('assets/yml/basket.yml', 'utf8'));
}
