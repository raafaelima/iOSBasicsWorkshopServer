var crypto = require('crypto');

module.exports = {
	/** Recommend that you leave these configuration settings **/
	SESSION_SECRET_KEYS: [
        crypto.randomBytes(32).toString('hex'), crypto.randomBytes(32).toString('hex'),
        crypto.randomBytes(32).toString('hex'), crypto.randomBytes(32).toString('hex')
    ],
}
