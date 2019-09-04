import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectedExpenses from '../selectors/expenses';

export const ExpenseList = props => {
	return (
		<div>
			{props.expenses.length === 0 ? (
				<p>No expenses</p>
			) : (
				props.expenses.map(expense => (
					<ExpenseListItem {...expense} key={expense.id} />
				))
			)}
		</div>
	);
};

const mapStateToProps = state => ({
	expenses: selectedExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpenseList);
