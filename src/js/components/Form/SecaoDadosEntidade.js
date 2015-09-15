var m = require('mithril');
var Input = require('views/Helpers/Input');
var Select = require('views/Helpers/Select');

var SecaoDadosEntidade = {
	controller: function () {},
	view: function(ctrl) {
		return m('div', [
			m('h3', 'Seção Dados Entidade'),
			m.component(Select, { label:'Quero ser' , name:'quero-ser'}),
			m.component(Select, { label:'Tipo de organização' , name:'tipo-organizacao'}),
			m.component(Input, { label:'CNPJ da entidade' , name:'cnpj'}),
			m.component(Input, { label:'Razão social da Entidade', 'name':'raza-social'}),
			m.component(Input, { label:'Nome do representante legal', 'name':'representante-legal'}),
			m.component(Input, { label:'Nome fantasia', 'name':'nome-fantasia'})
		]);
	}
};

module.exports = SecaoDadosEntidade;

