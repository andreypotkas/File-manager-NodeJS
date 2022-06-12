import { start, rl, logCurrentDir, getCommandArgs } from '../utils/index.js';
import path from 'path';
import { create, list, read, rename, copy, remove } from '../fs/index.js';

start();
rl.on('line', async (cmd) => {
  const commandArgs = getCommandArgs(cmd);
  switch (commandArgs.cmd) {
    case '.exit': {
      process.stdout.write(`Thank you for using File Manager, ${userName}`);
      process.exit();
    }
    case 'cd': {
      try {
        process.chdir(`${commandArgs.arg}`);
      } catch (err) {
        console.error(`chdir: ${err}`);
      }
      logCurrentDir();
      break;
    }
    case 'up': {
      try {
        process.chdir(`${path.join(process.cwd(), '..')}`);
      } catch (err) {
        console.error(`chdir: ${err}`);
      }
      logCurrentDir();
      break;
    }
    case 'list': {
      await list(process.cwd());
      logCurrentDir();
      break;
    }
    case 'cat': {
      await read(process.cwd(), commandArgs.arg);
      logCurrentDir();
      break;
    }
    case 'add': {
      await create(process.cwd(), commandArgs.arg);
      logCurrentDir();
      break;
    }
    case 'rn': {
      await rename(process.cwd(), commandArgs.arg, commandArgs.arg1);
      logCurrentDir();
      break;
    }
    case 'cp': {
      await copy(process.cwd(), commandArgs.arg, commandArgs.arg1);
      logCurrentDir();
      break;
    }
    case 'mv': {
      await copy(process.cwd(), commandArgs.arg, commandArgs.arg1);
      await remove(process.cwd(), commandArgs.arg, commandArgs.arg1);
      logCurrentDir();
      break;
    }
    case 'rm': {
      await remove(process.cwd(), commandArgs.arg);
      logCurrentDir();
      break;
    }
    default: {
      process.stdout.write('Invalid input\n');
      logCurrentDir();
    }
  }
});
rl.on('SIGINT', () => {
  process.exit();
});
