let title = draft.processTemplate("[[title]]");
let notes = draft.processTemplate("[[body]]");

let rem = ReminderList.default().createReminder();
rem.title = title;
rem.notes = `${notes}\n\ndrafts://x-callback-url/open?uuid=${draft.uuid}`;
let date = new Date();
date.setDate(date.getDate() + 1);
date.setHours(9, 0, 0);
rem.addAlarm(Alarm.alarmWithDate(date));
if (!rem.update()) context.fail();
