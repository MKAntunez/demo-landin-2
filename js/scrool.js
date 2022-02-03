window.addEventListener('scroll', function(){
	let nav = document.querySelector('nav');
	let windowPosition = window.scrollY > 0;
	nav.classList.toggle('bg-light1', windowPosition);
})
window.addEventListener('scroll', function(){
	let nav = document.querySelector('svg');
	let windowPosition = window.scrollY > 0;
	nav.classList.toggle('logo1', windowPosition);
})
