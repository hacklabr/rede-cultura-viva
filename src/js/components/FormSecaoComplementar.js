var m = require('mithril');

var FormSecaoComplementar = {

	controller: function (args, extra) {
		this.component = args.SecaoComplementar.form;
	},

	view: function (ctrl) {
		return m('.form-content', [
			m.component(ctrl.component)
		]);
	}
};

module.exports = FormSecaoComplementar;
