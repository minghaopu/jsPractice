(function(window, undefined) {
	if (!Object.isObject) {
		Object.isObject = function(arg) {
			return arg !== null && Object.getPrototypeOf(arg) === Object.prototype;
		}
	}
	let util = (function() {
		return {
			littleEndian: (function() {
				var buffer = new ArrayBuffer(2);
				new DataView(buffer).setInt16(0, 256, true);
				return new Int16Array(buffer)[0] === 256;
			})(),
			reverse: function(arr, i, j) {
				return []
			}
		}
	})()
	
	// array reverse partial
	Array.prototype.reversePartial = function(i = 0, j = this.length) {
		if (i > this.length || j < 0) return this;
		if (i < 0) i = 0;
		if (j > this.length) j = this.length;
		
		while (i < j) {
			[this[i], this[j]] = [this[j], this[i]];
			i++;
			j--;
		}
	}

	// string sort by lexical order
	String.prototype.sort = function(){
		return this.split('').sort().join('');
	};








	window.util = util;
})(window)