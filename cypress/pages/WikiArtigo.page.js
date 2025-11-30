class WikiArtigoPage {
    get titulo() { return cy.get('h1#firstHeading'); }
    get caixaInfo() { return cy.get('.infobox'); }
    get msgNenhumResultado() { return cy.get('.mw-search-nonefound'); }
    get linkIdiomaIngles() { return cy.get('.interlanguage-link-target[lang="en"]'); }

    validarTitulo(texto) {
        this.titulo.should('contain.text', texto);
    }

    validarDadoInfobox(rotulo, valorEsperado) {
        this.caixaInfo.contains('th', rotulo).parent().find('td').should('contain.text', valorEsperado);
    }
}

export default new WikiArtigoPage();