// ---- Configuration ----------------------------------------------------------

let tags = [];

// ---- Main -------------------------------------------------------------------

let data = {
    tags: tags.map(x => ({ name: x, content: Draft.query('', 'inbox', [ x ]).map(y => y.title)}))
}

let template = `{{#tags}}
<h2>{{name}}</h2>

<ul>
    {{#content}}
    <li>{{.}}</li>
    {{/content}}
</ul>
{{/tags}}
`;

HTMLPreview.create().show(MustacheTemplate.createWithTemplate(template).render(data));
