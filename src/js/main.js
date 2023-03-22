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
	this.scrollY >= 20 ? header.classList.add('active') : header.classList.remove('active');
}

window.addEventListener('scroll', scrollHeader);

// home type effect
let type = new Typed('.typed', {
	strings: ["desenvolvedora", "freelancer"],
	typeSpeed: 100,
	backSpeed: 100,
	backDelay: 1000,
	loop: true
})

// scroll section active link
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
	const scrolly = window.pageYOffset;

	sections.forEach(section => {
		const sectionHeight = section.offsetHeight;
		const sectionTop = section.offsetTop - 50;

		let sectionId = section.getAttribute('id');
		if(scrolly > sectionTop && scrolly <= sectionTop + sectionHeight){
			document.querySelector('.menu a[href *='+ sectionId +']').classList.add('active-link');
		}else{
			document.querySelector('.menu a[href *='+ sectionId +']').classList.remove('active-link');
		}
	})
}

window.addEventListener('scroll', scrollActive)
