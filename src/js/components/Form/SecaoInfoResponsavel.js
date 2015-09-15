var m = require('mithril');
var Input = require('views/Helpers/Input');

var SecaoInfoResponsavel = {
	controller: function () {},
	view: function(ctrl) {
		return m('div', [
			m('h3', 'Seção do Responsável'),
			m.component(Input, { label:'Nome Completo' , name:'nome-completo'}),
			m.component(Input, { label:'RG' , name:'rg'}),
			m.component(Input, { label:'CPF' , name: 'cpf'}),
			m.component(Input, { label:'E-mail' , name: 'email'}),
		]);
	}
};

module.exports = SecaoInfoResponsavel;
