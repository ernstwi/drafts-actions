let lines = draft.lines.filter(x => x !== "");

let tags = [];
if (draft.title.startsWith('tag ')) {
    tags = draft.title.slice(4).split(',').map(x => x.trim());
    lines = lines.slice(1);
}

let items = [];
for (let line of lines) {
    if (!line.startsWith('> ')) {
        items.push([line]);
        continue;
    }
    line = line.slice(2);
    items[items.length - 1].push(line);
}

for (let item of items) {
    let d = new Draft();
    for (let tag of tags)
        d.addTag(tag);
    d.content = item.join('\n');
    d.update();
}
