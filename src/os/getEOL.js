import os from 'os';
export async function getEOL() {
  return JSON.stringify(os.EOL);
}
