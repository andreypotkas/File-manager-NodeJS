import * as fs from 'fs/promises';
import path from 'path';

export async function create() {
  const pathUrl = path.resolve(...arguments);
  try {
    await fs.writeFile(pathUrl, '', { flag: 'wx' });
  } catch (err) {
    console.log('Operation failed');
  }
}
