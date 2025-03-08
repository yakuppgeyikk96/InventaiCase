import { MovieType } from "@/types";

const movieTypeOptions: { value: MovieType | undefined; label: string }[] = [
  { value: undefined, label: "All Types" },
  { value: "movie", label: "Movies" },
  { value: "series", label: "Series" },
  { value: "game", label: "Games" },
];

export default movieTypeOptions;
