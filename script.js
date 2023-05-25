window.sr = ScrollReveal({ reset: true });
sr.reveal('#content', { duration: 500 });
sr.reveal('#imgb', { duration: 500 });
sr.reveal('.apresentacao', { duration: 500});
sr.reveal('.conteudosobremim', { duration: 500});
sr.reveal('.iconperfil', { duration: 1000});

const menu = document.getElementById('menu');

function togglemenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const navlist = document.getElementById('navlist');
    navlist.classList.toggle('active');

    const active = navlist.classList.contains( 'active');
    event.currentTarget.setAtrribute('aria-expanded', 'true');
    if (active) { event.currentTarget.setAtrribute('arial-label', 'Fechar Menu');
} 
    else {
        event.currentTarget.setAtrribute('arial-label', 'Abrir Menu');
    }
}

menu.addEventListener('click', togglemenu);
menu.addEventListener('touchstart', togglemenu);

