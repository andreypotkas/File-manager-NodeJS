import * as fs from 'fs';
import { createBrotliDecompress } from 'zlib';
import { pipeline } from 'stream';

export async function decompress() {
  const unzipFile = path.resolve(arguments[0], arguments[1]);
  const writeFile = path.resolve(arguments[0], arguments[2]);
  const gzip = createBrotliDecompress();
  const source = fs.createReadStream(unzipFile);
  const destination = fs.createWriteStream(writeFile);

  pipeline(source, gzip, destination, (err) => {
    if (err) {
      console.error('An error occurred:', err);
      process.exitCode = 1;
    }
  });
}
