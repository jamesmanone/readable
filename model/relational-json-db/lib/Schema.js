const shortid = require('shortid');

class Schema {
  constructor(data) {
    this.id = data.id || shortid.generate();
    this.createdAt = data.createdAt || Date.now();
    this.injectModel = this.injectModel.bind(this);
    this.save = this.save.bind(this);
    this.remove = this.remove.bind(this);
    this.toJSON = this.toJSON.bind(this);
  }

  injectModel(model) {
    this.model = model;
  }

  populate(key) {
    const field = this[key];
    const isArray = Array.isArray(field);
    if(!field || (isArray && !field.length)) return this;
    const targetModel = isArray ? field[0].model : field.model;
    const model = this.model.DB.getOne(targetModel);
    if(isArray) {
      this[key] = this[key].map(doc => model.findByIdSync(doc.id))
    } else {
      this[key] = model.findByIdSync(field.id)
    }
    return this;
  }

  save() {
    return this.model.save(this);
  }

  remove() {
    return this.model.remove(this);
  }

  toJSON() {
    let json = Object.assign({}, this);
    delete json.model;
    for(let prop in json) {
      if(typeof json[prop] === 'function') delete json.prop;
    }
    return json;
  }

}

module.exports = Schema;
