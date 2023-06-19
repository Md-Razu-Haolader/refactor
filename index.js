('use strict');

const ExpenseService = require('./src/services/expense.service');
const ExpenseCalculatorService = require('./src/services/expense-calculator.service');
const ExpenseReportService = require('./src/services/expense-report.service');

const expenses = new ExpenseService().fetch();
const report = new ExpenseReportService(new ExpenseCalculatorService(expenses));
report.generate();
