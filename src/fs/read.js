import path from 'path';
import { createReadStream } from 'fs';

export async function read() {
  const pathUrl = path.resolve(...arguments);
  let stream = createReadStream(pathUrl, { encoding: 'utf-8' });
  stream.on('data', (data) => {
    process.stdout.write(`${data}\n`);
  });
}
