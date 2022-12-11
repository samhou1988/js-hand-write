function create(o) {
  function F() { };
  F.prototype = o;
  return new F();
}

module.exports.create = create;
