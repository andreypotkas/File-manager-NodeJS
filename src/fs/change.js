export async function changeDirrectory(commandArgs) {
  try {
    process.chdir(`${commandArgs.arg}`);
  } catch (err) {
    console.error('Operation failed');
  }
}
