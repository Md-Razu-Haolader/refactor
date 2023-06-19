('use strict');

// Expense types
const types = {
	BREAKFAST: 1,
	LUNCH: 2,
	DINNER: 3,
	CAR_RENTAL: 4,
};

class Expense {
	constructor(type, amount) {
		this.type = type;
		this.amount = amount;
	}

	getExpenseName() {
		throw new Error("Method 'getExpenseName' must be implemented.");
	}

	isOverExpenseLimit() {
		throw new Error("Method 'isOverExpenseLimit' must be implemented.");
	}
}

const Singleton = (targetClass) => {
	let instance = null;

	return class extends targetClass {
		constructor(...args) {
			super(...args);

			if (!instance) {
				console.log('new instance');
				instance = this;
			}
			instance.amount = args[1];
			return instance;
		}
	};
};

class BreakfastExpense extends Singleton(Expense) {
	getExpenseName() {
		return 'Breakfast';
	}

	isOverExpenseLimit() {
		return this.amount > 20;
	}
}

class LunchExpense extends Singleton(Expense) {
	getExpenseName() {
		return 'Lunch';
	}

	isOverExpenseLimit() {
		return this.amount > 50;
	}
}

// class DinnerExpense extends Singleton(Expense) {
class DinnerExpense {
	static instance = null;
	// constructor(type, amount) {
	// 	// super(type, amount);
	// 	this.type = type;
	// 	this.amount = amount;
	// }

	static getInstance(type, amount) {
		if (this.instance === null) {
			console.log(type, amount);
			this.instance = new DinnerExpense(type, amount);
			this.instance.type = type;
			this.instance.amount = amount;
			// this.instance = this;
		}
		return this.instance;
	}

	getExpenseName() {
		return 'Dinner';
	}

	isOverExpenseLimit() {
		return this.instance.amount > 100;
	}
}

class CarRentalExpense extends Singleton(Expense) {
	getExpenseName() {
		return 'Car Rental';
	}

	isOverExpenseLimit() {
		return false;
	}
}

// Expense factory
class ExpenseFactory {
	init(type, amount) {
		switch (type) {
			case types.BREAKFAST:
				return new BreakfastExpense(type, amount);
			case types.LUNCH:
				return new LunchExpense(type, amount);
			case types.DINNER:
				// return new DinnerExpense(type, amount);
				return DinnerExpense.getInstance(type, amount);
			case types.CAR_RENTAL:
				return new CarRentalExpense(type, amount);
			default:
				throw new Error(`Invalid expense type: ${type}`);
		}
	}
}

// Expense report class
class ExpenseReport {
	constructor(expenses, expenseFactory) {
		this.expenses = expenses;
		this.expenseFactory = expenseFactory;
	}

	generateReport() {
		this.printHeader();
		this.printExpenses();
		// this.printSummary();
	}

	printHeader() {
		console.info(
			"Today's Travel Expenses " + new Date().toISOString().slice(0, 10)
		);
	}

	printExpenses() {
		for (const expense of this.expenses) {
			const expenseInstance = this.expenseFactory.init(
				expense.type,
				expense.amount
			);
			const expenseName = expenseInstance.getExpenseName();
			const overExpenseMarker = expenseInstance.isOverExpenseLimit()
				? '[over-expense!]'
				: '';

			console.info(
				`${expenseName}\t${expense.amount} eur\t${overExpenseMarker}`
			);
		}
	}

	printSummary() {
		let mealExpenses = 0;
		let totalExpenses = 0;

		for (const expense of this.expenses) {
			const expenseInstance = this.expenseFactory.init(
				expense.type,
				expense.amount
			);
			totalExpenses += expense.amount;

			if (
				expenseInstance instanceof BreakfastExpense ||
				expenseInstance instanceof DinnerExpense
			) {
				mealExpenses += expense.amount;
			}
		}
		console.info('Meal expenses: ' + mealExpenses + 'eur');
		console.info('Total expenses: ' + totalExpenses + 'eur');
	}
}

const expenses = [
	// { type: types.BREAKFAST, amount: 15.2 },
	// { type: types.BREAKFAST, amount: 28.1 },
	// { type: types.DINNER, amount: 140.0 },
	// { type: types.LUNCH, amount: 10.2 },
	{ type: types.DINNER, amount: 150.0 },
	{ type: types.DINNER, amount: 16.0 },
	{ type: types.DINNER, amount: 120.2 },
];

const expenseReport = new ExpenseReport(expenses, new ExpenseFactory());
expenseReport.generateReport();
