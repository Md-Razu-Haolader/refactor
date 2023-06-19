const ExpenseFactory = require('../factories/expense.factory');
const MealExpense = require('../expenses/meal-expense');

class ExpenseCalculatorService {
	constructor(expenses) {
		this.expenses = expenses;
		this.expenseFactory = new ExpenseFactory();
	}

	calculate() {
		let totalExpense = 0;
		let totalMealExpense = 0;
		let expenseDetail = '';

		for (const expense of this.expenses) {
			totalExpense += expense.amount;
			const expenseInstance = this.expenseFactory.create(
				expense.type,
				expense.amount
			);
			if (expenseInstance instanceof MealExpense) {
				totalMealExpense += expense.amount;
			}

			expenseDetail += this.processExpenseDetail(expenseInstance);
		}

		return {
			expenseDetail,
			totalMealExpense: totalMealExpense.toFixed(2),
			totalExpense: totalExpense.toFixed(2),
		};
	}

	processExpenseDetail(expenseInstance) {
		const mealOverExpensesMarker = expenseInstance.isOverExpense()
			? '[over-expense!]'
			: '';

		const expenseName = expenseInstance.getExpenseName();
		return `${expenseName} \t ${expenseInstance.amount} eur \t ${mealOverExpensesMarker} \n`;
	}
}

module.exports = ExpenseCalculatorService;
