var m = require('mithril');
var _ = require('underscore');

var BannerComTitulo = {
	view: function(ctrl, args) {
		var state = {
			style        : {'background-color':'#008E7D'},
			icon         :'.icon-bell',
			section_name : 'dados do responsável',
			title        : 'você já possui um cnpj?',
			sub_title    : 'Responda e verificaremos se já temos informações sobre seu Ponto ou Pontão de Cultura na base de dados do MinC.'
		};

		if ( typeof args == undefined ) {
			args = {};
		}

		args = _.extend(state, args);

		return m('.banner-com-titulo', {style: args.style},
			m('.container', [
				m('p.section', [
					m('i' + args.icon),
					m('span.name', args.section_name)
				]),
				m('h2.title', args.title),
				m('h3.sub-title', args.sub_title)
			])
		);
	}
};

module.exports = BannerComTitulo;
