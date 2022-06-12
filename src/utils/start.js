import { logCurrentDir } from './currentDir.js';
import { getUserName } from './login.js';
import os from 'os';

export function start() {
  const userName = getUserName();
  process.stdout.write(`Welcome to the File Manager, ${userName}!\n`);
  process.chdir(os.homedir());
  process.stdout.write('Print commands and wait for results: \n');
  logCurrentDir();
  return userName;
}
