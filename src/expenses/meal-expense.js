const Expense = require('./expense');

class MealExpense extends Expense {
	isMealExpense() {
		return true;
	}
}

module.exports = MealExpense;
