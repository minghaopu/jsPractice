(function(){
	var a = [1,2,3];
	var b = a;
	b.push(4);
	a === b; //[1,2,3,4]

	b = [4,5,6];
	a;	//[1,2,3]
	b;	//[4,5,6]


	// another example;
	function foo(x) {
		x.push(4);
		console.log(x);

		x = [4,5,6];
		x.push(7);
		console.log(x);
	}

	var c = [1,2,3];
	foo(c);
	c; // [1,2,3,4];

	function foo2(x) {
		x.push(4);
		console.log(x);

		x.length = 0;
		x.push(4,5,6,7);
		console.log(x);
	}

	var d = [1,2,3];
	foo2(d);
	d;	// [4,5,6,7];

})();