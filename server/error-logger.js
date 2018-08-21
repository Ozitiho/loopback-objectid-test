'use strict';

module.exports = function(options) {
	return function logError(err, req, res, next) {
        console.log("Error logger called");
        next(err);
    }
}