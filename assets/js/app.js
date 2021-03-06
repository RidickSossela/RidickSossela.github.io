const substuirTexto = (elem, text) => document.querySelector(elem).innerHTML = text;

/* 
    Anima o menu quando o scroll é ativado
*/

document.addEventListener('scroll', debounce(() => {
    let titulo = document.querySelector(".title");

    if (window.pageYOffset > 80) {
        titulo.classList.add("anime-diminuir-cabecalho")
        substuirTexto(".nome h2", "");
        substuirTexto(".nome h1", "Dev - Ridick");
    } else {
        titulo.classList.remove("anime-diminuir-cabecalho")
        substuirTexto(".nome h1", "Ridick Luiz Sossela");
        substuirTexto(".nome h2", "Desenvolvedor Web");
    }
}, 200));

/*---- Ativa/desativa menu mobile ----*/
const menuItems = document.querySelectorAll('.nav li a[href^="#"]');
const menuToggler = document.querySelector('#menu-toggler');
const nav = document.querySelector('#nav');
const closeMenuArea = document.querySelector('#close-menu');

const openMenu = () => {
    nav.classList.add('nav-active');
    closeMenuArea.classList.add("close-menu");
}

const closeMenu = () => {
    nav.classList.remove('nav-active');
    closeMenuArea.classList.remove("close-menu");
}

/* 
    Fechar ou abrir o menu clicando no menu-toggler
    Se a classe "nav-active" significa que o menu esta aberto,
    então chama o metodo closemenu(), caso contrario chama o metodo openMenu()
*/
const openCloseMenu = () => nav.classList.contains("nav-active") ? closeMenu() : openMenu();
menuToggler.addEventListener("click", openCloseMenu);

/* ---- Areas para fechar menu ----- */

/* Clicando fora do menu */
closeMenuArea.addEventListener('click', closeMenu);

/* Clicando em algum link do menu  */
menuItems.forEach((item) => {
    item.addEventListener('click', closeMenu);
});


/* -------------------------------------------------------- */

/* Scroll suave */
function getScrollTopByHref(element) {
    let id = element.getAttribute('href');
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
    let to = getScrollTopByHref(event.currentTarget) - 80;
    scrollToPosition(to);
}

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
});
/* -------------------------------------------------------------- */

/* Calcula porcentagem cursada
    - Pós Graduação
*/
let element = document.querySelector('[date-ini]');
let dateIni = new Date(element.getAttribute('date-ini'));
let dateFim = new Date(element.getAttribute('date-fim'));
let dateNow = Date.now();
const oneDayMiliseconds = 1000 * 60 * 60 * 24;

let dateIniMiliseconds = dateIni.getTime();
let dateFimMiliseconds = dateFim.getTime();

let timeTotal = Math.abs(dateFimMiliseconds - dateIniMiliseconds);
let timeAttended = Math.abs(dateNow - dateIniMiliseconds);

let daysTotal = timeTotal / oneDayMiliseconds;
let daysAttended = timeAttended / oneDayMiliseconds;

let percentage = (daysAttended * 100 / daysTotal).toFixed(0);
percentage > 100 ? percentage = 100 : percentage = percentage;

element.innerHTML = percentage + "%";
/* ------------------------------------------------------------------*/

/* Progress bar */
const target = document.querySelectorAll('.loading-bar >span');
const animationClass = 'progress-active';
const card = document.querySelector('.card');

function animeScroll() {
    const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4;
    target.forEach(() => {
        if (windowTop > card.offsetTop) {
            addWidthBars(true);
        } else {
            addWidthBars(false);
        }
    });
}
animeScroll()

if (target.length) {
    window.addEventListener('scroll', debounce(function () {
        animeScroll()
    }, 200)
    )
}

/* Adiciona/remove classe e valor width nas progress bars  */
function addWidthBars(onScreen) {
    target.forEach((item) => {
        if (onScreen) {
            item.style.width = item.innerHTML
            item.classList.add(animationClass);
        }
        else {
            item.style.width = 0;
            item.classList.remove('progress-active');
        }
    });
}

/* ------------------------------------------------------------- */

/* Evitar excesso de chamadas do addEventListener */
function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};
/* ------------------------------------------------------------ */
