const _ = require('lodash')

module.exports = {
  generatePlaceholders (componentName) {
    return {
      name: _.replace(_.startCase(componentName), ' ', ''),
      rootClass: _.kebabCase(componentName)
    }
  }
}
