class Expense {
	constructor(type, amount) {
		this.amount = amount;
		this.type = type;
	}

	isMealExpense() {
		return false;
	}

	getExpenseName() {
		throw new Error("Method 'getExpenseName' must be implemented.");
	}

	isOverExpense() {
		return false;
	}
}

module.exports = Expense;
