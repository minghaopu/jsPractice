(function() {
	var Fib = {
		[Symbol.iterator]() {
			var n1 = 1, n2 = 1;
			return {
				[Symbol.iterator]() {return this;},
				next() {
					var current = n2;
					n2 = n1;
					n1 = n1 + current;
					return {value: current, done: false};
				},
				return(v) {
					return {value: v, done: true};
				}
			}
		}
	}
})()