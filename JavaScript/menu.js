document.addEventListener('DOMContentLoaded', function() {
    const menuHtml = `
    <div id="menu">
        <div class="menu-container">
            <a href="Index.html"><img id="logo" src="Imagens/Icones/logo.png" alt="Logo da Escola Gastão Leão"></a>
            <nav>
                <ul>
                    <li><a href="Index.html">Início</a></li>
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

    // Lógica de encolher o menu com o scroll
    const menu = document.getElementById('menu');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            menu.classList.add('shrink');
        } else {
            menu.classList.remove('shrink');
        }
    });
});
