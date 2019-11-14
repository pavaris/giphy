export const UNFAVORITED = "UNFAVORITED";

export const unfavorited = (giphyObj) => ({
  type: UNFAVORITED,
  gif: giphyObj
});
