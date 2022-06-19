import os from 'os';
export async function getCPUs() {
  const cpusInfo = os.cpus();
  process.stdout.write(`Количество ядер: ${cpusInfo.length}\n`);
  cpusInfo.forEach((item) => {
    process.stdout.write(
      `Model: ${item.model} Clock rate: ${item.speed / 1000} GHz\n`
    );
  });
  return '';
}
