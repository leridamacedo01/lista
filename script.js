// Base de dados dos presentes baseada na sua lista original
const presents = [
    { id: 1, title: "Perfumes", desc: "Amo cheiros doces e marcantes!", icon: "✨", category: "mimos" },
    { id: 2, title: "Colar / Pulseira", desc: "Tenho preferência em prata, mas eu amo todos.", icon: "💍", category: "moda" },
    { id: 3, title: "Coisas relacionadas ao BTS ou de série/doramas", desc: "Sempre fui apaixonada, então vou amar", icon: "💟", category: "objetos" },
    { id: 4, title: "Garrafa Stanley ou Caneca Personalizada", desc: "Eu amoooo", icon: "🥤", category: "mimos" },
    { id: 5, title: "Chocolates e Ursinhos de pelúcia", desc: "Sou viciada em chocolate e acho os ursinhos fofinhos demaisss", icon: "🍫🧸", category: "mimos" },
    { id: 6, title: "Roupas e looks novos", desc: "Sempre bom renovar o guarda-roupa.", icon: "👗", category: "moda" },
    { id: 7, title: "Coisas de Vôlei ou Itens de gravação", desc: "Bola pra brincar com meus amiguinhos e itens pra mim usar nas minhas gravações? eu amo dms.", icon: "🏐📸", category: "objetos" }
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