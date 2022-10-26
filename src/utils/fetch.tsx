/**
 * Une seule fonction générale de fetch
 * @param uri
 * @returns
 */

export const fetchData = async (uri?: string) => {
  if (!uri) return;
  console.log(uri);

  const data = await fetch(uri);
  const response = await data.json();

  return response.data;
};

// const createClass = (uri: string) => {
//   /// TODO fonction(uri) => pour retourner les class (grâce au path)
//   const resource = uri.split("/")[uri.length - 1];

//   if (resource === "performance") {
//     return new Performance();
//   }
// };
