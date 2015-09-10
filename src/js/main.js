var m = require('mithril');

var Responsavel = function (data) {
    this.nome = m.prop(data.nome || '');
    this.rg = m.prop(data.rg);
    this.orgao_expeditor = m.prop(data.orgao_expeditor);
    this.relacao = m.prop(data.relacao); // responsavel - trabalhador - parceiro
    this.cpf = m.prop(data.cpf);
    this.estado = m.prop(data.estado);
    this.email = m.prop(data.email);
    this.telefone = m.prop(data.telefone);
    this.operadora = m.prop(data.operadora);

    this.foto = m.prop(data.foto);
    this.ser_chamado = m.prop(data.ser_chamado);
    this.cidade = m.prop(data.cidade);
    this.perfil_facebook = m.prop(data.perfil_facebook);
    this.perfil_twitter = m.prop(data.perfil_twitter);
    this.perfil_gplus = m.prop(data.perfil_gplus);
}

var Sections = function() {
    this.Responsavel = m.prop({
        title: 'Informações do responsável',
        subtitle: 'Precisamos saber quem é você e pegar seus contatos! Afinal, comunicação é um requisito vital para que nossa rede se mantenha viva!',
        icon: 'user',
        slug: 'info-responsavel',
    });
    this.Entidade = m.prop({
        title: 'Dados da entidade',
        subtitle: 'Precisamos saber quem é você e pegar seus contatos! Afinal, comunicação é um requisito vital para que nossa rede se mantenha viva!',
        icon: 'user',
        slug: 'info-responsavel',
    });
    // return m.request({method: "GET", url: "pages.json"});
};








var Agent = {
    updateInfra: function (id, data) {
        // var data = new FormData();
        // data.append('longDescription', 'testes long');
        // data.append('shortDescription', 'testes short');
        // data.append('location', [0, 0]);
        // data.append('endereco', 'testes e');
        // data.append('terms', {area: ['Arqueologia']});
        var xhrConfig = function(xhr) {
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.setRequestHeader("X_REQUESTED_WITH", "XMLHttpRequest");
        }

        return m.request({
            url:'/agent/single/' + id, 
            method: 'PATCH',
            data: { 'chave': data },
            config: xhrConfig,
            serialize: function (data) { return "chave=lucas,testes";
                m.route.buildQueryString(data);
            }
        });
    }
};

var List = {
    controller: function () {
		console.log('nesse momento vamos montar a verificação da existência do cnpj 2222');
    },

    view: function (ctrl) {
        return m('ul', [
            m('li')
        ]);
    }
};

var Edit = {
    //controller
    controller: function() {
        // var pages = Page.list();
        // var ids = CulturaViva.ids;
        // var agent = Agent.update(ids.agente_individual).then(function (data) {
        //  console.log(data);
        // });
        var infraOptions = m.prop([
            'Acesso à internet',
            'Sala de aula',
            'Auditório',
            'Teatro',
            'Estúdio',
            'Palco',
            'Galpão',
            'Hackerspace',
            'Casa',
            'Apartamento',
            'Cozinha',
            'Garagem',
            'Jardim',
            'Bar',
            'Laboratório',
            'Gráfica',
            'Loja'
        ]);

        var dataToSave = m.prop([]);

        m.request({
            method:'GET',
            data:{
                '@select': 'chave',
                'chave': 'like(*lucas*)'
            },
            url: '/api/agent/find'
        }).then(function(data) {
            console.log(data);
        });
        return {
            dataToSave: dataToSave,
            infraOptions: infraOptions,
            addToSave: function () {
                dataToSave().push(this.value);
            },
            save: function(ctrl) {
                Agent.updateInfra(10,ctrl.dataToSave());
            }
        }
    },


    //view
    view: function(ctrl) {
        return m("ul", [
            ctrl.infraOptions().map(function(value) {
                return [
                    m('li', [
                        m('input[type=checkbox][name=infraestrutura][value='+value+']', {onclick: ctrl.addToSave}),
                        m('label', value)
                    ])
                ];
            }),
            m("button", {onclick: ctrl.save.bind(this, ctrl)}, "Salvar")
        ]);
    }
};


//initialize

//setup routes to start w/ the `#` symbol
m.route.mode = "hash";
var wizard = document.getElementById("wizard");
if (wizard) {
	//define a route
	m.route(wizard, "/", {
		"/": List,
		"/ponto_cultura": Edit
	});
}
