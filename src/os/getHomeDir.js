import os from 'os';
export async function getHomeDir() {
  return os.homedir();
}
