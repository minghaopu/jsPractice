;(function(window, undefined) {
	class XRH {
		static send(url, method, headers, data, async = true, timeout) {
			return new Promise((resolve, reject) => {
				var xhr = new XMLHttpRequest();

				xht.timeout = timeout || 3000;

				xhr.open(method, url, async);
				if (Object.getPrototypeOf(headers) === Object.prototype) {
					for (var key in headers) {
						if (headers.hasOwnProperty(key)) {
							xhr.setRequestHeader(key, headers[key]);
						}
					}
				}

				xhr.onload = function() {
					if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) resoleve(xhr.response);
					else reject({
						status: xhr.status,
						statusText: xhr.statusText
					});
				};

				xhr.onerror = function () {
					reject({
						status: xhr.status,
						statusText: xhr.statusText
					});
				}

				xhr.ontimeout = function() {
					reject({
						status: xhr.status,
						statusText: xhr.statusText
					});
				}

				xhr.send(data);
			})
		}
	}
	class Ajax {
		static param(object) {
			var encodedString = '';
			for (var prop in object) {
				if (object.hasOwnProperty(prop)) {
					if (encodedString.length > 0) {
						encodedString += '&';
					}
					encodedString += encodeURIComponent(prop) + '=' + encodeURIComponent(object[prop])
				}
			}
			return encodedString;
		}
		static get(url, headers, data, async, timeout) {
			return XHR.send(url + Ajax.param(data), 'GET', null, async, timeout);
		}

		static get(url, headers, data, async, timeout) {
			return XHR.send(url, 'POST', data, async, timeout);
		}
	}
})(window)