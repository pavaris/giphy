export const FAVORITED = "FAVORITED";

export const favorited = (giphyObj) => ({
  type: FAVORITED,
  gif: giphyObj
});
