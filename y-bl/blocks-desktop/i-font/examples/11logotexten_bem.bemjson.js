({
    block: 'b-page',
    title: 'b-head-logo',
    head: [
        { elem: 'css', url: '_11logotexten_bem.css', ie: false },
        { elem: 'css', url: '_11logotexten_bem.ie6.css', ie: 'IE 6' },
        { elem: 'css', url: '_11logotexten_bem.ie7.css', ie: 'IE 7' },
        { elem: 'css', url: '_11logotexten_bem.ie8.css', ie: 'IE 8' },
        { elem: 'css', url: '_11logotexten_bem.ie9.css', ie: 'IE 9' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_11logotexten_bem.js' }
    ],
    content:[
        {
            block: 'b-head-logo',
            mods: { type: 'text' }
        },
        { block: 'b-head-logo', mods: { lang: 'en' } }
    ]
})
