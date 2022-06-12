import * as crypto from 'crypto';
import { createReadStream } from 'fs';
import path from 'path';
import { logCurrentDir } from '../utils/index.js';

export async function hash() {
  const pathUrl = path.resolve(arguments[0], arguments[1]);
  try {
    let stream = createReadStream(pathUrl, { encoding: 'utf-8' });
    return stream.on('data', (data) => {
      process.stdout.write(
        `${crypto.createHash('sha256').update(data).digest('hex')}\n`
      );
      logCurrentDir();
    });
  } catch (err) {
    throw err;
  }
}
