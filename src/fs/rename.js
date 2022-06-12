import path from 'path';
import { rename as renameFile } from 'fs/promises';

export async function rename() {
  const pathFileRename = path.resolve(arguments[0], arguments[1]);
  const newPathFileName = path.resolve(arguments[0], arguments[2]);
  try {
    renameFile(pathFileRename, newPathFileName);
  } catch (err) {
    throw new Error('FS operation failed');
  }
}
