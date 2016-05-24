const Decoder = require('./lib/transformer');
const Encoder = require('./lib/transformer');
const type = 'application/octet-stream';

function decoder(options) {
  return {
    type,
    create: () => new Decoder(options)
  };
}

function encoder(options) {
  return {
    type,
    create: () => new Encoder(options)
  };
}

module.exports = {
  type,
  decoder,
  encoder,
  Decoder,
  Encoder
};
