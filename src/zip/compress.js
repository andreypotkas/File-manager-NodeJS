import * as fs from 'fs';
import path from 'path';
import { pipeline } from 'stream';
import { createBrotliCompress } from 'zlib';
import { logCurrentDir } from '../utils/index.js';

export async function compress() {
  try {
    let pathFileCompress = '';
    let pathToDest = '';
    if (path.isAbsolute(arguments[1])) {
      pathFileCompress = arguments[1];
    } else {
      pathFileCompress = path.resolve(arguments[0], arguments[1]);
    }

    if (path.isAbsolute(arguments[2])) {
      const fileNameParts = arguments[1].split('\\');
      const fileName = fileNameParts[fileNameParts.length - 1];
      pathToDest = `${path.resolve(arguments[2], fileName)}.br`;
    } else {
      const fileNameParts = arguments[1].split('/');
      const fileName = fileNameParts[fileNameParts.length - 1];
      pathToDest = `${path.resolve(arguments[0], arguments[2], fileName)}.br`;
    }
    const gzip = createBrotliCompress();
    const source = fs.createReadStream(pathFileCompress);
    const destination = fs.createWriteStream(pathToDest);
    source.on('error', (err) => {
      console.log('Operation failed');
      logCurrentDir();
    });
    destination.on('error', (err) => {
      console.log('Operation failed');
      logCurrentDir();
    });
    pipeline(source, gzip, destination, (err) => {
      if (err) {
        console.error('Operation failed');
        process.exitCode = 1;
      }
    });
    logCurrentDir();
  } catch (err) {
    console.log('Operation failed');
  }
}
