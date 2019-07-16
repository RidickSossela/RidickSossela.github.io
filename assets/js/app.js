/* Ativa/desativa menu mobile */
const menuItems = document.querySelectorAll('.nav li a[href^="#"]');

const menuToggler = document.querySelector('[href="#nav"]');
const nav = document.querySelector('#nav');
const closeMenuArea = document.querySelector('#close-menu');

/*Area para abrir o menu */
menuToggler.addEventListener('click', () => {
    nav.classList.add('nav-active');
})

/* Areas para fechar menu */
closeMenuArea.addEventListener('click', closeMenu);
menuItems.forEach( (item) => {
    item.addEventListener('click', closeMenu);
});

/* Abre Menu */
function openMenu() {
    nav.classList.add('nav-active');
}

/* remove Menu */
function closeMenu() {
    nav.classList.remove('nav-active');
}

/* -------------------------------------------------------- */

/* Scroll suave */
function getScrollTopByHref(element) {
	const id = element.getAttribute('href');
	return document.querySelector(id).offsetTop;
}

function scrollToPosition(to) {
	window.scroll({
	top: to,
	behavior: "smooth",
	})
}

function scrollToIdOnClick(event) {
	event.preventDefault();
	const to = getScrollTopByHref(event.currentTarget)- 80;
	scrollToPosition(to);
}

menuItems.forEach(item => {
	item.addEventListener('click', scrollToIdOnClick);
});
/* ---------------------------------------------------------- */

/* Progress bar */
const spans = Array.from( document.querySelectorAll('.loading-bar >span'));
spans.forEach( (item) => {
     item.style.width = item.innerHTML
});

