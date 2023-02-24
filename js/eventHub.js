export const eventHub = {
  tasks: {},
  on: (key, f) => {
    eventHub.tasks[key] = eventHub.tasks[key] || [];
    eventHub.tasks[key].push(f);
  },
  emit: (key, data) => {
    const q = eventHub.tasks[key];
    if (!q) return;
    q.map((f) => f.call(null, data));
  },
  off: (key, f) => {
    const q = eventHub.tasks[key];
    if (!q) return;
    const index = q.indexOf(f);
    if (index === -1) return;
    q.splice(index, 1);
  },
};

const f1 = (data) => {
  console.log('f1 eat...', data);
};

const f2 = (data) => {
  console.log('f2 eat...', data);
};
eventHub.on('eat', f1);
eventHub.on('eat', f2);

setTimeout(() => {
  eventHub.emit('eat', { name: 'eat' });
  eventHub.off('eat', f2);
}, 3000);

setTimeout(() => {
  eventHub.emit('eat', { name: 'eat2' });
}, 5000);
