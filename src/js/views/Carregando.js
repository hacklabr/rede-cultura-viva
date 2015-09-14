var m = require('mithril');
var Carregando = {
	view: function(ctrl) {
		return m('.spinner'), [
			m('.bounce1'),
			m('.bounce2'),
			m('.bounce3')
		];
	}
};
