var m = require('mithril');
var Input = require('views/Helpers/Input');
var Select = require('views/Helpers/Select');

var SecaoInfoResponsavel = {
	controller: function () {},
	view: function(ctrl) {
		return m('div', [
			m('h3', 'Seção do Responsável'),
			m.component(Input, { label:'Nome Completo' , name:'nome-completo'}),
			m.component(Input, { label:'RG' , name:'rg'}),
			m.component(Select, { label:'Qual sua relação com o Ponto/Pontão de Cultura?' , name:'rg'}),
			m.component(Input, { label:'CPF' , name: 'cpf'}),
			m.component(Select, { label:'Estado' , name: 'operadora'}),
			m.component(Input, { label:'E-mail pessoal' , name: 'email'}),
			m.component(Input, { label:'Telefone Pessoal' , name: 'telefone'}),
			m.component(Select, { label:'Operadora' , name: 'operadora'}),
		]);
	}
};

module.exports = SecaoInfoResponsavel;
