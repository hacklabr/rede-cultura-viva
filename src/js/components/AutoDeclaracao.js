var m = require('mithril');
var _ = require('underscore');
var Carregando = require('views/Carregando');
var InformarCNPJ = require('pages/InformarCNPJ');
var CompletarPerfil = require('pages/CompletarPerfil');

var AutoDeclaracao = {
	controller: function(args) {
		this.temCNPJ = m.prop(false);
		//var component = m.component(Carregando);
	},
	view: function(ctrl) {
		if (ctrl.temCNPJ()) {
			return m.component(CompletarPerfil);
		} else {
			return m.component(InformarCNPJ, {temCNPJ: ctrl.temCNPJ});
		}
	}
};

module.exports = AutoDeclaracao;
