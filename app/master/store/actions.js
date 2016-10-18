const actionsList = [
  'CLOSE_DRAWER',
  'OPEN_DRAWER'
];

export default actionsList.reduce((actions, action) => {
  actions[action] = action;

  return actions;
}, {});
