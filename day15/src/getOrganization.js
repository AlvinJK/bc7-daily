// @flow
import 'babel-polyfill';
export async function getOrganization(org: string): Promise<Object | void> {
  let url = `https://api.github.com/orgs/${org}`;
  let response = await fetch(url)
    .then((res) => res.json())
    .catch((error) => {
      console.log(error);
    });
  return response;
}
