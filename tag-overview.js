// ---- Configuration ----------------------------------------------------------

let tags = [];

// ---- Main -------------------------------------------------------------------

let data = {
    tags: tags.map(x => ({ name: x, content: Draft.query('', 'inbox', [ x ]).map(y => y.title)}))
}

let template = `<html>
    <head>
        <style>
            * {
                font-family: 'Monaco';
                font-size: 9pt;
            }
            table {
                width: 80%;
                margin-left: auto;
                margin-right: auto;
                margin-bottom: 1em;
            }
            td {
                border-bottom: 1px solid gray;
            }
            tr:nth-child(2) td {
                border-top: 1px solid gray;
            }
        </style>
    </head>
    <body>
        {{#tags}}
        <table>
            <tr><th>{{name}}</th></tr>
            {{#content}}
            <tr><td>{{.}}</td></tr>
            {{/content}}
        </table>
        {{/tags}}
    </body>
</html>`;

HTMLPreview.create().show(MustacheTemplate.createWithTemplate(template).render(data));
