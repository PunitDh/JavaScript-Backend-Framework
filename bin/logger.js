const STATUS_CODES = {
    200: 'OK',
    201: 'Created',
    202: 'Accepted',
    204: 'No Content',
    400: 'Bad Request',
    401: 'Unauthorized',
    403: 'Forbidden',
    404: 'Not Found',
    405: 'Method Not Allowed',
    500: 'Internal Server Error'
}

function log(status_code) {
  console.log(`Completed ${status_code} ${STATUS_CODES[status_code]} at ${(new Date()).toLocaleString('en-AU')}`);
}

module.exports = { log }