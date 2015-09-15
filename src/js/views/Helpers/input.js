var m = require('mithril');
var _ = require('underscore');

var Input = {
	view: function (ctrl, args, extra) {
		var state = {
			label: 'Sem nome',
			name:  'sem-nome',
			id:    'sem-nome',
			type:  'text'
		};
		args = _.extend(state, args);
		return m('.input.'+args.type, [
			m('label[for='+args.name+']', args.label),
			m('input[type='+args.type+'][id='+args.id+'][name='+args.name+']', args)
		]);
	}
};

module.exports = Input;
