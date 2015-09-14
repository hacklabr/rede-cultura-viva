var m = require('mithril');
var BannerComTitulo = require('views/BannerComTitulo');
var FormCNPJ = require('components/FormCNPJ');

var InformarCNPJ = {
	// controller: function() {
	// },
	view: function(ctrl, args) {
		return m('.informar-cnpj', [
			m.component(BannerComTitulo),
			m.component(FormCNPJ, args)
		]);
	}
};

module.exports = InformarCNPJ;
