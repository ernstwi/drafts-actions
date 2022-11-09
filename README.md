# drafts-actions

## Daily tasks

- `task-done.js`
- `task-reset.js`

These actions are used for daily reminders. For each task, create a draft tagged `daily-task` on the following format (including whitespace):

```
[ ] <Title of task> // <Optional comment>

<Any other text over multiple lines>

---

[ ] thu 29/09/22
[x] wed 28/09/22 // Comment
[x] tue 27/09/22
[ ] mon 26/09/22
```

The last paragraph is a record of past days. `[ ]` and `[x]` are used here for todo/done, this may be changed in the configuration section of each action. `task-done` is used to mark a particular task as completed. `task-reset` must be run every day to reset the tasks and log the previous day's result.

## Tag overview

- `tag-overview.js`

List drafts grouped by tags, for a given set of tags.

## New draft from matching lines

- `new-draft-from-matching-lines.js`

Create a new draft by filtering all lines in the current draft by regular expression.

## Remind me tomorrow

- `remind-me-tomorrow.js`

Create a reminder from the current draft with an alarm at 09:00 tomorrow.

## Quick drafts

- `quick-drafts.js`

Create a set of drafts using the current draft as input. Syntax is optimized for creating multiple tagged drafts quickly. Tag line is optional.

Example:

```
                                          Output
                                 ┌────────────────────────┐
          Input                  │ orange                 │
┌─────────────────────────┐      └────────────────────────┘
│ tag food, fruits        │      ┌────────────────────────┐
│                         │      │ pear                   │
│ orange                  │      └────────────────────────┘
│ pear                    │ ───► ┌────────────────────────┐
│ apple                   │      │ apple                  │
│ > some text             │      │ some text              │
│ > across multiple lines │      │ across multiple lines  │
│ banana                  │      └────────────────────────┘
└─────────────────────────┘      ┌────────────────────────┐
                                 │ banana                 │
                                 └────────────────────────┘
```

EBNF:

```
input             = [tag line, [ "\n" ]], item, { item } ;

tag line          = "tag", " ", tag name, { ",", [ " " ], tag name }, EOL ;
tag name          = visible character, [ { any character }, visible character ] ;

item              = line, { body line } ;
body line         = ">", " ", line ;
line              = { any character - "\n" }, EOL ;

EOL               = ( "\n" | ? EOF ? ) ;
any character     = ? any character ? ;
visible character = ? any non whitespace character ? ;
```
