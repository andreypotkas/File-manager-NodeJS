import path from 'path';
import { copyFile } from 'fs/promises';

export async function copy() {
  try {
    let pathFileCopy = '';
    let pathToCopyFolder = '';
    if (path.isAbsolute(arguments[1])) {
      pathFileCopy = arguments[1];
    } else {
      pathFileCopy = path.resolve(arguments[0], arguments[1]);
    }

    if (path.isAbsolute(arguments[2])) {
      const fileNameParts = arguments[1].split('\\');
      const fileName = fileNameParts[fileNameParts.length - 1];
      pathToCopyFolder = path.resolve(arguments[2], fileName);
    } else {
      const fileNameParts = arguments[1].split('/');
      const fileName = fileNameParts[fileNameParts.length - 1];
      pathToCopyFolder = path.resolve(arguments[0], arguments[2], fileName);
    }
    await copyFile(`${pathFileCopy}`, `${pathToCopyFolder}`);
  } catch (err) {
    console.log('Operation failed');
  }
}
