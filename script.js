// SHOW SIDEBAR
const showSidebar = (toggleId, sidebarId, headerId, mainId) => {
    const toggle = document.getElementById(toggleId),
    sidebar = document.getElementById(sidebarId),
    header = document.getElementById(headerId),
    main = document.getElementById(mainId);

    if (toggle && sidebar && header && main) {
        toggle.addEventListener('click', () => {
            // mostra sidebar
            sidebar.classList.toggle('show-sidebar');
            // add padding ao header
            header.classList.toggle('left-pd');
            // add padding ao main
            main.classList.toggle('left-pd');
            // mudando posiçao do toggle
            toggle.classList.toggle('btn-on');
        });
    }
};

showSidebar('header-toggle', 'sidebar', 'header', 'main');





// LINK ACTIVE





// MUDANDO TEMAS