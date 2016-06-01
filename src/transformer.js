import { Transform } from 'stream';

export default class OctetStream extends Transform {
  _transform(data, encoding, callback) {
    this.push(data);
    callback();
  }
}
