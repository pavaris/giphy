export const QUERY = "QUERY";

export const query = (queryString) => ({
  type: QUERY,
  query: queryString
});
