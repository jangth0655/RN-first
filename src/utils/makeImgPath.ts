export const makeImagePath = (image: string, width: string) => {
  return `https://image.tmdb.org/t/p/${width}${image}`;
};
