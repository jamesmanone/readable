const { Category } = require('../model');

const defaultData = [
  {id: 'mwofm40sl', name: 'React'},
  {id: 'kd92kdmcj', name: 'Redux'},
  {id: 'kdoej20dn', name: 'Udacity'}
]


const getAll = () => {
  return Category.find().exec()
}

const newCategory = category => {
  return Category.create(category, true);
}

module.exports = {
  getAll,
  newCategory,
  defaultData
}
