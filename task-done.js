// ---- Configuration ----------------------------------------------------------

let todo = '[ ]';
let done = '[x]';

// ---- Main -------------------------------------------------------------------

draft.content = [draft.lines[0].replace(todo, done), ...draft.lines.slice(1)].join('\n');
draft.update();
