const champions = [
    { name: 'Aatrox', rotas: ['imgs/top-icon.png','imgs/jungle-icon.png' ], img: 'imgs/champions/aatrox-logo.webp' },
    { name: 'Ahri', rotas: ['imgs/mid-icon.png'], img: 'imgs/champions/ahri-logo.webp' },
    { name: 'Akali', rotas: ['imgs/top-icon.png','imgs/mid-icon.png' ], img: 'imgs/champions/akali-logo.webp' },
    { name: 'Akshan', rotas: ['imgs/mid-icon.png'], img: 'imgs/champions/akshan-logo.webp' },
    { name: 'Alistar', rotas: ['imgs/sup-icon.png'], img: 'imgs/champions/alistar-logo.webp' },
    { name: 'Amumu', rotas: ['imgs/top-icon.png','imgs/jungle-icon.png','imgs/sup-icon.png' ], img: 'imgs/champions/amumu-logo.webp' },
    { name: 'Annie', rotas: ['imgs/mid-icon.png'], img: 'imgs/champions/annie-logo.webp' },
    { name: 'Ashe', rotas: ['imgs/adc-icon.png','imgs/sup-icon.png'], img: 'imgs/champions/ashe-logo.webp' },
    { name: 'Aurelion Sol', rotas: ['imgs/mid-icon.png'], img: 'imgs/champions/aurelion-sol-logo.webp' },
    { name: 'Blitzcrank', rotas: ['imgs/sup-icon.png'], img: 'imgs/champions/blitzcrank-logo.webp' },
    { name: 'Brand', rotas: ['imgs/mid-icon.png','imgs/sup-icon.png'], img: 'imgs/champions/brand-logo.webp' },
    { name: 'Braum', rotas: ['imgs/sup-icon.png'], img: 'imgs/champions/braum-logo.webp' },
    { name: 'Caitlyn', rotas: ['imgs/adc-icon.png'], img: 'imgs/champions/Caitlyn-logo.webp' },
    { name: 'Camille', rotas: ['imgs/top-icon.png','imgs/jungle-icon.png' ], img: 'imgs/champions/camille-logo.webp' },
    { name: 'Corki', rotas: ['imgs/adc-icon.png'], img: 'imgs/champions/corki-logo.webp' },
    { name: 'Darius', rotas: ['imgs/top-icon.png','imgs/jungle-icon.png' ], img: 'imgs/champions/darius-logo.webp' },
    { name: 'Diana', rotas: ['imgs/top-icon.png','imgs/jungle-icon.png','imgs/mid-icon.png' ], img: 'imgs/champions/diana-logo.webp' },
    { name: 'Dr. Mundo', rotas: ['imgs/top-icon.png','imgs/jungle-icon.png'], img: 'imgs/champions/dr-mundo-logo.webp' },
    { name: 'Draven', rotas: ['imgs/adc-icon.png'], img: 'imgs/champions/draven-logo.webp' },
    { name: 'Ekko', rotas: ['imgs/mid-icon.png','imgs/jungle-icon.png','imgs/sup-icon.png' ], img: 'imgs/champions/ekko-logo.webp' },
    { name: 'Evelynn', rotas: ['imgs/jungle-icon.png'], img: 'imgs/champions/evelynn-logo.webp' },
    { name: 'Ezreal', rotas: ['imgs/adc-icon.png'], img: 'imgs/champions/ezreal-logo.webp' },
    { name: 'Fiddlesticks', rotas: ['imgs/jungle-icon.png'], img: 'imgs/champions/fiddlesticks-logo.webp' },
    { name: 'Fiora', rotas: ['imgs/top-icon.png'], img: 'imgs/champions/fiora-logo.webp' },
    { name: 'Fizz', rotas: ['imgs/top-icon.png','imgs/jungle-icon.png','imgs/mid-icon.png' ], img: 'imgs/champions/fizz-logo.png' },
    { name: 'Galio', rotas: ['imgs/mid-icon.png', 'imgs/sup-icon.png'], img: 'imgs/champions/galio-logo.webp' },
    { name: 'Garen', rotas: ['imgs/top-icon.png'], img: 'imgs/champions/garen-logo.webp' },
    { name: 'Gragas', rotas: ['imgs/top-icon.png','imgs/jungle-icon.png'], img: 'imgs/champions/gragas-logo.webp' },
    { name: 'Graves', rotas:  ['imgs/top-icon.png','imgs/jungle-icon.png'], img: 'imgs/champions/graves-logo.webp' },
    { name: 'Gwen', rotas:  ['imgs/top-icon.png','imgs/jungle-icon.png'], img: 'imgs/champions/gwen-logo.webp' },
    { name: 'Hecarim', rotas: ['imgs/jungle-icon.png'], img: 'imgs/champions/hecarim-logo.webp' },
    { name: 'Heimerdinger', rotas: ['imgs/mid-icon.png'], img: 'imgs/champions/heimerdinger-logo.webp' },
    { name: 'Irelia', rotas:  ['imgs/top-icon.png','imgs/mid-icon.png'], img: 'imgs/champions/irelia-logo.webp' },
    { name: 'Janna', rotas: ['imgs/sup-icon.png'], img: 'imgs/champions/janna-logo.webp' },
    { name: 'Jarvan IV', rotas:  ['imgs/top-icon.png','imgs/jungle-icon.png'], img: 'imgs/champions/jarvan-iv-logo.webp' },
    { name: 'Jax', rotas: ['imgs/top-icon.png','imgs/jungle-icon.png'], img: 'imgs/champions/jax-logo.webp' },
    { name: 'Jayce', rotas: ['imgs/top-icon.png','imgs/mid-icon.png'], img: 'imgs/champions/jayce-logo.webp' },
    { name: 'Jhin', rotas: ['imgs/adc-icon.png'], img: 'imgs/champions/jhin-logo.png' },
    { name: 'Jinx', rotas: ['imgs/adc-icon.png'], img: 'imgs/champions/Jinx-logo.webp' },
    { name: 'Kai`Sa', rotas: ['imgs/adc-icon.png'], img: 'imgs/champions/Kai`Sa-logo.webp' },
    { name: 'Kalista', rotas: ['imgs/adc-icon.png'], img: 'imgs/champions/kalista-logo.webp' },
    { name: 'Karma', rotas: ['imgs/mid-icon.png','imgs/sup-icon.png'], img: 'imgs/champions/karma-logo.webp' },
    { name: 'Kassadin', rotas: ['imgs/mid-icon.png'], img: 'imgs/champions/kassadin-logo.png' },
    { name: 'Katarina', rotas: ['imgs/mid-icon.png'], img: 'imgs/champions/katarina-logo.webp' },
    { name: 'Kayle', rotas: ['imgs/top-icon.png','imgs/jungle-icon.png','imgs/mid-icon.png'], img: 'imgs/champions/kayle-logo.webp' },
    { name: 'Kayn', rotas: ['imgs/jungle-icon.png'], img: 'imgs/champions/kayn-logo.webp' },
    { name: 'Kennen', rotas:['imgs/top-icon.png','imgs/mid-icon.png'], img: 'imgs/champions/kennen-logo.webp' },
    { name: 'Kha\'Zix', rotas: ['imgs/jungle-icon.png'], img: 'imgs/champions/Kha\'Zix-logo.webp' },
    { name: 'Kindred', rotas: ['imgs/jungle-icon.png'], img: 'imgs/champions/kindred-logo.webp' },
    { name: 'Lee Sin', rotas: ['imgs/jungle-icon.png'], img: 'imgs/champions/lee-sin-logo.webp' },
    { name: 'Leona', rotas: ['imgs/sup-icon.png'], img: 'imgs/champions/Leona-logo.webp' },
    { name: 'Lillia', rotas: ['imgs/jungle-icon.png'], img: 'imgs/champions/lilia-logo.avif' },
    { name: 'Lissandra', rotas: ['imgs/mid-icon.png'], img: 'imgs/champions/lissandra-logo.webp' },
    { name: 'Lucian', rotas: ['imgs/adc-icon.png'], img: 'imgs/champions/lucian-logo.webp' },
    { name: 'Lulu', rotas: ['imgs/sup-icon.png'], img: 'imgs/champions/lulu-logo.webp' },
    { name: 'Lux', rotas: ['imgs/mid-icon.png','imgs/sup-icon.png'], img: 'imgs/champions/lux-logo.png' },
    { name: 'Malphite', rotas: ['imgs/top-icon.png','imgs/jungle-icon.png', 'imgs/sup-icon.png'], img: 'imgs/champions/malphite-logo.webp' },
    { name: 'Maokai', rotas: ['imgs/top-icon.png','imgs/jungle-icon.png', 'imgs/sup-icon.png'], img: 'imgs/champions/maokai-logo.webp' },
    { name: 'Master Yi', rotas: ['imgs/jungle-icon.png'], img: 'imgs/champions/Master-Yi-logo.webp' },
    { name: 'Milio', rotas: ['imgs/sup-icon.png'], img: 'imgs/champions/milio-logo.webp' },
    { name: 'Miss Fortune', rotas: ['imgs/adc-icon.png'], img: 'imgs/champions/miss-fortune-logo.webp' },
    { name: 'Mordekaiser', rotas:  ['imgs/top-icon.png','imgs/jungle-icon.png'], img: 'imgs/champions/mordekaiser-logo.webp' },
    { name: 'Morgana', rotas: ['imgs/suo-icon.png', 'imgs/mid-icon.png'], img: 'imgs/champions/morgana-logo.webp' },
    { name: 'Nami', rotas: ['imgs/sup-icon.png'], img: 'imgs/champions/nami-logo.png' },
    { name: 'Nasus', rotas: ['imgs/top-icon.png'], img: 'imgs/champions/nasus-logo.webp' },
    { name: 'Nautilus', rotas: ['imgs/top-icon.png','imgs/jungle-icon.png', 'imgs/sup-icon.png'], img: 'imgs/champions/nautilus-logo.webp' },
    { name: 'Nilah', rotas: ['imgs/adc-icon.png'], img: 'imgs/champions/nilah-logo.webp' },
    { name: 'Nunu & Willump', rotas: ['imgs/jungle-icon.png'], img: 'imgs/champions/Nunu-logo.webp' },
    { name: 'Olaf', rotas: ['imgs/jungle-icon.png', 'imgs/top-icon.png'], img: 'imgs/champions/olaf-logo.webp' },
    { name: 'Orianna', rotas: ['imgs/mid-icon.png'], img: 'imgs/champions/orianna-logo.webp' },
    { name: 'Ornn', rotas: ['imgs/top-icon.png'], img: 'imgs/champions/ornn-logo.webp' },
    { name: 'Pantheon', rotas: ['imgs/top-icon.png', 'imgs/mid-icon.png'], img: 'imgs/champions/pantheon-logo.webp' },
    { name: 'Pyke', rotas: ['imgs/sup-icon.png'], img: 'imgs/champions/pyke-logo.webp' },
    { name: 'Rakan', rotas: ['imgs/sup-icon.png'], img: 'imgs/champions/rakan-logo.webp' },
    { name: 'Rammus', rotas: ['imgs/jungle-icon.png'], img: 'imgs/champions/rammus-logo.png' },
    { name: 'Renekton', rotas: ['imgs/top-icon.png'], img: 'imgs/champions/renekton-logo.png' },
    { name: 'Rengar', rotas: ['imgs/jungle-icon.png'], img: 'imgs/champions/rengar-logo.avif' },
    { name: 'Riven', rotas: ['imgs/top-icon.png', 'imgs/jungle-icon.png'], img: 'imgs/champions/riven-logo.avif' },
    { name: 'Samira', rotas: ['imgs/adc-icon.png'], img: 'imgs/champions/Samira-logo.webp' },
    { name: 'Senna', rotas: ['imgs/adc-icon.png', 'imgs/sup-icon.png'], img: 'imgs/champions/Senna-logo.webp' },
    { name: 'Seraphine', rotas: ['imgs/mid-icon.png','imgs/sup-icon.png', ], img: 'imgs/champions/seraphine-logo.webp' },
    { name: 'Sett', rotas: ['imgs/top-icon.png'], img: 'imgs/champions/sett-logo.webp' },
    { name: 'Shen', rotas: ['imgs/top-icon.png','imgs/jungle-icon.png'], img: 'imgs/champions/shen-logo.png' },
    { name: 'Shyvana', rotas: ['imgs/jungle-icon.png'], img: 'imgs/champions/shyvana-logo.webp' },
    { name: 'Singed', rotas: ['imgs/top-icon.png'], img: 'imgs/champions/singed-logo.webp' },
    { name: 'Sion', rotas: ['imgs/top-icon.png'], img: 'imgs/champions/sion-logo.webp' },
    { name: 'Sivir', rotas: ['imgs/adc-icon.png'], img: 'imgs/champions/sivir-logo.webp' },
    { name: 'Sona', rotas: ['imgs/sup-icon.png'], img: 'imgs/champions/sona-logo.webp' },
    { name: 'Soraka', rotas: ['imgs/sup-icon.png'], img: 'imgs/champions/soraka-logo.webp' },
    { name: 'Swain', rotas: ['imgs/mid-icon.png', 'imgs/sup-icon.png'], img: 'imgs/champions/swain-logo.webp' },
    { name: 'Syndra', rotas: ['imgs/mid-icon.png'], img: 'imgs/champions/syndra-logo.png' },
    { name: 'Talon', rotas: ['imgs/jungle-icon.png','imgs/mid-icon.png'], img: 'imgs/champions/talon-logo.webp' },
    { name: 'Teemo', rotas: ['imgs/top-icon.png','imgs/mid-icon.png'], img: 'imgs/champions/teemo-logo.webp' },
    { name: 'Thresh', rotas: ['imgs/sup-icon.png'], img: 'imgs/champions/thresh-logo.webp' },
    { name: 'Tristana', rotas: ['imgs/adc-icon.png'], img: 'imgs/champions/tristana-logo.webp' },
    { name: 'Tryndamere', rotas: ['imgs/top-icon.png','imgs/jungle-icon.png'], img: 'imgs/champions/tryndamere-logo.webp' },
    { name: 'Twisted Fate', rotas: ['imgs/mid-icon.png'], img: 'imgs/champions/Twisted-Fate-logo.webp' },
    { name: 'Twitch', rotas: ['imgs/adc-icon.png'], img: 'imgs/champions/Twitch-logo.webp' },
    { name: 'Urgot', rotas: ['imgs/top-icon.png'], img: 'imgs/champions/urgot-logo.webp' },
    { name: 'Varus', rotas: ['imgs/adc-icon.png'], img: 'imgs/champions/varus-logo.webp' },
    { name: 'Vayne', rotas: ['imgs/adc-icon.png'], img: 'imgs/champions/vayne-logo.webp' },
    { name: 'Veigar', rotas: ['imgs/mid-icon.png'], img: 'imgs/champions/veigar-logo.webp' },
    { name: 'Vex', rotas: ['imgs/mid-icon.png'], img: 'imgs/champions/vex-logo.webp' },
    { name: 'Vi', rotas: ['imgs/jungle-icon.png'], img: 'imgs/champions/vi-logo.webp' },
    { name: 'Viego', rotas: ['imgs/top-icon.png','imgs/jungle-icon.png' ], img: 'imgs/champions/viego-logo.avif' },
    { name: 'Vladimir', rotas: ['imgs/mid-icon.png', 'imgs/top-icon.png'], img: 'imgs/champions/vladimir-logo.webp' },
    { name: 'Volibear', rotas: ['imgs/jungle-icon.png', 'imgs/top-icon.png'], img: 'imgs/champions/volibear-logo.avif' },
    { name: 'Warwick', rotas: ['imgs/jungle-icon.png', 'imgs/top-icon.png'], img: 'imgs/champions/Warwick-logo.png' },
    { name: 'Wukong', rotas: ['imgs/jungle-icon.png', 'imgs/top-icon.png'], img: 'imgs/champions/wukong-logo.avif' },
    { name: 'Xayah', rotas: ['imgs/adc-icon.png'], img: 'imgs/champions/xayah-logo.webp' },
    { name: 'Xin Zhao', rotas: ['imgs/jungle-icon.png'], img: 'imgs/champions/xin-zhao-logo.avif' },
    { name: 'Yasuo', rotas: ['imgs/mid-icon.png', 'imgs/top-icon.png'], img: 'imgs/champions/yasuo-logo.webp' },
    { name: 'Yone', rotas: ['imgs/mid-icon.png', 'imgs/top-icon.png'], img: 'imgs/champions/yone-logo.png' },
    { name: 'Yuumi', rotas: ['imgs/sup-icon.png'], img: 'imgs/champions/yummi-logo.webp' },
    { name: 'Zed', rotas: ['imgs/jungle-icon.png','imgs/mid-icon.png'], img: 'imgs/champions/zed-logo.webp' },
    { name: 'Zeri', rotas: ['imgs/adc-icon.png'], img: 'imgs/champions/zeri-logo.webp' },
    { name: 'Ziggs', rotas: ['imgs/mid-icon.png'], img: 'imgs/champions/ziggs-logo.webp'},
    { name: 'Zoe', rotas: ['imgs/mid-icon.png'], img: 'imgs/champions/zoe-logo.png' },
    { name: 'Zyra', rotas: ['imgs/mid-icon.png', 'imgs/sup-icon.png'], img: 'imgs/champions/zyra-logo.webp' },
]


