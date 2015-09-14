var m = require('mithril');

var ApiMapas = {

	get: function () {
        return m.request({
            method:'GET',
            data:{
                '@select': 'chave',
                'chave': 'like(*lucas*)'
            },
            url: '/api/agent/find'
        }).then(function(data) {
            console.log(data);
        });
	},

    update: function (id, data) {
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

module.exports = ApiMapas;
