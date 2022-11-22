const util = require('util');
const crypt = require('crypto');

export const randomBytes = util.promisify(crypt.randomBytes);


