var m = require('mithril');
var AutoDeclaracao = require('components/AutoDeclaracao');
var wizard = document.getElementById("wizard");

if (wizard) {
	m.mount(wizard, AutoDeclaracao);
}
/*
var Responsavel = function (data) {
    this.nome = m.prop(data.nome || '');
    this.rg = m.prop(data.rg);
    this.orgao_expeditor = m.prop(data.orgao_expeditor);
    this.relacao = m.prop(data.relacao); // responsavel - trabalhador - parceiro
    this.cpf = m.prop(data.cpf);
    this.estado = m.prop(data.estado);
    this.email = m.prop(data.email);
    this.telefone = m.prop(data.telefone);
    this.operadora = m.prop(data.operadora);

    this.foto = m.prop(data.foto);
    this.ser_chamado = m.prop(data.ser_chamado);
    this.cidade = m.prop(data.cidade);
    this.perfil_facebook = m.prop(data.perfil_facebook);
    this.perfil_twitter = m.prop(data.perfil_twitter);
    this.perfil_gplus = m.prop(data.perfil_gplus);
}
var infraOptions = m.prop([
	'Acesso à internet',
	'Sala de aula',
	'Auditório',
	'Teatro',
	'Estúdio',
	'Palco',
	'Galpão',
	'Hackerspace',
	'Casa',
	'Apartamento',
	'Cozinha',
	'Garagem',
	'Jardim',
	'Bar',
	'Laboratório',
	'Gráfica',
	'Loja'
]);

var Sections = function() {
    this.Responsavel = m.prop({
        title: 'Informações do responsável',
        subtitle: 'Precisamos saber quem é você e pegar seus contatos! Afinal, comunicação é um requisito vital para que nossa rede se mantenha viva!',
        icon: 'user',
        slug: 'info-responsavel',
    });
    this.Entidade = m.prop({
        title: 'Dados da entidade',
        subtitle: 'Precisamos saber quem é você e pegar seus contatos! Afinal, comunicação é um requisito vital para que nossa rede se mantenha viva!',
        icon: 'user',
        slug: 'info-responsavel',
    });
    // return m.request({method: "GET", url: "pages.json"});
};
*/
