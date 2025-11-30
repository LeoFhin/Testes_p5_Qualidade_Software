import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import WikiHome from "../../pages/WikiHome.page";
import WikiArtigo from "../../pages/WikiArtigo.page";

Given("que estou na página inicial da Wikipédia", () => {
    WikiHome.acessar();
});

When("pesquiso pelo termo {string}", (termo) => {
    if (termo === "{enter}") {
        WikiHome.inputBusca.type('{enter}');
    } else {
        WikiHome.pesquisar(termo);
    }
});

When("clico no menu {string}", (menu) => {
    if (menu === "Página aleatória") {
        WikiHome.linkPaginaAleatoria.click({ force: true }); 
        
    } else if (menu === "Portal comunitário") {
        WikiHome.linkPortalComunitario.click({ force: true }); 
    }
});

Then("devo ver o título do artigo contendo {string}", (tituloEsperado) => {
    WikiArtigo.validarTitulo(tituloEsperado);
});

Then("devo ver uma mensagem de que nada foi encontrado", () => {
    WikiArtigo.msgNenhumResultado.should('be.visible');
});

Then("devo permanecer na home ou ir para página de pesquisa", () => {
    cy.url().should('not.include', '/wiki/Especial:Search'); 
});

Then("na tabela de informações o campo {string} deve conter {string}", (campo, valor) => {
    WikiArtigo.validarDadoInfobox(campo, valor);
});

Then("devo ver um link para a versão em {string}", (idioma) => {
    if (idioma === "English") {
        WikiArtigo.linkIdiomaIngles.should('exist'); 
    }
});

Then("a URL deve ser diferente da página inicial", () => {
    cy.url().should('not.equal', WikiHome.url);
});

Then("devo visualizar a seção de artigo em destaque na home", () => {
    WikiHome.secaoDestaque.should('exist');
});