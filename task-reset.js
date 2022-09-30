// ---- Configuration ----------------------------------------------------------
let todo = '[ ]';
let done = '[x]';

// Fill this array with UUIDs of your daily tasks
let drafts = [];
// -----------------------------------------------------------------------------

let date = new Date();
date.setDate(date.getDate() - 1);
datestr = date.toLocaleString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
});

for (let uuid of drafts) {
    let task = Draft.find(uuid);

    let lines = task.lines;
    lines[0] = lines[0].replace(done, todo);
    let content_new = lines.join('\n');

    content_new += '\n' + (content_new == task.content ? todo : done) + ' ' + datestr;

    task.content = content_new;
    task.update();
}
