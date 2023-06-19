const ExpenseService = require('../../src/services/expense.service');
const expenseService = new ExpenseService();

describe('Expense Service', () => {
	describe('fetch', () => {
		it('should return valid json data', () => {
			const expenses = expenseService.fetch();
			expect(expenses).toBeDefined();
			expect(expenses[0]).toEqual(
				expect.objectContaining({
					type: expect.any(Number),
					amount: expect.any(Number),
				})
			);
		});
	});
});
