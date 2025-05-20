document.addEventListener('DOMContentLoaded', function() {
    const footerHtml = `
    <div id="rodape">
                <table class="tabela_rodape">
                <tr>
                    <td> <strong> Endereço </strong> </td>
                    <td> Rua Jose Valdir Garcia nº 55, Columbia City, Guaíba - RS, 92500-000 </td>
                    <td> <strong> Redes Sociais </strong> </td>
                </tr>
                <tr>
                    <td> <strong> Telefone </strong> </td>
                    <td> (51) 3491-2998 </td>
                    <td> <center> <a href="https://www.instagram.com/e.m.e.f.dr.gastaoleao/"> <img src="Imagens/Icones/instagram.png" width="20px"/> </a> </center> </td>
                </tr>
                <tr>
                    <td> <strong> Horário de Funcionamento </strong> </td>
                    <td> Segunda a Sexta, 8:00-17:00 </td>
                </tr>
            </table>
        </div>
        `;

        document.body.insertAdjacentHTML('beforeend', footerHtml);
});