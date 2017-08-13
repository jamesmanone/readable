const { Model, Schema } = require('./relational-json-db');

class CategorySchema extends Schema {
  constructor(data) {
    super(data);
    this.name = data.name;
  }
}

const Category = module.exports = new Model('Category', CategorySchema);
