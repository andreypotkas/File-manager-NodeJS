import * as fs from 'fs';
import { createBrotliDecompress } from 'zlib';
import { pipeline } from 'stream';
import { logCurrentDir } from '../utils/index.js';
import path from 'path';

export async function decompress() {
  try {
    let pathFileDecompress = '';
    let pathToDest = '';
    if (path.isAbsolute(arguments[1])) {
      pathFileDecompress = arguments[1];
    } else {
      pathFileDecompress = path.resolve(arguments[0], arguments[1]);
    }
    if (path.isAbsolute(arguments[2])) {
      const fileNameParts = arguments[1].split('\\');
      const fileName = fileNameParts[fileNameParts.length - 1];
      pathToDest = `${path.resolve(
        arguments[2],
        fileName.slice(0, fileName.length - 3)
      )}`;
    } else {
      const fileNameParts = arguments[1].split('/');
      const fileName = fileNameParts[fileNameParts.length - 1];
      pathToDest = `${path.resolve(
        arguments[0],
        arguments[2],
        fileName.slice(0, fileName.length - 3)
      )}`;
    }

    const gzip = createBrotliDecompress();
    const source = fs.createReadStream(pathFileDecompress);
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
  } catch (err) {
    console.log('Operation failed');
  }
}
