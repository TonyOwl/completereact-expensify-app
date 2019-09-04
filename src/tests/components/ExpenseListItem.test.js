import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import ExpenseListItem from '../../components/ExpenseListItem';

test('should render ExpenseListItem correctly', () => {
	const wrapped = shallow(
		<ExpenseListItem {...expenses[0]} key={expenses[0].id} />
	);
	expect(wrapped).toMatchSnapshot();
});
