export const API_CONFIG = {
  BASE_URL: "https://www.omdbapi.com/",
  API_KEY: import.meta.env.VITE_OMDB_API_KEY || "YOUR_OMDB_API_KEY",
};

export const APP_CONFIG = {
  DEFAULT_SEARCH_TERM: "Pokemon",
  ITEMS_PER_PAGE: 10,
};
