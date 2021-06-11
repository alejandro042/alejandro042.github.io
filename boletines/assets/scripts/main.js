let links = document.querySelectorAll(".close");

links.forEach(function(link){

	link.addEvenListener("click", function(ev) {
		ev.preventDefault();
		let content = document.querySelector(".content");

		content.classList.remove("animate__rubberBand");
		content.classList.remove("animate__animated");

		content.classList.add("animate__FadeOutUp");
		content.classList.add("animate__animated");


		seTimeout (function(){
			window.history.go(-1);
		}, 600)
		setInterval

		return false;
	});
});