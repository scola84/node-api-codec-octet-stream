const type = 'application/octet-stream';

import {
  default as Decoder,
  default as Encoder
} from './src/transformer';

export const codec = {
  Decoder,
  Encoder
};

export function decoder() {
  return {
    type,
    create: () => new Decoder()
  };
}

export function encoder() {
  return {
    type,
    create: () => new Encoder()
  };
}
