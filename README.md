# Loopback datatype objectId test

This is a loopback Note project as created with the loopacbk CLI with the `loopback-datatype-objectId` module loaded. The purpose of this project is to show that loading the `loopback-datatype-objectId` module causes the middleware final step to be ignored.

## Issue description

In the `server/middleware.json` file, the `final` step is configured to call the `error-logger.js` function every time an error occurs. Additionaly, in the `server/middleware-development.json` file, `strong-error-handler` is configured to not log an error and return the entire error to the client. Currently, this does not happen. Instead, `error-logger` is not called, the error is logged and returned in a truncated form to the client. (Incidentally, this is the default loopback behavior) Commenting out the require for `loopback-datatype-objectId` in `server/server.js` will fix this and cause the error catching to occur as configured.

## Steps to replicate

1. Run the loopback server with the console command `node .`
2. A custom remote method is configured at "http://localhost:3000/api/Notes/test". Executing this call will return a 500 error. The error will be logged in the console and returned in truncated form
3. Comment out line 8 in `server/server.js`
4. Execute the remote method again, this time the error will not be logged and return in full, as configured.
