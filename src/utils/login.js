import { argv } from 'node:process';
export function getUserName() {
  let userName = '';
  argv.slice(2).forEach((item) => {
    if (item.startsWith('--username')) {
      userName = item.replace('--username=', '');
    }
  });
  return userName;
}