const input = document.getElementById('championInput');
const optionsList = document.getElementById("optionsList");
const tableBody = document.querySelector("tbody");
const totalRow = document.querySelector("tfoot td:nth-child(2)");

// Função para filtrar e mostrar opções
input.addEventListener('input', () => {
    const filter = input.value.toLowerCase();
    optionsList.innerHTML = ""; // Limpa a lista anterior
    const filterChampions = champions.filter(champion => champion.name.toLowerCase().includes(filter));

    // Se houver opções filtradas, apareça a lista
    if (filterChampions.length > 0 && filter) {
        optionsList.style.display = 'block'; // Mostra a lista
        filterChampions.forEach(champion => {
            const li = document.createElement('li');
            li.textContent = champion.name;
            li.addEventListener('click', () => {
                addChampionToTable(champion); // Adiciona campeão à tabela
                input.value = ''; // Limpa o input
                optionsList.style.display = 'none'; // Oculta a lista
            });
            optionsList.appendChild(li);
        });
    } else {
        optionsList.style.display = 'none'; // Oculta a lista se não houver opções
    }
});

// Oculta a lista se clicar fora do input
document.addEventListener('click', (event) => {
    if (!input.contains(event.target) && !optionsList.contains(event.target)) {
        optionsList.style.display = 'none';
    }
});

