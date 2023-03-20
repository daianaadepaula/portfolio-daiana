// header
const iconToggle = document.querySelector('.toggle_icon');
const navbarMenu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu_link');
const iconClose = document.querySelector('.close_icon');

iconToggle.addEventListener('click', () => {
	navbarMenu.classList.toggle('active');
})

iconClose.addEventListener('click', () => {
	navbarMenu.classList.remove('active');
})

menuLinks.forEach((menuLink) => {
	menuLink.addEventListener('click', () => {
		navbarMenu.classList.remove('active');
	})
})

//change background header
function scrollHeader(){
	const header = document.getElementById('header');
	this.scrolly >= 20 ? header.classList.add('active') : header.classList.remove('active');
}

window.addEventListener('scroll', scrollHeader);