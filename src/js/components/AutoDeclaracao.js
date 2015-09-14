var m = require('mithril');
var Carregando = require('views/Carregando');
var InformarCNPJ = require('pages/InformarCNPJ');
var CompletarPerfil = require('pages/CompletarPerfil');

var AutoDeclaracao = {
	controller: function() {
		this.temCNPJ = false;

		var component = ctrl = {};
		component.view = Carregando;
		if (this.temCNPJ) {
			component = m.component(CompletarPerfil, {name: "world"}, "this is a test");
			var ctrl = new component.controller(); // logs "world", "this is a test"
		} else {
			component = m.component(InformarCNPJ, {name: "world"}, "this is a test");
			var ctrl = new component.controller(); // logs "world", "this is a test"
		}
		this.subview = component.view(ctrl);
	},
	view: function(ctrl) {
		return ctrl.subview;
	}
};

module.exports = AutoDeclaracao;
