(function(window, undefined) {
	if (!Object.isObject) {
		Object.isObject = function(arg) {
			return arg !== null && Object.getPrototypeOf(arg) === Object.prototype;
		}
	}
	let util = (function() {
		return {
			swap: function ({}) {
				args = [y, x] = [...args];
			}
		}
	})()

	window.util = util;
})(window)