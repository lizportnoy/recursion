// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:


var stringifyJSON = function(obj) {
// checks if number or boolean, and if so returns string version
	if (typeof obj === "number" || typeof obj === "boolean" ) {
		return obj.toString();
	}
// checks if object is null, and returns string "null"
	else if (obj === null) {
		return "null";
	}
// checks if object is string, and adds extra set of quotation marks
	else if (typeof obj === "string") {
		return '\"' + obj + '\"';
	}
//checks if object is function or undefined = if so returns null
	else if (typeof obj === "function" || obj === undefined) {
		return null;
	}
// checks if object is array
	else if (Array.isArray(obj)) {
		var arrayWrap = '['; // begins string version of array
		if (obj.length > 0) { // checks that array is not empty
			for (var i = 0; i < obj.length; i ++) {
				arrayWrap += stringifyJSON(obj[i]) + ','; // stringifies each array element so they can be combined
				} 
			arrayWrap = arrayWrap.slice(0,arrayWrap.length - 1); // cuts off last comma in array
		}
		return arrayWrap + ']' // closes array
	}
// checks if object is object
	else if (obj.toString().slice(1,7)=== 'object') {
		var objWrap = '{'; // begins object version of array
		if (Object.keys(obj).length > 0) { // checks that object is not empty
			for (var k in obj) {
				if (typeof obj[k] === "function" || obj[k] === undefined) {
					delete obj[k]; // checks for keys containing values that are undefined or functions and removes the key-value pair
				}
				else {
				objWrap += stringifyJSON(k) + ":" + stringifyJSON(obj[k]) + ','; // stringifies each key-value pair so they can be combined
				}
			} 
			if (objWrap.length > 1) { // checks that object is not empty following deletion of functions/undefined
			objWrap = objWrap.slice(0,objWrap.length - 1); // cuts off final comma
			} 
		}
		return objWrap + '}';
	}

};
