var m = require('mithril');
var _ = require('underscore');
var SecaoComplementar = function(data) {
	var state = {
		key          : 0,
		active       : false,
		color        : '#008E7D',
		icon         : '.icon-bell',
		section_name : 'dados do responsável',
		title        : '',
		sub_title    : ''
	};

	if ( typeof data == undefined ) {
		data = {};
	}

	data = _.extend(state, data);
	return {
		color        : m.prop(data.color),
		key          : m.prop(data.key),
		active       : m.prop(data.active),
		icon         : m.prop(data.icon),
		section_name : m.prop(data.section_name),
		title        : m.prop(data.title),
		sub_title    : m.prop(data.sub_title),
		form         : m.prop(data.form)
	}
};

module.exports = SecaoComplementar;
