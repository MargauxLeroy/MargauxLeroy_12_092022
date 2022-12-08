/**
 * Function that will fetch the URI
 * @param uri
 * @returns { Promise<any> }
 */
export const fetchData = async (uri?: string): Promise<any> => {
  if (!uri) return;

  const data = await fetch(uri);
  const response = await data.json();

  return response.data;
};
