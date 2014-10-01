/*If life was easy, we could just do things the easy way:
	var getElementsByClassName = function (className) {
	return document.getElementsByClassName(className);
 }; */

// But instead we're going to implement it from scratch:
//You should use document.body, element.childNodes, and element.classList

var getElementsByClassName = function(className){
	var elementArray = []; // to store resulting elements from code
	var currentNode = document.body; // beginning search
	$('body').after('<p class="stopsearch"></p>');
	

	var getElements = function (currentNode) {
	// base case = after no more child nodes or subnodes of document.body are left to explore, return elementArray
		if (currentNode === document.body.nextSibling) {
			return elementArray;
		}
		// runs through node
		else { 
			// Checks if node has className and stores element in array if it does
			if (currentNode.classList !== undefined) {
				for (var i = 0; i <currentNode.classList.length; i ++) {
					if (currentNode.classList[i] === className) {
					elementArray.push(currentNode);
					} 
				}
			}
		
			// checks if node has child and if so puts it through recursion
			if (currentNode.childNodes[0] !== undefined) {
				currentNode = currentNode.childNodes[0];
				return getElements(currentNode);
			}

			// if node doesn't have child, checks for next sibling and if exists puts it through recursion
			else if (currentNode.nextSibling !== null ) {
				currentNode = currentNode.nextSibling;
				return getElements(currentNode);
			}

			else {
				var checkParents = function (currentNode) {
					if (currentNode.parentNode.nextSibling !== null) {
						currentNode = currentNode.parentNode.nextSibling;
						return getElements(currentNode); }
					else {
						currentNode = currentNode.parentNode
						return checkParents(currentNode)
					}
				}
				checkParents(currentNode);
			} 
		};

	};

	getElements(currentNode); 
	return elementArray;
	$('.stopsearch').remove();

};
