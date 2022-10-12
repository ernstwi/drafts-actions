# drafts-actions

## Daily tasks

- `task-done.js`
- `task-reset.js`

These actions are used for daily reminders. For each task, create a draft tagged `daily-task` on the following format:

```
[ ] <Title of task>

<Any other text over multiple lines>

[ ] mon 26/09/22
[x] tue 27/09/22
[x] wed 28/09/22
[ ] thu 29/09/22
```

The last paragraph is a record of past days. `[ ]` and `[x]` are used here for todo/done, this may be changed in the configuration section of each action. `task-done` is used to mark a particular task as completed. `task-reset` must be run every day to reset the tasks and log the previous day's result.

## Tag overview

- `tag-overview.js`

List drafts grouped by tags, for a given set of tags.

## New draft from matching lines

- `new-draft-from-matching-lines.js`

Create a new draft by filtering all lines in the current draft by regular expression.
