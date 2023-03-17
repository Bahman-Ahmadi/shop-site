function changeTab(to) {
	document.getElementsByClassName("tabs")[0].innerHTML = `
	<div class="tab" id="tab1" onclick="changeTab(this.id);">
	لوکس
	</div>
	<div class="tab" id="tab2" onclick="changeTab(this.id);">
	بچگانه
	</div>
	<div class="tab" id="tab3" onclick="changeTab(this.id);">
	زنانه
	</div>
	<div class="tab" id="tab4" onclick="changeTab(this.id);">
	مردانه
	</div>
	`;

	var New = document.getElementById(to);
	New.className += " active-tab-text";
	New.innerHTML += `<div class="active-tab"></div>`;

}

function likeToggle(heart) {
	if (heart.className == "bi bi-heart-fill") {
		heart.parentNode.className = "product-like";
		heart.className = "bi bi-heart";
	} else {
		heart.parentNode.className = "product-like product-like-active";
		heart.className = "bi bi-heart-fill";
	}
}

function menu() {
	const menu = document.getElementById("menu");
	menu.hidden?menu.hidden = false: menu.hidden = true;
}