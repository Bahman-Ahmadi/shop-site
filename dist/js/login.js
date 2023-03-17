var Alert = document.getElementById("alert");
function ForgotAlert() {
	Alert.innerHTML = `
	<h3 id="atitle" dir="rtl">
	<i class="bi bi-x-circle-fill" onclick="hiddenAlert();"></i>
	فراموشی رمزعبور
	</h3>
	<input type="email" class="alert-field" placeholder="ایمیل" /><br/>
	<input type="number" class="alert-field" placeholder="رمز یکبار مصرف" />

	<button class="login-btn" onclick="hiddenAlert();">ریست</button>
	`;
	Alert.hidden = false;
}
function RegisterAlert() {
	Alert.innerHTML = `
	<h3 id="atitle" dir="rtl">
	<i class="bi bi-x-circle-fill" onclick="hiddenAlert();"></i>
	ثبت‌نام
	</h3>
	<input type="text" class="alert-field" placeholder="نام و نام خانوادگی" /><br />
	<input type="text" class="alert-field" placeholder="نام کاربری" /><br />
	<input type="email" class="alert-field" placeholder="ایمیل" /><br/>
	<input type="password" class="alert-field" placeholder="رمزعبور" />

	<button class="login-btn" onclick="hiddenAlert();">ثبت‌نام</button>
	`;
	Alert.hidden = false;
}
function showPass() {
	let pass = document.getElementById("password");
	let show = document.getElementById("show");

	pass.type == "password"?pass.type = "text": pass.type = "password";
	show.className == "bi bi-eye-slash"?show.className = "bi bi-eye": show.className = "bi bi-eye-slash";
}

function hiddenAlert() {
	document.getElementById('alert').hidden = true;
}