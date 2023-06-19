class ExpenseReportService {
	constructor(expenseCalculatorService) {
		this.expenseCalculatorService = expenseCalculatorService;
	}

	generate() {
		const expenseInfo = this.expenseCalculatorService.calculate();
		const currentDate = new Date().toISOString().slice(0, 10);

		console.log(`Today Travel Expenses ${currentDate}`);
		console.log(expenseInfo.expenseDetail);
		console.log('Meal expenses: ' + expenseInfo.totalMealExpense + ' eur');
		console.log('Total expenses: ' + expenseInfo.totalExpense + ' eur');
	}
}

module.exports = ExpenseReportService;
