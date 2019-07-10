/* Aplicar estilo no menu selecionado */
window.onhashchange = (e) =>{
    const oldURL = e.oldURL.split('#')[1];
    const newURL = e.newURL.split('#')[1];
    const oldLINK = document.querySelector(`.navegacao a[href='#${oldURL}']`);
    const newLINK = document.querySelector(`.navegacao a[href='#${newURL}']`);
    oldLINK && oldLINK.classList.remove('selected');
    newLINK && newLINK.classList.add('selected');
}

/*  */