const ExpenseFactory = require('../../src/factories/expense.factory');
const Expense = require('../../src/expenses/expense');
const expenseFactory = new ExpenseFactory();

describe('Expense Factory', () => {
	describe('create', () => {
		it('should return expense instance when expense type is found', () => {
			const expenseInstance = expenseFactory.create(1, 20);
			expect(expenseInstance).toBeDefined();
			expect(expenseInstance instanceof Expense).toBeTruthy();
		});

		it('should throw error when expense type is not found', () => {
			expect(() => {
				expenseFactory.create(10, 20);
			}).toThrow(Error);
		});
	});
});
