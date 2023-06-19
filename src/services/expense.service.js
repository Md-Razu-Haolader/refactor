const expenses = require('../../expense.json');

class ExpenseService {
	fetch = () => expenses?.data ?? {};
}

module.exports = ExpenseService;
