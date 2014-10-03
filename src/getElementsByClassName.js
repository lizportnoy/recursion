/*If life was easy, we could just do things the easy way:
	var getElementsByClassName = function (className) {
	return document.getElementsByClassName(className);
 }; */

// But instead we're going to implement it from scratch:
//You should use document.body, element.childNodes, and element.classList

// rethinking get Elements By className

var getElementsByClassName = function(className){

	var elementsArray = []; // for storing elements with the target class name

	var recurseBody = function(node) {

			if (node.classList !== undefined) { // adds any elements with the selected class name to the array
				for (var i = 0; i <node.classList.length; i ++) {
					if (node.classList[i] === className) {
						elementsArray.push(node);
					} 
				}
			}

			if (node.childNodes.length > 0) { // goes through all child nodes and recurses if there are child node
				for (var i = 0; i < node.childNodes.length; i++) {
				recurseBody(node.childNodes)}
			} 

	};

	recurseBody(document.body); // runs function, beginning with document.body and then goes through children
	return elementsArray; // returns array of elements

};



