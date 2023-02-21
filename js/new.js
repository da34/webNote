function A(id, name) {
  this.id = id;
  this.name = name;
}

A.prototype.eat = () => {
  console.log('eat...');
};

const a1 = new A(1, '美国大兵');
const a2 = new A(2, '美国大兵');

console.log(a1);
a1.eat();

console.log(a2);
a2.eat();

function _new(originObj, ...params) {
  const temp = Object.create(originObj.prototype);
  const result = originObj.apply(temp, params);
  return typeof result === 'object' ? result : temp;
}

const b1 = _new(A, 3, '美国大兵');

console.log(b1);
b1.eat();
