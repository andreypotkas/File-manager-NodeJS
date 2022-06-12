import { rm } from 'fs/promises';
import path from 'path';

export async function remove() {
  const pathFileRemove = path.resolve(arguments[0], arguments[1]);
  try {
    await rm(pathFileRemove);
  } catch (err) {
    throw new Error('FS operation failed');
  }
}
