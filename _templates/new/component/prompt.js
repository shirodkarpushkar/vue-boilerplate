const _ = require('lodash')

module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'Name:',
    validate(value) {
      if (!value.length) {
        return 'Components must have a name.'
      }
      const fileName = _.kebabCase(value)
      if (fileName.indexOf('-') === -1) {
        return 'Component names should contain at least two words to avoid conflicts with existing and future HTML elements.'
      }
      return true
    },
  },
]
