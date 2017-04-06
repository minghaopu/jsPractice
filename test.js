	// const original = new Array(500000);

	// console.time("slice");
	// {
	// 	for (let i = 0; i < 10; i++) {
	// 		let t = original.slice();
	// 	}
	// }
	// console.timeEnd("slice");


	// console.time("...");
	// {
	// 	for (let i = 0; i < 10; i++) {
	// 		let t = [...original];
	// 	}
	// }
	// console.timeEnd("...");


	// console.time("concat");
	// {
	// 	for (let i = 0; i < 10; i++) {
	// 		let t = original.concat();
	// 	}
	// }
	// console.timeEnd("concat");

	// console.time("from");
	// {
	// 	for (let i = 0; i < 10; i++) {
	// 		let t = Array.from(original);
	// 	}
	// }
	// console.timeEnd("from");
	var data = new FormData();
data.append('user', 'person');
data.append('pwd', 'password');
data.append('organization', 'place');
data.append('requiredkey', 'key');

var xhr = new XMLHttpRequest();
xhr.open('POST', 'somewhere', true);
xhr.onload = function () {
    // do something to response
    console.log(this.responseText);
};
xhr.send(data);