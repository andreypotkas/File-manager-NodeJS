import { start, rl, logCurrentDir, getCommandArgs } from '../utils/index.js';
import {
  getArchitecture,
  getCPUs,
  getEOL,
  getHomeDir,
  getUserName,
} from '../os/index.js';
import {
  create,
  list,
  read,
  rename,
  copy,
  remove,
  changeDirrectory,
} from '../fs/index.js';
import path from 'path';
import { hash } from '../hash/hash.js';
import { compress, decompress } from '../zip/index.js';

const userName = start();
rl.on('line', async (cmd) => {
  const commandArgs = getCommandArgs(cmd);
  switch (commandArgs.cmd) {
    case '.exit': {
      process.stdout.write(`Thank you for using File Manager, ${userName}`);
      process.exit();
    }
    case 'cd': {
      await changeDirrectory(commandArgs);
      logCurrentDir();
      break;
    }
    case 'up': {
      try {
        process.chdir(`${path.join(process.cwd(), '..')}`);
      } catch (err) {
        console.error('Operation failed');
      }
      logCurrentDir();
      break;
    }
    case 'ls': {
      await list(process.cwd());
      logCurrentDir();
      break;
    }
    case 'cat': {
      await read(process.cwd(), commandArgs.arg);
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
    case 'os': {
      switch (commandArgs.arg.toString()) {
        case '--EOL':
          process.stdout.write(`${await getEOL()}\n`);
          break;
        case '--cpus':
          await getCPUs();
          break;
        case '--homedir':
          process.stdout.write(`${await getHomeDir()}\n`);
          break;
        case '--username':
          process.stdout.write(`${await getUserName()}\n`);
          break;
        case '--architecture':
          process.stdout.write(`${await getArchitecture()}\n`);
          break;
        default:
          '';
      }
      logCurrentDir();
      break;
    }
    case 'hash': {
      await hash(process.cwd(), commandArgs.arg);
      break;
    }
    case 'compress': {
      await compress(process.cwd(), commandArgs.arg, commandArgs.arg1);
      break;
    }
    case 'decompress': {
      await decompress(process.cwd(), commandArgs.arg, commandArgs.arg1);
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
  process.stdout.write(`Thank you for using File Manager, ${userName}`);
  process.exit();
});
