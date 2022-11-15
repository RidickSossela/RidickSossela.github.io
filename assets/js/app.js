
function setEvent(selectors, event, func) {
    selectors.split(',')
        .forEach(sel => document.querySelectorAll(sel)
            .forEach(elem => elem.addEventListener(event, func)));
}

setEvent('#menu-hamburger, .menu-items li', 'click', () => document.querySelector('ul.menu-items').classList.toggle('open'));

let scrollEvent=null;
const onScroll = () => {
    clearTimeout(scrollEvent);
    scrollEvent = setTimeout(() => {
        if (scrollY > 500) {
            document.querySelector('.scroll-top-page').classList.add('show');
        }else{
            document.querySelector('.scroll-top-page').classList.remove('show');
        }
    }, 500);
}
document.addEventListener('scroll', onScroll);

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