var array = []

function pushToArray() {
	var text = document.getElementById("itemToAddInput").value
	array.push(text)
	var newElement = document.createElement("li");
	var textDiv = document.createElement("div")
	textDiv.innerHTML = text
	newElement.appendChild(textDiv)
	var ul = document.getElementById("arrayString")
	ul.appendChild(newElement)
	document.getElementById("itemToAddInput").value = ""
}

function applyDelimeter() {
	var delimeterToUse = document.getElementById("delimiterInput").value
	var combinedItems = ourJoin(array, delimeterToUse)
	document.getElementById("arrayString").innerHTML = combinedItems
}

function ourJoin(arr, delimiter) {
	var sentence = array.toString()
	var i=0
	while (i<sentence.length) {
			sentence = sentence.replace(",", delimiter);
			i++
			}
	return sentence
}
