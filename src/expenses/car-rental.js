const Expense = require('./../expenses/expense');

class CarRental extends Expense {
	constructor(type, amount) {
		super(type, amount);
		if (!CarRental.instance) {
			CarRental.instance = this;
		}
		CarRental.instance.type = type;
		CarRental.instance.amount = amount;
		return CarRental.instance;
	}
	getExpenseName() {
		return 'Car Rental';
	}

	isOverExpense() {
		return false;
	}
}

module.exports = CarRental;
