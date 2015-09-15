var m = require('mithril');
var BannerComTitulo = require('views/BannerComTitulo');
var SecoesComplementares = require('models/SecoesComplementares');
var NavSecaoComplementar = require('components/NavSecaoComplementar');
var FormSecaoComplementar = require('components/FormSecaoComplementar');

var CompletarPerfil = {
	controller: function() {
		this.index_secao_active = m.prop(0);
	},
	view: function(ctrl) {
		return m('.clearfix', [
			m.component(BannerComTitulo, SecoesComplementares[ctrl.index_secao_active()]),
			m('.container', [
				m.component(NavSecaoComplementar,
							{ SecoesComplementares : SecoesComplementares },
							ctrl.index_secao_active ),
				m.component(FormSecaoComplementar,
							{ SecaoComplementar : SecoesComplementares[ctrl.index_secao_active()] })
			])
		]);
	}
};

module.exports = CompletarPerfil;
