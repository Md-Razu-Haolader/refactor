const MealExpense = require('./../expenses/meal-expense');
const { expenseLimit } = require('../config/index');

class Dinner extends MealExpense {
	constructor(type, amount) {
		super(type, amount);
		if (!Dinner.instance) {
			Dinner.instance = this;
		}
		Dinner.instance.type = type;
		Dinner.instance.amount = amount;
		return Dinner.instance;
	}
	getExpenseName() {
		return 'Dinner';
	}

	isOverExpense() {
		return this.amount > expenseLimit.DINNER;
	}
}

module.exports = Dinner;
