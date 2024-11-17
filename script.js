// SHOW SIDEBAR
const showSidebar = (toggleId, sidebarId, headerId, mainId, title1Id, title2Id) => {
    const toggle = document.getElementById(toggleId),
    sidebar = document.getElementById(sidebarId),
    header = document.getElementById(headerId),
    main = document.getElementById(mainId),
    title1 = document.getElementById(title1Id),
    title2 = document.getElementById(title2Id);

    if (toggle && sidebar && header && main && title1 && title2) {
        toggle.addEventListener('click', () => {
            // mostra sidebar
            sidebar.classList.toggle('show-sidebar');
            // add padding ao header
            header.classList.toggle('left-pd');
            // add padding ao main
            main.classList.toggle('left-pd');
            // mudando posiçao do toggle
            toggle.classList.toggle('btn-on');
            // mostrando o title 1
            title1.classList.toggle('active'); 
            // mostrando o title 2
            title2.classList.toggle('active'); 
        });
    }
};

showSidebar('header-toggle', 'sidebar', 'header', 'main', 'title1', 'title2');

// LINK ACTIVE

const sidebarLink = document.querySelectorAll('.sidebar-list a');

function linkColor() {
    sidebarLink.forEach(l => l.classList.remove('active-link'))
    this.classList.add('active-link')
}

sidebarLink.forEach(l => l.addEventListener('click', linkColor))

// MUDANDO TEMAS

const themeButton = document.getElementById('theme-button');
const darkTheme = 'darktheme'
const iconTheme = 'ri-sun-fill'
const headerImg = document.getElementById('header-img')

// Tópico selecionado anteriormente (se o usuário tiver selecionado)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');


// Obtemos o tema atual que a interface possui validando a classe dark-theme
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains
(iconTheme) ? 'ri-moon-clear-fill' : 'ri-sun-fill'

// Validamos se o usuário escolheu previamente um tópico
if (selectedTheme) {
    // Se a validação for cumprida, perguntamos qual foi o problema para saber se ativamos ou desativamos o dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-clear-fill' ? 'add' : 'remove'](iconTheme)
}

// Ative/desative o tema manualmente com o botão
themeButton.addEventListener('click', () => {
    // Adicionar ou remover o tema escuro / ícone
    document.body.classList.toggle('dark-theme');
    themeButton.classList.toggle(iconTheme);
    
    // Troca a imagem do header com base no tema atual
    if (document.body.classList.contains('dark-theme')) {
        headerImg.src = './assets/img/young-laranja-azulescuro-icon.png'; // Caminho para a imagem do tema escuro
    } else {
        headerImg.src = './assets/img/young-laranjaebranco-icon.png'; // Caminho para a imagem do tema claro
    }

    // Salvamos o tema e o ícone atual que o usuário escolheu
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});
