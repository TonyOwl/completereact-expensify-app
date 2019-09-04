import { createStore } from 'redux';

// ACTION GENERATORS:
const incrementCount = ({ incrementBy = 1 } = {}) => ({
	type: 'INCREMENT',
	incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
	type: 'DECREMENT',
	decrementBy
});

const setCount = ({ count = 0 } = {}) => ({
	type: 'SET',
	count
});

const resetCount = () => ({ type: 'RESET' });

// REDUCERS:
const countReducer = (state = { count: 0 }, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return {
				count: state.count + action.incrementBy
			};

		case 'DECREMENT':
			return {
				count: state.count - action.decrementBy
			};

		case 'RESET':
			return {
				count: 0
			};

		case 'SET':
			return {
				count: action.count
			};

		default:
			return state;
	}
};

// REDUX STORE:
const store = createStore(countReducer);

// STORE SUBSCRIBE:
const unsubcribe = store.subscribe(() => {
	console.log(store.getState());
});

// FIRING ACTIONS:
// Increment count
store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());
// Reset count
store.dispatch(resetCount());
// Decrement count
store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }));
store.dispatch(decrementCount());
// Setting count value
store.dispatch(setCount({ count: 10000 }));

// STORE UNSUBSCRIBE:
unsubcribe();

/*
REDUX BASIC STRUCTURE:

1. Create Store:
    const reduxStore = createStore(reducerFunction);

2. Get/Set State from Store:
    redusStore.setState() --> updates the state;
    reduxStore.getState() --> return the current state;

3. Keep track of Store:
    const unsubscribe = reduxStore.subscribe(function)
PS.: The .subscribe() method returns a function to undo the subscribe.

4. Reducer Function structure:
    const reducerFunction = (initialState, action) => {
      // initialState = object;
      // action = object (MUST have at least 1 property: 'type')
      // action.type = can be a primitive value, such as string, number, booleam or symbol

      let stateUpdate; 

      // Do the required changes in 'initialState' based on the action.type
      // and store it in stateUpdate.

      return stateUpdate;
    }

PS.: Inside reducer function is commom to use the 'switch' statement, but
		 it also can be done with chained 'if-elseif-else' statements.

PS.: Reducers are pure functions:
			1 - Output determined only by the arguments it receives;

			2 - It doesn't modify anything outside its scope.

*/
