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
menuItems.forEach((item) => {
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
    const to = getScrollTopByHref(event.currentTarget) - 80;
    scrollToPosition(to);
}

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
});
/* -------------------------------------------------------------- */

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
/* ---------------------------------------------------------- */

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

const addClass = (elem, classe) => elem.classList.add(classe);
const removeClass = (elem, classe) => elem.classList.remove(classe);

document.addEventListener('scroll', debounce(() => {
    let header = document.querySelector("header");
    let main = document.querySelector("main");

    console.log(window.pageYOffset)
    if (window.pageYOffset > main.offsetTop) {
        removeClass(header, "anime-aumentar-cabecalho");
        addClass(header, "anime-diminuir-cabecalho");
    } else {
        removeClass(header, "anime-diminuir-cabecalho");
    }

},500));