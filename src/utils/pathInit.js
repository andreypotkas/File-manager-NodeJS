import * as path from 'path';
import { fileURLToPath } from 'url';

export function pathInit(url) {
  const __filename = fileURLToPath(url);
  const args = Object.values(arguments).slice(1);
  const __dirname = path.dirname(__filename);
  const pathUrl = path.resolve(__dirname, ...args);
  return pathUrl;
}
