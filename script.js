// Base de dados dos presentes baseada na sua lista original
const presents = [
    { id: 1, title: "Perfumes", desc: "Amo cheiros doces e marcantes! E amo a Wepink😂", icon: "✨", category: "mimos" },
    { id: 2, title: "Coisas de série/doramas", desc: "Presentes inspirados nas minhas séries e doramas favoritos", icon: "📺", category: "objetos" },
    { id: 3, title: "Colar / Pulseira", desc: "Tenho preferência em prata, mas eu amo todos.", icon: "💍", category: "moda" },
    { id: 4, title: "Coisas relacionadas ao BTS", desc: "Sempre fui apaixonada neles, então vou amar", icon: "💟", category: "objetos" },
    { id: 5, title: "Caneca Personalizada", desc: "Um mimo fofo com a minha cara.", icon: "🍵", category: "mimos" },
    { id: 6, title: "Garrafa Stanley térmica", desc: "Para manter minha aguinha gelada sempre😘", icon: "🥤", category: "mimos" },
    { id: 7, title: "Ursinhos de pelúcia", desc: "Acho fofinho demaisss.", icon: "🧸", category: "objetos" },
    { id: 8, title: "Muitos Chocolates", desc: "Chocolate Nunca é demais!", icon: "🍫", category: "mimos" },
    { id: 9, title: "Roupas e looks novos", desc: "Sempre bom renovar o guarda-roupa.", icon: "👗", category: "moda" },
    { id: 10, title: "Bola de Vôlei", desc: "Para treinar e jogar com meus amiguinhos.", icon: "🏐", category: "objetos" },
    { id: 11, title: "Qualquer coisa na cor ROSA", desc: "Fez sentido e é rosa? Eu vou amar!", icon: "🌸", category: "outros" }
];

// Carregar itens na tela
function displayPresents(items) {
    const grid = document.getElementById('gift-grid');
    grid.innerHTML = "";

    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'gift-card';
        card.innerHTML = `
            <div>
                <div class="gift-icon">${item.icon}</div>
                <div class="gift-title">${item.title}</div>
                <div class="gift-desc">${item.desc}</div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Filtros de categoria
function filterCategory(category) {
    // Mudar classe ativa do botão
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    if (category === 'todos') {
        displayPresents(presents);
    } else {
        const filtered = presents.filter(p => p.category === category);
        displayPresents(filtered);
    }
}

// Inicializar o site
document.addEventListener("DOMContentLoaded", () => {
    displayPresents(presents);
});