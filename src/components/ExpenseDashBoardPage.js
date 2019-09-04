import React from 'react';
import a from './ExpenseList';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashBoardPage = () => (
	<div>
		<ExpenseListFilters />
		<ExpenseList />
	</div>
);

export default ExpenseDashBoardPage;
