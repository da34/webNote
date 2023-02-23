export function throttle(f, time) {
  let timer = null;
  return (...args) => {
    if (timer) return;
    f.call(undefined, ...args);
    timer = setTimeout(() => {
      timer = null;
    }, time);
  };
}
const d = throttle(function (e) {
  console.log('点击', e);
}, 1000);
window.addEventListener('click', d);
