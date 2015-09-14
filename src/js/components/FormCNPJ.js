var m = require('mithril');

var FormCNPJ = {
	controller: function (args) {
		this.args = args;
		this.pesquisar_cnpj = function(ctrl) {
			console.log('pesquisando cnpj');
		};
		this.prosseguir = function(ctrl) {
			ctrl.args.temCNPJ(true);
		}
	},
	view: function (ctrl) {
		return m('.container', [
			m('.escolher-cnpj', [
				m('h4', 'sem cnpj'),
				m('p', 'Você não precisa ter um CNPJ para autodeclarar seu Ponto de Cultura.  Continue com a validação em nome do seu Coletivo Cultural.')
			]),
			m('.escolher-cnpj', [
				m('h4', 'com cnpj'),
				m('p', 'Se voce jå possui um CNPJ lorem ipsum dolem sit amet dolus invictus '),
				m('.pesquisar-cnpj', [
					m('input[type=text]'),
					m('a.button.small[href=#]', { onclick : ctrl.pesquisar_cnpj.bind(this, ctrl) }, 'pesquisar')
				])
			]),
			m('.text-center', 
				m('button.big',  { onclick : ctrl.prosseguir.bind(this, ctrl) }, 'prosseguir')
			)
		]);
	}
};

module.exports = FormCNPJ;
