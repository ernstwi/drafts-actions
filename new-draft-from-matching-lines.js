(() => {
    let p = new Prompt();
    p.title = 'Filter lines';
    p.addButton('OK', {}, true);
    p.addTextField('regex', 'Regular expression', '', { 'wantsFocus': true });
    p.addSwitch('sort', 'Sort matches', false);

    let cancel = !p.show();
    if (cancel) {
        return;
    }
    let regex = p.fieldValues['regex'];
    let sort = p.fieldValues['sort'];

    let set = new Set();

    for (let line of draft.lines) {
        if (new RegExp(regex).test(line)) {
            set.add(line);
        }
    }

    let res = [...set];
    if (sort)
        res.sort();

    let d = new Draft();
    d.content = res.join('\n');
    d.update();
    editor.load(d);
})();
