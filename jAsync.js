(function(window, undefind) {
	var async = function async(generotor) {
		return function (...args) {
			const it = generotor(...args);
			return new Promise((resolve, reject) => {
				
			})
		}
	}
})()