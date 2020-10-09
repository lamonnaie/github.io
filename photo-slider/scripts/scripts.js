var index = 1;
var maxIndex = 2;

function left() {
	if (index == 1) {
		index = maxIndex;
	} else {
		index--; 
	}
    imageSwitch();
    captionSwitch();
};;

function right() {
	if (index == maxIndex) {
		index = 1;
	} else {
		index++; 
	}
    imageSwitch();
    captionSwitch();
};;

function imageSwitch() {
	var x = document.getElementById("main"); 
    x.innerHTML = '<img src="assets/' + index + '.jpg">'
}

function captionSwitch() {
	var y = document.getElementById("caption"); 
	var txt ="";
	switch(index) {
	  case 1:
	    txt = "Rosas back in the day."
	    break;
	  case 2:
	    txt = "Rosas nowadays."
	    break;
	  default:
	    txt = "default caption"
	}
    y.innerHTML = txt;
}