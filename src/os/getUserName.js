import os from 'os';

export async function getUserName() {
  return os.userInfo().username;
}
