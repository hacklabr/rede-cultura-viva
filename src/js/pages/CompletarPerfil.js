var m = require('mithril');
var BannerComTitulo = require('views/BannerComTitulo');
var CompletarPerfil = {
	// controller: function() {
	// },
	view: function(ctrl) {
		var state = {
			style        : {'background-color':'#D82E5F'},
			icon         :'.icon-key',
			section_name : 'dados da entidade',
			title        : 'Inclua os dados da Entidade responsável pelo Ponto de Cultura',
			sub_title    : ''
		};
		return [
			m.component(BannerComTitulo, state)
		];
	}
};

module.exports = CompletarPerfil;
