export const SEARCHING = "SEARCHING";
export const QUERY = "QUERY";

export const searching = () => ({ type: SEARCHING });
export const query = (queryString) => ({ type: QUERY, query: queryString });
