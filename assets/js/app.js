/* Aplicar estilo no menu selecionado */
/* window.onhashchange = (e) =>{
    const oldURL = e.oldURL.split('#')[1];
    const newURL = e.newURL.split('#')[1];
    const oldLINK = document.querySelector(`.nav a[href='#${oldURL}']`);
    const newLINK = document.querySelector(`.nav a[href='#${newURL}']`);
    oldLINK && oldLINK.classList.remove('selected');
    newLINK && newLINK.classList.add('selected');
} */

/* Ativa/desativa menu mobile */

const menuItems = document.querySelectorAll('.nav li a[href^="#"]');

const menuToggler = document.querySelector('[href="#nav"]');
const nav = document.querySelector('#nav');
const closeMenuArea = document.querySelector('#close-menu');

/*Area para abrir o menu */
menuToggler.addEventListener('click', () => {
    nav.classList.add('nav-target');
})

/* Areas para fechar menu */
closeMenuArea.addEventListener('click', closeMenu);
menuItems.forEach( (item) => {
    item.addEventListener('click', closeMenu);
});

/* Abre Menu */
function openMenu() {
    nav.classList.add('nav-target');
}

/* remove Menu */
function closeMenu() {
    nav.classList.remove('nav-target');
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



