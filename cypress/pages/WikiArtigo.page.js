class WikiArtigoPage {
    get titulo() { return cy.get('h1#firstHeading'); }
    get caixaInfo() { return cy.get('.infobox'); }
    get msgNenhumResultado() { return cy.get('.mw-search-nonefound'); }
    get linkIdiomaIngles() { return cy.get('.interlanguage-link-target[lang="en"]'); }
    get linkIdiomaEspanhol() { return cy.get('.interlanguage-link-target[lang="es"]'); }
    get linkIdiomaFrances() { return cy.get('.interlanguage-link-target[lang="fr"]'); }

     

    validarTitulo(texto) {
        this.titulo.should('contain.text', texto);
    }

    validarDadoInfobox(rotulo, valorEsperado) {
        this.caixaInfo.contains('th', rotulo).parent().find('td').should('contain.text', valorEsperado);
    }

    validarSecaoIndice(secao) {
    cy.get('.vector-toc-text').contains(secao).should('be.visible');
    }   

}

export default new WikiArtigoPage();