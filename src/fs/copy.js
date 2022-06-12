import path from 'path';
import { copyFile } from 'fs/promises';

export async function copy() {
  const pathFileCopy = path.resolve(arguments[0], arguments[1]);
  const pathToCopyFolder = path.resolve(
    arguments[0],
    arguments[2],
    arguments[1]
  );
  try {
    copyFile(`${pathFileCopy}`, `${pathToCopyFolder}`);
  } catch (err) {
    throw new Error('FS operation failed');
  }
}
