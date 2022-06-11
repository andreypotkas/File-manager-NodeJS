import { getUserName } from './utils/login.js';
import readline from 'readline';
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const userName = getUserName();
process.stdout.write(`Welcome to the File Manager, ${userName}!\n`);

rl.on('line', async (msg) => {
  const msgToString = msg.toString().trim();
  const inputArgsArray = msgToString.split(' ');
  const command = inputArgsArray[0];
  switch (command) {
    case '.exit': {
      process.stdout.write(`Thank you for using File Manager, ${userName}`);
      process.exit();
    }
  }
});
