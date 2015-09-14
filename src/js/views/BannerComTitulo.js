var m = require('mithril');
var _ = require('underscore');

var BannerComTitulo = {
	view: function(ctrl, model) {
		var state = {
			key          : m.prop(0),
			color        : m.prop('#008E7D'),
			icon         : m.prop('.icon-bell'),
			section_name : m.prop('dados do responsável'),
			title        : m.prop('você já possui um cnpj?'),
			sub_title    : m.prop('Responda e verificaremos se já temos informações sobre seu Ponto ou Pontão de Cultura na base de dados do MinC.')
		};

		if ( typeof model == undefined ) {
			model = {};
		}

		model = _.extend(state, model);

		return m('.banner-com-titulo', { style : { 'background-color': model.color() } },
			m('.container', [
				m('p.section', [
					m('i' + model.icon()),
					m('span.name', model.section_name())
				]),
				m('h2.title', model.title()),
				m('h3.sub-title', model.sub_title())
			])
		);
	}
};

module.exports = BannerComTitulo;
