export function calculateStars(rating: number): {
  full: number;
  half: number;
  empty: number;
} {
  if (isNaN(rating) || rating < 0) {
    return { full: 0, half: 0, empty: 5 };
  }

  const normalizedRating = Math.min(rating, 10) / 2;

  const fullStars = Math.floor(normalizedRating);
  const halfStar = normalizedRating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  return {
    full: fullStars,
    half: halfStar,
    empty: emptyStars,
  };
}

export function formatVotes(votes: string): string {
  if (!votes || votes === "N/A") {
    return "0";
  }

  const numVotes = parseInt(votes.replace(/,/g, ""));

  if (isNaN(numVotes)) {
    return "0";
  }

  if (numVotes >= 1000000) {
    return (numVotes / 1000000).toFixed(1) + "M";
  } else if (numVotes >= 1000) {
    return (numVotes / 1000).toFixed(1) + "K";
  }

  return numVotes.toString();
}
