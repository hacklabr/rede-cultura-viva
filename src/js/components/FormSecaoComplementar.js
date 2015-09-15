var m = require('mithril');

var FormSecaoComplementar = {

	// controller: function (args, extra) {
	// 	console.log(args, extra());
	// 	this.component = m.prop(args.form);
	// },

	view: function (ctrl, args) {
		return m('.form-content', [
			m.component(args.form)
		]);
	}
};

module.exports = FormSecaoComplementar;
