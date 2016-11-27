Userstories:
The store should have a range of products. the objects should have numbers on them eg; 001 = tie ,price: $9.25 , 002 = sweater, price $45, 003 and so on.

a person should be able to add items it to their basket.

the store should be able to calculate the sum of the items purchased.

Our marketing team want to offer promotions as an incentive for our customers to purchase these items.

If you spend over $60, then you get 10% off of your purchase.
If you buy 2 or more ties then the price drops to $8.50.

Our check-out can scan items in any order, and because our promotions will change, it needs to be flexible regarding our promotional rules.

The interface to our checkout looks like this:

co = Checkout.new(promotional_rules)
co.scan(item)
co.scan(item)
price = co.total
//
## JS Test Boilerplate 0.1 (WIP)
[![Build Status](https://travis-ci.org/CraftAcademy/karma-jquery-jasmine_boilerplate.svg?branch=master)](https://travis-ci.org/CraftAcademy/karma-jquery-jasmine_boilerplate)
[![Coverage Status](https://coveralls.io/repos/github/CraftAcademy/karma-jquery-jasmine_boilerplate/badge.svg?branch=master)](https://coveralls.io/github/CraftAcademy/karma-jquery-jasmine_boilerplate?branch=master)

####Dependencies
* [Jasmine](https://github.com/jasmine/jasmine)
* [Karma](https://github.com/karma-runner/karma)
  - [Karma Jasmine](https://github.com/karma-runner/karma-jasmine)
  - [Karma Jasmine JQuery](https://github.com/bessdsv/karma-jasmine-jquery)
  - [Karma Chrome Launcher](https://github.com/karma-runner/karma-chrome-launcher)
  - [Karma Coverage](https://github.com/karma-runner/karma-coverage)
  - [Karma Coveralls](https://github.com/caitp/karma-coveralls)
  - [Karma Spec Reporter](https://github.com/mlex/karma-spec-reporter)

####Services
* [Travis](https://travis-ci.org/) for Continuous Integration
* [Coveralls](https://coveralls.io/) for Test Coverage

####Set up
Fork or download this repo (using `git clone`) and modify the files to suite your testing needs.

You can also use SVN to download this repo to your new project folder. On OSX you can install SVN using Homebrew.
```
$ brew install subversion
```

Create a new folder and `cd` into it. Run the `svn export` command to download files.

```
$ svn export https://github.com/CraftAcademy/karma-jquery-jasmine_boilerplate/trunk . --force
```
Once downloaded, you need to install all dependencies. Run
```
$ npm install
```

####Usage
You can use this setup to test your units and your jQuery events. Place your JavaScript code in `assets/js/` folder and partials in `spec/fixtures/` folder.

Your specs need to be end with `_spec.js` (e.g. `fizz_buzz_spec.js`)

Run tests with
```
$ npm test

# or

$ karma start karma.conf.js
```

####Adding tests
I have included some basic specs and `js` code for you to examine. Basically you need to build up your test environment and tear it down afterwards.
You can have different setups by nesting your `describe` blocks/functions.

```javascript
# spec/my_spec.js
describe("Given my code", function () {

	beforeEach(function () {
		/* ... Set up your test ... */
	});

	afterEach(function () {
		/* ... Tear it down ... */
	});

	describe("When ...", function () {

		beforeEach(function () {
		  /* ... Context specific setup ... */
		});

		it("Then...", function () {
			expect(true).toEqual(true);
		});
	});
});
```
