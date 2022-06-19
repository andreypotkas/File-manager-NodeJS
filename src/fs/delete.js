import { rm } from 'fs/promises';
import path from 'path';

export async function remove() {
  let pathFileRemove = '';
  if (path.isAbsolute(arguments[1])) {
    pathFileRemove = arguments[1];
  } else {
    pathFileRemove = path.resolve(arguments[0], arguments[1]);
  }
  try {
    await rm(pathFileRemove);
  } catch (err) {
    console.log('Operation failed');
  }
}
