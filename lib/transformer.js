const stream = require('stream');

class OctetStream extends stream.Transform {
  _transform(data, encoding, callback) {
    this.push(data);
    callback();
  }
}

module.exports = OctetStream;
