// @flow
import 'babel-polyfill';
export async function getRepositories(
  url: string,
): Promise<Array<Object> | void> {
  let response = await fetch(url)
    .then((res) => res.json())
    .catch((error) => {
      console.log(error);
    });
  return response;
}
