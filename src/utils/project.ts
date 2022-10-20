import { readFile } from 'fs/promises';

// interface ProjectMetaData {
//   name: string,
//   version: string,
//   license: string,
//   dependencies: object
// }

export async function readPackageJson(cwd: string): Promise<object> {
  // It converts first the result of the Buffer to unknown
  // and then coverts later to ProjectMetaData.
  const result = await readFile(`${cwd}/package.json`, 'utf8');
  const resultParsed : { name: string, version: string, license: string, dependencies: object } = JSON.parse(result);
  return resultParsed;
}
