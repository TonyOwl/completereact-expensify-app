const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('My first promise resolved!');
		// reject('Something went wrong');
	}, 3000);
});

console.log('before');

promise
	.then(data => {
		console.log(data);
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve('My second promise resolved too!');
				// reject('Something went wrong');
			}, 3000);
		});
	})
	.then(data => {
		console.log('does this run?');
		console.log(data);
	})
	.catch(err => {
		console.log('error: ', err);
	});

console.log('after');
