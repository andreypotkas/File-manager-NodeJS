import path from 'path';
import { rename as renameFile } from 'fs/promises';

export async function rename() {
  let pathFileRename = '';
  let newPathFileName = '';
  if (path.isAbsolute(arguments[1])) {
    pathFileRename = arguments[1];
    const pathToFileParts = arguments[1].split('\\');
    const pathToFile = pathToFileParts
      .slice(0, pathToFileParts.length - 1)
      .join('\\');
    newPathFileName = path.resolve(pathToFile, arguments[2]);
  } else {
    const fileNameParts = arguments[1].split('/');
    const pathToFile = fileNameParts
      .slice(0, fileNameParts.length - 1)
      .join('');
    pathFileRename = path.resolve(arguments[0], arguments[1]);
    newPathFileName = path.resolve(arguments[0], pathToFile, arguments[2]);
  }

  try {
    await renameFile(pathFileRename, newPathFileName);
  } catch (err) {
    console.log('Operation failed');
  }
}
