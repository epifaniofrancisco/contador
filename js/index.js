var date;

function formatDate(date) {
	date = date.split("/");
	date = date.reverse().toString().replaceAll(",", "-");

	return date;
}

function reiniciar() {
	window.location.href = "index.html"
}

function getDate() {
	date = document.getElementById("date").value;
	sessionStorage.setItem("data", date);
	validar();
}

function validar() {
	date = sessionStorage.getItem("data");
	date = formatDate(date);

	let dataFormatada = new Date(date + ":00:00:00").getTime();
	let now = new Date().getTime();

	if (dataFormatada - now < 0 || date == "") {
		alert("A data deve ser maior que a atual!");
	} else {
		window.location.href = "./contador.html";
		contador();
	}
}

function contador() {
	date = sessionStorage.getItem("data");
	date = formatDate(date);
	countDown = new Date(date + ":00:00:00");

	console.log(countDown);

	countDown.getTime();

	console.log(countDown.getTime());

	var x = setInterval(function () {
		var now = new Date().getTime();

		var distance = countDown - now;

		var dias = Math.floor(distance / (1000 * 60 * 60 * 24));
		var horas = Math.floor(
			(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
		);
		var minutos = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var segundos = Math.floor((distance % (1000 * 60)) / 1000);

		console.log(dias, horas, minutos, segundos);

		document.getElementById("dias").innerHTML = dias;
		document.getElementById("horas").innerHTML = horas;
		document.getElementById("minutos").innerHTML = minutos;
		document.getElementById("segundos").innerHTML = segundos;

		if (distance < 0) {
			clearInterval(x);
			document.getElementById("demo").innerHTML = "EXPIRED";
		}
	}, 1000);
}
