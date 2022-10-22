import { readFile } from 'fs/promises';

export async function readPackageJson(cwd: string): Promise<object> {
  const result = await readFile(`${cwd}/package.json`, 'utf8');
  const resultParsed: { name: string, version: string, license: string, dependencies: object } = JSON.parse(result);
  return resultParsed;
}
