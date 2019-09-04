// OBJECT DESTRUCTURING

// const person = {
// 	name: 'Tony',
// 	age: 38,
// 	location: {
// 		city: 'Ottawa',
// 		temp: 92
// 	}
// };
//
// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}`);
//
// const { city, temp: temperature } = person.location;
// if (city && temperature) {
// 	console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
// 	title: 'Ego is the Enemy',
// 	author: 'Ryan Holiday',
// 	publisher: {
// 		name: 'Penguin'
// 	}
// };
//
// // const { publisher: { name: publisherName = 'Self-Published' } } = book;
// const { name: publisherName = 'Self-Published' } = book.publisher;
//
// console.log(publisherName);

// ARRAY DESTRUCTURING

// const address = [
// 	'1299 S Juniper Street',
// 	'Philadelphia',
// 	'Pennsylvania',
// 	'19147'
// ];
// console.log(`You are in ${address[1]} ${address[2]}.`);
// // You are in Philadelphia Pennsylvania.
//
// // const [street,city, state,zip] = address
// const [, city, state = 'New York'] = address;
//
// console.log(`You are in ${city} ${state}.`);
// // You are in Philadelphia Pennsylvania.

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);
