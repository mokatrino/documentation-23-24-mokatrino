document.addEventListener("DOMContentLoaded", function () {
	console.log("Hello World");
});

window.addEventListener('scroll', function () {
	console.log(window.scrollY);
	var header = document.querySelector('nav');
	header.style.opacity = window.scrollY > 0 && (window.scrollY < 750 || window.scrollY > 900) && (window.scrollY < 1600 || window.scrollY > 1750) ? 0 : 1;
});