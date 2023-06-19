const Breakfast = require('./../expenses/breakfast');
const Lunch = require('./../expenses/lunch');
const Dinner = require('./../expenses/dinner');
const CarRental = require('./../expenses/car-rental');
const { expense } = require('../config/index');

class ExpenseFactory {
	create(type, amount) {
		switch (type) {
			case expense.BREAKFAST:
				return new Breakfast(type, amount);
			case expense.LUNCH:
				return new Lunch(type, amount);
			case expense.DINNER:
				return new Dinner(type, amount);
			case expense.CAR_RENTAL:
				return new CarRental(type, amount);
			default:
				throw new Error('Invalid expense type');
		}
	}
}

module.exports = ExpenseFactory;
