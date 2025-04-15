


const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOWEwMWMyZmM4NTc2ZmI1ZmM1OTJmNDBkNWVjNTJmZCIsIm5iZiI6MTc0NDIyNzkwMi45NTIsInN1YiI6IjY3ZjZjZTNlZDRjNDQ0YTFjYzk5NGIzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p2kLTV2BzMCsf9Dhl-9oyN7KwSiVWlqr3z4ElDS_eMk",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
