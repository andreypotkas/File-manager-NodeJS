import path from 'path';
import { createReadStream } from 'fs';
import { logCurrentDir } from '../utils/index.js';

export async function read() {
  try {
    let pathUrl = '';
    if (path.isAbsolute(arguments[1])) {
      pathUrl = arguments[1];
    } else {
      pathUrl = path.resolve(...arguments);
    }
    let stream = createReadStream(pathUrl, { encoding: 'utf-8' });
    stream.on('data', (data) => {
      process.stdout.write(`${data}\n`);
      logCurrentDir();
    });
    stream.on('error', (err) => {
      console.log('Operation failed');
      logCurrentDir();
    });
  } catch (err) {
    console.log('Operation failed');
  }
}
