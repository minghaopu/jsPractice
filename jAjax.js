;(function(window, undefined) {
	class XHR {
		static send(url, method, headers, data, timeout) {
			return new Promise((resolve, reject) => {
				var xhr = new XMLHttpRequest();

				xhr.timeout = timeout || 3000;

				xhr.open(method, url);
				if (Object.getPrototypeOf(headers) === Object.prototype) {
					for (var key in headers) {
						if (headers.hasOwnProperty(key)) {
							xhr.setRequestHeader(key, headers[key]);
						}
					}
				}

				xhr.onload = function() {
					if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) resolve(xhr.response);
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
	window.Ajax = class Ajax{
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
		static get(url, headers, data, timeout) {
			return XHR.send(url + "?" + Ajax.param(data), 'GET', headers, null, timeout);
		}

		static post(url, headers, data, timeout) {
			return XHR.send(url, 'POST', headers, JSON.stringify(data), timeout);
		}
		static delete(url, headers, data, timeout) {
			return XHR.send(url, 'DELETE', headers, JSON.stringify(data), timeout);
		}
	}
})(window)