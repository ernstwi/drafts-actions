(() => {
    let p = new Prompt();
    p.title = 'Filter lines';
    p.addButton('OK', {}, true);
    p.addTextField('regex', 'Regular expression', '', { 'wantsFocus': true });
    let cancel = !p.show();
    if (cancel) {
        return;
    }
    let regex = p.fieldValues['regex'];

    let set = new Set();

    for (let line of draft.lines) {
        if (new RegExp(regex).test(line)) {
            set.add(line);
        }
    }

    let res = new Draft();
    res.content = [...set].sort().join('\n');
    res.update();
    editor.load(res);
})();
