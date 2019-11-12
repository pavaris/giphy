export const SEARCHING = "SEARCHING";
export const QUERY = "QUERY";
export const FAVORITED = "FAVORITED";
export const UNFAVORITED = "UNFAVORITED";

export const searching = () => ({ type: SEARCHING });
export const query = (queryString) => ({ type: QUERY, query: queryString });
export const favorited = (giphyObj) => ({ type: FAVORITED, gif: giphyObj });
export const unfavorited = (giphyObj) => ({ type: UNFAVORITED, gif: giphyObj });
