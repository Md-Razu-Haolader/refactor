const MealExpense = require('./../expenses/meal-expense');
const { expenseLimit } = require('../config/index');

class Lunch extends MealExpense {
	constructor(type, amount) {
		super(type, amount);
		if (!Lunch.instance) {
			Lunch.instance = this;
		}
		Lunch.instance.type = type;
		Lunch.instance.amount = amount;
		return Lunch.instance;
	}
	getExpenseName() {
		return 'Lunch';
	}

	isOverExpense() {
		return this.amount > expenseLimit.LUNCH;
	}
}

module.exports = Lunch;
