import os from 'os';
export async function getArchitecture() {
  return os.arch();
}
