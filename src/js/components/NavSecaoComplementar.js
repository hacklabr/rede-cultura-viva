var m = require('mithril');
var NavItemSecaoComplementar = require('views/NavItemSecaoComplementar');
var NavSecaoComplementar = {
    controller: function (args, idx_active) {
        this.SecoesComplementares = args.SecoesComplementares;

        this.activate = function(key) {
            var that = this;
            this.SecoesComplementares.map(function(v, k) {
                that.SecoesComplementares[k].active(false);
            });
            idx_active(key);
            this.SecoesComplementares[key].active(true);
            return false;
        }
    },

    view: function(ctrl) {
        return m('.container', [
            m('ul.nav-secao-complementar',
                ctrl.SecoesComplementares.map(function(v, k) {
                    return m.component(NavItemSecaoComplementar, v, {
                        activate : ctrl.activate,
                        ctrl : ctrl
                    });
                })
            )
        ]);
    }
};

module.exports = NavSecaoComplementar;
