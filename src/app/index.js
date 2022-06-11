import { start, rl, logCurrentDir, getCommandArgs } from '../utils/index.js';
import path from 'path';
import { list } from '../fs/list.js';

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
    default: {
      process.stdout.write('Invalid input\n');
      logCurrentDir();
    }
  }
});
rl.on('SIGINT', () => {
  process.exit();
});
