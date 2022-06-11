export function logCurrentDir() {
  process.stdout.write(`You are currently in: ${process.cwd()}\n`);
  return '';
}
