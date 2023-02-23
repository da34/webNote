export function debounce(f, time) {
  let timer = null;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      f.call(undefined, ...args);
      timer = null;
    }, time);
  };
}

const d = debounce(function (e) {
  console.log('点击', e);
}, 1000);
window.addEventListener('click', d);
