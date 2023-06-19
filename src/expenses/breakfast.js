const MealExpense = require('./../expenses/meal-expense');
const { expenseLimit } = require('../config/index');

class Breakfast extends MealExpense {
	constructor(type, amount) {
		super(type, amount);
		if (!Breakfast.instance) {
			Breakfast.instance = this;
		}
		Breakfast.instance.type = type;
		Breakfast.instance.amount = amount;
		return Breakfast.instance;
	}

	getExpenseName() {
		return 'Breakfast';
	}

	isOverExpense() {
		return this.amount > expenseLimit.BREAKFAST;
	}
}

module.exports = Breakfast;
