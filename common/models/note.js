module.exports = function(Note) {
    Note.test = () => {
        throw new Error("mad bad error");
    }

    Note.remoteMethod(
		'test', {
			http: {
				path: '/test',
				verb: 'GET'
			},
			description: 'Causes 500 error',
			returns: {
				arg: 'object',
				type: 'object',
				root: true
			}
		}
	);
};
