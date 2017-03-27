(function() {
	"use strict"
	if (!Number.prototype[Symbol.iterator]) {
		Object.defineProperty(
			Number.prototype,
			Symbol.iterator, 
			{
				writable: false,
				configurable: false,
				enumerable: false,
				value: function iterator() {
					var i, inc, done = false,
						top = +this;

					inc = 1 * (top < 0 ? -1 : 1);
					return {
						[Symbol.iterator]() {
							return this;
						},
						next() {
							if (!done) {
								if (i == null) i = 0;
								else if (top >= 0) i = Math.min(top, i + inc);
								else i = Math.max(top, i + inc);

								if (top === i) done = true;
								return {
									value: i,
									done: false
								};
							} else return {
								done: true
							};
						}
					}
				}
			})
	};
})()