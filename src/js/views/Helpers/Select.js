var m = require('mithril');
var _ = require('underscore');

var Input = {
	view: function (ctrl, args, extra) {
		var state = {
			label: 'Sem nome',
			name:  'sem-nome',
			id:    'sem-nome',
			options: []
		};
		args = _.extend(state, args);
		return m('.input.'+args.type, [
			m('label[for='+args.name+']', args.label),
			m('select[id='+args.id+'][name='+args.name+']',
				args.options.map(function (v, k) {
					return m('option', v);
				})
			)
		]);
	}
};

module.exports = Input;

