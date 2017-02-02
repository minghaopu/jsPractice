(function() {
	var a = new Array(3);
	a; 	// chrome [undefined * 3];
		// safari [] (3);
		// firefox [undefined, undefined, undefinded]


	var b = [undefined, undefined, undefined];
	b;	// chrome [undefined, undefined, undefined];
		// safari [undefined, undefined, undefined];
		// firefox [undefined, undefined, undefined];

	var c = [];
	c.length = 3;
	c; 	// chrome [undefined * 3];
		// safari [] (3);
		// firefox [undefined, undefined, undefinded]


	
	a.map(function(v,i){		// [undefined * 3];
	    return i;
	});				
	b.map(function(v,i){		// [1,2,3]
	    return i;
	});
	c.map(function(v,i){		// [undefined * 3];
	    return i;
	});



	// create actual array of actual undefined val; use Array.apply
	var a = Array.apply(null, {length: 3}); //[undefined, undefined, undefined]
	var b = Array.call(null, {length: 3}); //[object] object has a property called length, and its value is 3;
	b; /*
		Array[1]
			0: Object
				length:3
		*/
	
})()