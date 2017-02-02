(function() {
	typeof Function.prototype;			// "function"
	Function.prototype();				// empty function;

	RegExp.prototype.toString();		// "/(?:)/"
	"abc".match(RegExp.prototype);		// Uncaught TypeError: Method RegExp.prototype.exec called on incompatible receiver [object Object]

	String.prototype.toString();		// "";

	Number.prototype.toString();		// "0";
	Number.prototype.valueOf();			// 0;

	Boolean.prototype.valueOf();		// false;

	Array.isArray(Array.prototype);		// true;
})()