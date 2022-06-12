import * as fs from 'fs';
import path from 'path';
import { pipeline } from 'stream';
import { createBrotliCompress } from 'zlib';

export async function compress() {
  const readFile = path.resolve(arguments[0], arguments[1]);
  const gZipFile = path.resolve(
    arguments[0],
    arguments[2],
    `${arguments[1]}.br`
  );
  const gzip = createBrotliCompress();
  const source = fs.createReadStream(readFile);
  const destination = fs.createWriteStream(gZipFile);
  pipeline(source, gzip, destination, (err) => {
    if (err) {
      console.error('An error occurred:', err);
      process.exitCode = 1;
    }
  });
}
