var m = require('mithril');

var NavItemSecaoComplementar = {
    view: function(ctrl, model, args) {
        return m('li.nav-item', (model.active() ? {style:{'background-color':model.color()}} : {}), [
                m('i.' + model.icon(),  (model.active() ? {} : { style : { color : model.color() } }) ),
                m('a.section-name[href=#]', {
                        style : (model.active() ? {} : { color:model.color() }),
                        onclick : args.activate.bind(args.ctrl, model.key())
                }, model.section_name() ),
                m('.set-size',
                    m('.pie-wrapper.progress-30.style-2', [
                        m('span.label 95',
                            m('span.smaller %')
                        ),
                        m('.pie', [
                            m('.left-side.half-circle'),
                            m('.right-side.half-circle')
                        ]),
                        m('.shadow')
                    ])
                )
            ]);
    }
};

module.exports = NavItemSecaoComplementar;
