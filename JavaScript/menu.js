document.addEventListener('DOMContentLoaded', function() {
    const menuHtml = `
    <div id="menu">
        <div id="menu-container">
            <a href="index.html"><img id="logo" src="Imagens/Icones/logo.png" alt="Logo da Escola Gastão Leão"></a>
            <button class="menu-toggle" id="menuToggle">&#9776;</button>
            <nav id="MenuNav">
                <ul>
                    <li><a href="index.html">Início</a></li>
                    <li><a href="Institucional.html">Institucional</a></li>
                    <li><a href="Projetos.html">Projetos</a></li>
                </ul>
            </nav>
        </div>
        <hr>
    </div>
    `;

    // Inserir o menu no início do body da página
    document.body.insertAdjacentHTML('afterbegin', menuHtml);

    const menu = document.getElementById('menu');
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.getElementById('MenuNav');
    
    // Encolhe o menu com scroll
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            menu.classList.add('shrink');
        } else {
            menu.classList.remove('shrink');
        }
    });

    // Toggle menu em dispositivos móveis
    menuToggle.addEventListener('click', function () {
        nav.classList.toggle('open');
    });

    document.querySelectorAll('#MenuNav a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('open');
        });
    });
});
