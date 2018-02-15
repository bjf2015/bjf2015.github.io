var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/clintonmaid.jpg'){
		myImage.setAttribute('src', 'images/don_lemon.jpg');
	} else {
		myImage.setAttribute('src', 'images/clintonmaid.jpg');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'What is up, ' + myName;
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'What is up, ' + storedName;
}
//attachs the onclick handler to the button
myButton.onclick = function() {
	setUserName();
}
