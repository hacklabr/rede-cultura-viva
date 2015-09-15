var m                     = require('mithril');

var SecaoComplementar     = require('models/SecaoComplementar');
var SecaoInfoResponsavel  = require('components/Form/SecaoInfoResponsavel');
var SecaoDadosEntidade    = require('components/Form/SecaoDadosEntidade');
var SecaoPontoMapa        = require('components/Form/SecaoPontoMapa');
var SecaoPortfolio        = require('components/Form/SecaoPortfolio');
var SecaoContatoEntidade  = require('components/Form/SecaoContatoEntidade');
var SecaoFaleMais         = require('components/Form/SecaoFaleMais');
var SecaoValidar          = require('components/Form/SecaoValidar');

var SecoesComplementares = [
	new SecaoComplementar({
		key			 : 0,
		name		 : 'info-responsavel',
		color		 : '#8CC63F',
		icon		 : '.icon-user',
		section_name : 'informações do responsável',
		title		 : 'você já possui um cpf?',
		sub_title	 : 'Responda e verificaremos se já temos informações sobre seu Ponto ou Pontão de Cultura na base de dados do MinC.',
		form		 : SecaoInfoResponsavel,
		active		 : true
	}),
	new SecaoComplementar({
		key			 : 1,
		name		 : 'entidade',
		color		 : '#D82E5F',
		icon		 : '.icon-vcard',
		section_name : 'dados da entidade',
		title		 : 'qual seu cnpj?',
		sub_title	 : 'Informe os dados da instituição',
		form		 : SecaoDadosEntidade
	}),
	new SecaoComplementar({
		key			 : 2,
		name		 : 'seu-ponto',
		color		 : '#F7931E',
		icon		 : '.icon-location',
		section_name : 'seu ponto no mapa',
		title		 : 'você tem espaço físico?',
		sub_title	 : 'Informe seu endereço',
		form		 : SecaoPontoMapa
	}),
	new SecaoComplementar({
		key			 : 3,
		name		 : 'portfolio',
		color		 : '#F7C908',
		icon		 : '.icon-picture',
		section_name : 'portfólio',
		title		 : 'você já criou eventos?',
		sub_title	 : 'Coloque seu portfolio',
		form		 : SecaoPortfolio
	}),
	new SecaoComplementar({
		key			 : 4,
		name		 : 'contato-entidade',
		color		 : '#D82E5F',
		icon		 : '.icon-phone',
		section_name : 'contato da entidade',
		title		 : 'qual seu telefone?',
		sub_title	 : 'Informe como entrar em contato com a instituição',
		form		 : SecaoContatoEntidade
	}),
	new SecaoComplementar({
		key			 : 5,
		name		 : 'fale-mais',
		color		 : '#7B4AAF',
		icon		 : '.icon-chat',
		section_name : 'fale mais sobre seu ponto',
		title		 : 'qual seu telefone?',
		sub_title	 : 'Informe como entrar em contato com a instituição',
		form		 : SecaoFaleMais
	}),
	new SecaoComplementar({
		key			 : 6,
		name		 : 'validar',
		color		 : '#075579',
		icon		 : '.icon-publish',
		section_name : 'validar',
		title		 : 'revise os campos preenchidos',
		sub_title	 : 'Salvando os dados',
		form		 : SecaoValidar
	})
];

module.exports = SecoesComplementares;
