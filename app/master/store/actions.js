const actionsList = [
  'CLOSE_DRAWER',
  'HIDE_PROGRESS',
  'OPEN_DRAWER',
  'SHOW_PROGRESS'
];

export default actionsList.reduce((actions, action) => {
  actions[action] = action;

  return actions;
}, {});
