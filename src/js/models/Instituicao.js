var m = require('mithril');
var ApiMapas = require('api');
var ids = CulturaViva.ids;

var Instituicao = {
	getCnpj: function() {
		return m.request({});
	}
};

module.exports = Instituicao;
