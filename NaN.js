(function(window, undefined) {
	isNaN(true); 		// false;
	isNaN(false); 		// false;
	isNaN([]); 			// false;
	isNaN([1]); 		// false;
	isNaN([1,2]); 		// true;
	isNaN({});			// true;
	isNaN("abc");		// true;
	isNaN("");			// false;
	isNaN(undefined);	// true;
	isNaN({a:1});		// true;
	isNaN(function(){});// true;

	// for es6 use Number.isNaN
	Number.isNaN(true); 		// false;
	Number.isNaN(false); 		// false;
	Number.isNaN([]); 			// false;
	Number.isNaN([1]); 			// false;
	Number.isNaN([1,2]); 		// false;
	Number.isNaN({});			// false;
	Number.isNaN("abc");		// false;
	Number.isNaN("");			// false;
	Number.isNaN(undefined);	// false;
	Number.isNaN({a:1});		// false;
	Number.isNaN(function(){});	// false;

	// my own isNaN
	function myIsNaN(val) {
		return !(val === val);	// NaN is the only value that not equals to itself in javascript
	}
	myIsNaN(true); 			// false;
	myIsNaN(false); 		// false;
	myIsNaN([]); 			// false;
	myIsNaN([1]); 			// false;
	myIsNaN([1,2]); 		// false;
	myIsNaN({});			// false;
	myIsNaN("abc");			// false;
	myIsNaN("");			// false;
	myIsNaN(undefined);		// false;
	myIsNaN({a:1});			// fasle;
	myIsNaN(function(){});	// false;

})()