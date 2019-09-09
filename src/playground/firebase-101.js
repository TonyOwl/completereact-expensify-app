import * as firebase from 'firebase';

const config = {
	// config code from firebase portal
};

firebase.initializeApp(config);

const database = firebase.database();

// // child_removed event
// database.ref('expenses').on('child_removed', snapshot => {
// 	console.log(snapshot.key, snapshot.val());
// });

// // child_changed event
// database.ref('expenses').on('child_changed', snapshot => {
// 	console.log(snapshot.key, snapshot.val());
// });

// // child_added event
// database.ref('expenses').on('child_added', snapshot => {
// 	console.log(snapshot.key, snapshot.val());
// });

// setTimeout(() => {
// 	database.ref('expenses').push({
// 		description: 'Food',
// 		amount: 1000,
// 		note: '',
// 		createdAt: 9467123498763
// 	});
// }, 5000);

// database.ref('notes').push({
// 	title: 'To Do2',
// 	body: 'Go swingin'
// });

// database.ref('notes/-LoCETGSxdzL22DjFWsO').update({
// 	body: 'buy food'
// });

// database.ref('notes/-LoCETGSxdzL22DjFWsO').remove();

// database.ref('expenses').push({
// 	description: 'Rent',
// 	amount: 109500,
// 	note: '',
// 	createdAt: 9467123498763
// });

// database
// 	.ref('expenses')
// 	.once('value')
// 	.then(snapshot => {
// 		const expenses = [];
//
// 		snapshot.forEach(childSnapshot => {
// 			expenses.push({
// 				id: childSnapshot.key,
// 				...childSnapshot.val()
// 			});
// 		});
//
// 		console.log(expenses);
// 	});

// const onValueChange = database.ref('expenses').on('value', snapshot => {
// 	const expenses = [];
//
// 	snapshot.forEach(childSnapshot => {
// 		expenses.push({
// 			id: childSnapshot.key,
// 			...childSnapshot.val()
// 		});
// 	});
//
// 	console.log(expenses);
// });
