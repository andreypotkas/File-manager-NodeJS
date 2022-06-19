import * as crypto from 'crypto';
import { createReadStream } from 'fs';
import path from 'path';
import { logCurrentDir } from '../utils/index.js';

export async function hash() {
  try {
    let pathUrl = '';
    if (path.isAbsolute(arguments[1])) {
      pathUrl = arguments[1];
    } else {
      pathUrl = path.resolve(...arguments);
    }
    let stream = createReadStream(pathUrl, { encoding: 'utf-8' });
    stream.on('error', (err) => {
      console.log('Operation failed');
      logCurrentDir();
    });
    return stream.on('data', (data) => {
      process.stdout.write(
        `${crypto.createHash('sha256').update(data).digest('hex')}\n`
      );
      logCurrentDir();
    });
  } catch (err) {
    console.log('Operation failed');
  }
}
