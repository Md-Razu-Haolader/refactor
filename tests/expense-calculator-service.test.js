const ExpenseService = require('../src/services/expense.service');
const ExpenseCalculatorService = require('../src/services/expense-calculator.service');

const expenses = new ExpenseService().fetch();
const expenseCalculatorService = new ExpenseCalculatorService(expenses);

describe('Expense Calculator Service', () => {
	describe('calculate', () => {
		it('Should return meal expense calculation detail', () => {
			const expenseCalculation = expenseCalculatorService.calculate();
			expect(expenseCalculation).toBeDefined();
			expect(expenseCalculation).toEqual(
				expect.objectContaining({
					expenseDetail: expect.any(String),
					totalMealExpense: expect.any(String),
					totalExpense: expect.any(String),
				})
			);
		});
	});
});