// Função para adicionar campeão à tabela
function addChampionToTable(champion) {
    // Cria uma nova linha para o campeão
    const newRow = document.createElement('tr');

    // Cria uma string para as imagens das rotas
    const routeImages = champion.rotas.map(route => `<img src="${route}" width="30" alt="">`).join(' ');

    // Verifica se a propriedade de imagem do campeão existe antes de usá-la
    const championImage = champion.img ? `<img src="${champion.img}" width="40" height="40" alt="${champion.name}">` : '';

    newRow.innerHTML = `
        <td>${routeImages}</td> <!-- Adiciona todas as imagens na mesma célula -->
        <td id="img-icon-campeao">${championImage} ${champion.name}</td>
        <td>
            <button class="btn-delete"><i class="fa-solid fa-trash"></i></button>
        </td>
    `;

    // Adiciona a nova linha ao corpo da tabela
    tableBody.appendChild(newRow);
    updateChampionCount();

    // Adiciona evento para remover a linha
    const deleteButton = newRow.querySelector('.btn-delete');
    deleteButton.addEventListener('click', () => {
        tableBody.removeChild(newRow);
        updateChampionCount();
    });
}




// Função para atualizar a contagem de campeões
function updateChampionCount() {
    const rows = tableBody.querySelectorAll('tr');
    const totalChampions = rows.length;
    totalRow.textContent = `${totalChampions} Campeões`;
}
