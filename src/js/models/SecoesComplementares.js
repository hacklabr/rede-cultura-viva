var m = require('mithril');
var SecaoComplementar = require('models/SecaoComplementar');

var SecoesComplementares = [
	new SecaoComplementar({
        key          : 0,
		name         : 'info-responsavel',
		color        : '#8CC63F',
		icon         : '.icon-user',
		section_name : 'informações do responsável',
		title        : 'você já possui um cnpj?',
		sub_title    : 'Responda e verificaremos se já temos informações sobre seu Ponto ou Pontão de Cultura na base de dados do MinC.',
		form         : {},
        active       : true
	}),
	new SecaoComplementar({
        key          : 1,
		name         : 'seu-ponto',
		color        : '#D82E5F',
		icon         : '.icon-vcard',
		section_name : 'seu ponto no mapa',
		title        : 'você tem espaço físico?',
		sub_title    : 'Informe seu endereço',
		form         : {}
	}),
	new SecaoComplementar({
        key          : 2,
		name         : 'portfolio',
		color        : '#F7931E',
		icon         : '.icon-picture',
		section_name : 'portfólio',
		title        : 'você já criou eventos?',
		sub_title    : 'Coloque seu portfolio',
		form         : {}
	})
];
// i.icon-book-open
// i.icon-mail-read
// i.icon-pencil
// i.icon-publish

module.exports = SecoesComplementares;
