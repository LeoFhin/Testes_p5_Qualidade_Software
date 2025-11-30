class WikiHomePage {
    // URL
    get url() { return 'https://pt.wikipedia.org/wiki/Wikip%C3%A9dia:P%C3%A1gina_principal'; }

    // Busca
    get inputBusca() { return cy.get('input[name="search"]').eq(0); }
    get btnPesquisar() { return cy.get('button.cdx-search-input__end-button'); }

    // Navegação
    get linkPaginaAleatoria() { return cy.get('#n-randompage a'); }
    get linkPortalComunitario() { return cy.get('#n-portal a'); }
    
    // Conteúdo
    get secaoDestaque() { return cy.contains('Artigo em destaque'); }

    // Ações
    acessar() {
        cy.visit(this.url);
    }

    pesquisar(termo) {
        this.inputBusca.clear({ force: true });
        this.inputBusca.type(termo, { force: true });
        cy.wait(500);
        this.inputBusca.type('{enter}', { force: true });
    }
}

export default new WikiHomePage();