var sizeBtns = document.getElementsByClassName("size");
for (var sizeBtn in sizeBtns) {
	sizeBtns[sizeBtn].onclick = function(arg) {
		for (var i in sizeBtns) {
			// disabling other buttons
			sizeBtns[i].className = "size";
		}
		// enabling selected button
		this.className = "size size-selected";
	};
}

var colorBtns = document.getElementsByClassName("color");
for (var colorBtn in colorBtns) {
	colorBtns[colorBtn].onclick = function(arg) {
		for (var j in colorBtns) {
			try {
				colorBtns[j].className = colorBtns[j].className.split(" ")[0]+" "+colorBtns[j].className.split(" ")[1];
			}catch(e) {}
			colorBtns[j].innerHTML = "";
		}
		this.className += " color-selected";
		this.innerHTML = `<i class="bi bi-check2"></i>`;
	};
}

function plus(showerID) {
	let shower = document.getElementById(showerID);
	console.log(eval(shower.innerHTML++));
	shower.innerHTML = eval(shower.innerHTML++);
}

function minus(showerID) {
	let shower = document.getElementById(showerID);
	if (shower.innerHTML > 1) {
		console.log(eval(shower.innerHTML--));
		shower.innerHTML = eval(shower.innerHTML--);
	}
}

function LikeToggle() {
	var heart = document.getElementsByClassName("bi")[4];
	if (heart.className == "bi bi-heart-fill") {
		heart.className = "bi bi-heart";
	} else {
		heart.className = "bi bi-heart-fill";
	}
}

function sendForm() {
	var size = document.getElementsByClassName("size-selected")[0].innerHTML;
	var color = document.getElementsByClassName("color-selected")[0].className.split(" ")[1];
	var count = document.getElementById("viewer").innerHTML;

	console.log(document.getElementsByClassName("color-selected")[0].className);

	return {
		"size": size,
		"color": color,
		"count": count
	};
}
function showAlert() {
	document.getElementById('alert').style = "visibility: visible;";
}

function hiddenAlert() {
	document.getElementById('alert').style = "visibility: hidden;";
}