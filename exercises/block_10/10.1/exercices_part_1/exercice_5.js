// Compare dois objetos (JSON) para verificar se são idênticos ou não

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

const objects = { obj1, obj2, obj3 };

module.exports = objects;
