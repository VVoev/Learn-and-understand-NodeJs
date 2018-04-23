var configValues = require('./config');

module.exports = {
    getDbConnectingString: () => {
        return `mongodb://${configValues.uname}:${configValues.pwd}@ds255319.mlab.com:55319/nodetodosample`;
    }
}